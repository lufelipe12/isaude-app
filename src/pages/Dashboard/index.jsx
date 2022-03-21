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
} from "./styles";
import pdfMaker from "../../utils/pfvGen";
import { useEffect, useState } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import Tooltip from "@mui/material/Tooltip";
import { Redirect } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import NewVaccineModal from "../../components/NewVaccineModal";
import EditVaccineModal from "../../components/EditVaccineModal";

const Dashboard = () => {
  const { vaccines, getVaccines } = useVaccines();
  const { user } = useUser();

  const vaccinesOrder = vaccines.sort(
    (vaccine1, vaccine2) =>
      new Date(vaccine1.applicationDate) - new Date(vaccine2.applicationDate)
  );

  // Estados e funções do modal para cadastrar uma nova vacina:
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false);

  // Estado para armazenar qual vacina quer mudar ao clicar no botão.
  const [vaccineToChange, setVaccineToChange] = useState("");

  //Estados e funções do modal para editar uma vacina:
  const [isEditVaccineModalOpen, setIsEditVaccineModalOpen] = useState(false);

  useEffect(() => {
    getVaccines();
  }, []);

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

  if (!user.token) {
    return <Redirect to="/login" />;
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
        <Tooltip title="Gerar PDF das vacinas">
          <button onClick={() => pdfMaker(user.info, vaccines)}>
            <GrDocumentPdf style={{ fontSize: "23px" }} />
          </button>
        </Tooltip>
      </DashHeader>

      <CardContainer>
        {vaccinesOrder.map((vaccine, index) => (
          <Card
            vaccine={vaccine}
            key={index}
            setVaccineToChange={setVaccineToChange}
            openEditVaccineModal={openEditVaccineModal}
          />
        ))}
      </CardContainer>
      <StyledContainer>
        <Tooltip title="Cadastrar nova vacina">
          <button onClick={openNewVaccineModal}>
            <MdAddCircle style={{ fontSize: "40px" }} />
          </button>
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
