import { useStete } from 'react'
import pdfMaker from '../../utils/pdfGen'
import { useEffect, useState } from 'react'
import { GrDocumentPdf } from 'react-icons/gr'
import { Tooltip, Skeleton } from '@mui/material'
import { MdAddCircle } from 'react-icons/md'
import NewVaccineModal from '../../components/NewVaccineModal'
import EditVaccineModal from '../../components/EditVaccineModal'
import { motion } from 'framer-motion'

import { useVaccines } from '../../providers/vaccines'
import { useUser } from '../../providers/user'
import Card from '../../components/Card'
import Header from '../../components/Header'
import {
  CardContainer,
  DashHeader,
  StyledContainer,
  UserContainer,
  UserData,
  UserInfos,
  ContainerSearchMobile,
  FilterInputMobile,
  SkeletonContainer
} from './styles'

const Dashboard = () => {
  const { vaccines, getVaccines, filterInput, setFilterInput } = useVaccines()
  const [profilePicture, setProfilePicture] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png")

  const { user } = useUser()

  // Estados e funções do modal para cadastrar uma nova vacina:
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false)

  // Estado para armazenar qual vacina quer mudar ao clicar no botão.

  const [vaccineToChange, setVaccineToChange] = useState('')

  //Estados e funções do modal para editar uma vacina:
  const [isEditVaccineModalOpen, setIsEditVaccineModalOpen] = useState(false)

  useEffect(() => {
    getVaccines()
  }, [])

  const vaccinesOrder = vaccines.sort(
    (vaccine1, vaccine2) =>
      new Date(vaccine1.applicationDate) - new Date(vaccine2.applicationDate)
  )

  function openNewVaccineModal() {
    setIsNewVaccineModalOpen(true)
  }

  function closeNewVaccineModal() {
    setIsNewVaccineModalOpen(false)
  }

  function openEditVaccineModal() {
    setIsEditVaccineModalOpen(true)
  }

  function closeEditVaccineModal() {
    setIsEditVaccineModalOpen(false)
  }

  function dataConverter(data) {
    return data.split('-').reverse().join('/')
  }

  const uploadProfilePicture = (e) => {
    const reader = new FileReader();
    console.log(reader)
    const file = e.target.files[0];
    reader.onloadend = () => setProfilePicture(reader.result)
    reader.readAsDataURL(file);
  }

  return (
    <main>
      <Header dash setFilterInput={setFilterInput} filterInput={filterInput} />
      <DashHeader>
        <ContainerSearchMobile>
          <FilterInputMobile
            type='text'
            placeholder='Pesquise sua vacina'
            value={filterInput}
            onChange={(event) => setFilterInput(event.target.value)}
          />
        </ContainerSearchMobile>
        <UserContainer>
          <Tooltip title='Clique para mudar sua foto de perfil'>
              <img
            src={profilePicture}
            alt='userImage'
            onClick={(e) => uploadProfilePicture(e)}
          />
          </Tooltip>
        
          <UserInfos>
            <h3>{user.info.name}</h3>
            <UserData>
              <div>
                <div>
                  <span>Nascimento</span>
                  <p>{dataConverter(user.info.dateOfBirth)}</p>
                </div>
                <div>
                  <span>CPF</span>
                  <p>{user.info.cpf}</p>
                </div>
              </div>
              <div className='segunda-coluna'>
                <div>
                  <span>Sexo</span>
                  <p>{user.info.gender}</p>
                </div>
                <div>
                  <span>Estado</span>
                  <p>{user.info.state}</p>
                </div>
              </div>
            </UserData>
          </UserInfos>
        </UserContainer>
        <Tooltip title='Gerar PDF das vacinas'>
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            onClick={() => pdfMaker(user.info, vaccines)}
          >
            <GrDocumentPdf style={{ fontSize: '23px' }} />
          </motion.button>
        </Tooltip>
      </DashHeader>
      <CardContainer>
        {vaccines.length === 0 ? (
          <SkeletonContainer>
            <div>
              <Skeleton variant='rectangular' width={210} height={118} />
              <Skeleton />
              <Skeleton width='60%' />
            </div>
            <div>
              <Skeleton variant='rectangular' width={210} height={118} />
              <Skeleton />
              <Skeleton width='60%' />
            </div>
            <div>
              <Skeleton variant='rectangular' width={210} height={118} />
              <Skeleton />
              <Skeleton width='60%' />
            </div>
            <div>
              <Skeleton variant='rectangular' width={210} height={118} />
              <Skeleton />
              <Skeleton width='60%' />
            </div><div>
              <Skeleton variant='rectangular' width={210} height={118} />
              <Skeleton />
              <Skeleton width='60%' />
            </div><div>
              <Skeleton variant='rectangular' width={210} height={118} />
              <Skeleton />
              <Skeleton width='60%' />
            </div>
           
           
          </SkeletonContainer>
        ) : (
          vaccinesOrder.map((vaccine, index) => (
            <Card
              vaccine={vaccine}
              key={index}
              setVaccineToChange={setVaccineToChange}
              openEditVaccineModal={openEditVaccineModal}
            />
          ))
        )}
      </CardContainer>

      <StyledContainer>
        <Tooltip title='Cadastrar nova vacina'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={openNewVaccineModal}
          >
            <MdAddCircle style={{ fontSize: '40px' }} />
          </motion.button>
        </Tooltip>
        <div>
          <NewVaccineModal
            isModalOpen={isNewVaccineModalOpen}
            closeModal={closeNewVaccineModal}
          />
          <EditVaccineModal
            isModalOpen={isEditVaccineModalOpen}
            closeModal={closeEditVaccineModal}
            vaccineToChange={vaccineToChange}
          />
        </div>
      </StyledContainer>
    </main>
  )
}

export default Dashboard
