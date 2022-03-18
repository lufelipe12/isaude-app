import { useVaccines } from "../../providers/vaccines"
import { useUser } from "../../providers/user"
import Card from "../../components/Card"
import Header from "../../components/Header"
import {
  CardContainer,
  DashHeader,
  StyledContainer,
  UserContainer,
  UserData,
  UserInfos,
} from "./styles"
import pdfMaker from "../../utils/pfvGen"
import { useEffect, useState } from "react"
import { GrDocumentPdf } from "react-icons/gr"
import { MdAddCircle } from "react-icons/md"
import NewVaccineModal from "../../components/NewVaccineModal"
import EditVaccineModal from "../../components/EditVaccineModal"

const Dashboard = () => {
  const { vaccines, getVaccines } = useVaccines()
  const { user } = useUser()

  // Estados e funções do modal para cadastrar uma nova vacina:
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false);

  // Estado para armazenar qual vacina quer mudar ao clicar no botão.
  const [vaccineToChange, setVaccineToChange] = useState("")

  //Estados e funções do modal para editar uma vacina:
  const [isEditVaccineModalOpen, setIsEditVaccineModalOpen] = useState(false)

  useEffect(() => {
    getVaccines()
  }, [])

  function openNewVaccineModal() {
    setIsNewVaccineModalOpen(true);
  }

  function closeNewVaccineModal() {
    setIsNewVaccineModalOpen(false);
  }

  function openEditVaccineModal() {
    setIsEditVaccineModalOpen(true);
  }

  function closeEditVaccineModal() {
    setIsEditVaccineModalOpen(false);
  }


 
  return (
    <main>
      <Header dash />
      <DashHeader>
      <UserContainer>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt="userImage"
        />
        <UserInfos>
          <h3>{user.info.name}</h3>
          <UserData>
            <div>
              <span>Nascimento</span>
              <p>{user.info.dateOfBirth}</p>
            </div>
            <div>
              <span>Sexo</span>
              <p>{user.info.gender}</p>
            </div>
            <div>
              <span>CPF</span>
              <p>{user.info.cpf}</p>
            </div>
            <div>
              <span>Estado</span>
              <p>{user.info.state}</p>
            </div>
          </UserData>
        </UserInfos>
        </UserContainer>
        <button onClick={() => pdfMaker(user, vaccines)}>
          <GrDocumentPdf style={{ fontSize: "23px" }} />
        </button>
      </DashHeader>
      <CardContainer>
        {vaccines.map((vaccine, index) => (
          <Card
            vaccine={vaccine}
            key={index}
            setVaccineToChange={setVaccineToChange}
            openEditVaccineModal={openEditVaccineModal}
          />
        ))}
      </CardContainer>
      <StyledContainer>
        <button  onClick={openNewVaccineModal}>
          <MdAddCircle style={{ fontSize: "40px" }} />
        </button>

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

export default Dashboard;
