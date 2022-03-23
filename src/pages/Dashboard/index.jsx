import { useVaccines } from "../../providers/vaccines";
import { useUser } from "../../providers/user";
import Card from "../../components/Card";
import Header from "../../components/Header";
import {
  CardContainer,
  DashHeader,
  StyledContainer,
  UserContainer,
  UserData,
  UserInfos,
  ContainerSearchMobile,
  FilterInputMobile,
  SkeletonContainer,
  ButtonsFilterContainer,
} from "./styles";
import pdfMaker from "../../utils/pdfGen";
import { useEffect, useState } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { Tooltip, Skeleton } from "@mui/material";
import { MdAddCircle } from "react-icons/md";
import NewVaccineModal from "../../components/NewVaccineModal";
import EditVaccineModal from "../../components/EditVaccineModal";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { vaccines, setVaccines, getVaccines, filterInput, setFilterInput } =
    useVaccines();

  const { user } = useUser();

  const [filterVaccines, setFilterVaccines] = useState([]);

  // Estados e funções do modal para cadastrar uma nova vacina:
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false);

  // Estado para armazenar qual vacina quer mudar ao clicar no botão.

  const [vaccineToChange, setVaccineToChange] = useState("");

  //Estados e funções do modal para editar uma vacina:
  const [isEditVaccineModalOpen, setIsEditVaccineModalOpen] = useState(false);

  useEffect(() => {
    getVaccines();
  }, []);

  const vaccinesOrder = vaccines.sort((vaccine1, vaccine2) =>
    vaccine2.name.toLowerCase() > vaccine1.name.toLowerCase()
      ? -1
      : vaccine2.name.toLowerCase() < vaccine1.name.toLowerCase()
      ? 1
      : 0
  );

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

  function dataConverter(data) {
    return data.split("-").reverse().join("/");
  }

  const FilterNextShot = () => {
    const newVaccines = vaccines;
    const filterd = newVaccines.filter((element) => {
      return element.nextShot !== "Esquema completo";
    });
    setFilterVaccines(filterd);
  };
  const FilterByVaccined = () => {
    const newVaccines = vaccines;

    const filterd = newVaccines.filter((element) => {
      return element.nextShot === "Esquema completo";
    });
    setFilterVaccines(filterd);
  };

  const FilterByDate = () => {
    const newVaccines = vaccines;
    newVaccines.sort(
      (vaccine1, vaccine2) =>
        new Date(vaccine1.applicationDate) - new Date(vaccine2.applicationDate)
    );
    setFilterVaccines(newVaccines);
  };

  const FilterByAll = () => {
    const newVaccines = vaccines;

    newVaccines.sort((vaccine1, vaccine2) =>
      vaccine2.name.toLowerCase() > vaccine1.name.toLowerCase()
        ? -1
        : vaccine2.name.toLowerCase() < vaccine1.name.toLowerCase()
        ? 1
        : 0
    );
    setFilterVaccines(newVaccines);
  };

  return (
    <main>
      <Header dash setFilterInput={setFilterInput} filterInput={filterInput} />
      <DashHeader>
        <ContainerSearchMobile>
          <FilterInputMobile
            type="text"
            placeholder="Pesquise sua vacina"
            value={filterInput}
            onChange={(event) => setFilterInput(event.target.value)}
          />
        </ContainerSearchMobile>
        <ButtonsFilterContainer>
          <button onClick={FilterByAll}>Todos</button>
          <button onClick={FilterByVaccined}>Esquema Completo</button>
          <button onClick={FilterByDate}>Data</button>
          <button onClick={FilterNextShot}>À Vacinar</button>
        </ButtonsFilterContainer>
        <UserContainer>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            alt="userImage"
          />
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
              <div className="segunda-coluna">
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
        <Tooltip title="Gerar PDF das vacinas">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            onClick={() => pdfMaker(user.info, vaccines)}
          >
            <GrDocumentPdf style={{ fontSize: "23px" }} />
          </motion.button>
        </Tooltip>
      </DashHeader>
      <CardContainer>
        {vaccines.length === 0 ? (
          <SkeletonContainer>
            <div>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </div>
            <div>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </div>
            <div>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </div>
            <div>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </div>
            <div>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </div>
            <div>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </div>
          </SkeletonContainer>
        ) : filterVaccines.length === 0 ? (
          vaccinesOrder.map((vaccine, index) => (
            <Card
              vaccine={vaccine}
              key={index}
              setVaccineToChange={setVaccineToChange}
              openEditVaccineModal={openEditVaccineModal}
            />
          ))
        ) : (
          filterVaccines.map((vaccine, index) => (
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
        <Tooltip title="Cadastrar nova vacina">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={openNewVaccineModal}
          >
            <MdAddCircle style={{ fontSize: "40px" }} />
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
  );
};

export default Dashboard;
