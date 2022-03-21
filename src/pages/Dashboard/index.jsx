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
  ButtonSearchMobile,
} from "./styles";
import pdfMaker from "../../utils/pdfGen";
import { useEffect, useState } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import Tooltip from "@mui/material/Tooltip";
import { Redirect } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import NewVaccineModal from "../../components/NewVaccineModal";
import EditVaccineModal from "../../components/EditVaccineModal";

import { motion } from "framer-motion";

const Dashboard = () => {
  const { vaccines, getVaccines, setVaccines } = useVaccines();
  const [filterInput, setFilterInput] = useState("");
  const { user } = useUser();

  // Estados e funções do modal para cadastrar uma nova vacina:
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false);

  // Estado para armazenar qual vacina quer mudar ao clicar no botão.

  const [vaccineToChange, setVaccineToChange] = useState("");

  //Estados e funções do modal para editar uma vacina:
  const [isEditVaccineModalOpen, setIsEditVaccineModalOpen] = useState(false);

  useEffect(() => {
    getVaccines();
  }, []);

  const vaccinesOrder = vaccines.sort(
    (vaccine1, vaccine2) =>
      new Date(vaccine1.applicationDate) - new Date(vaccine2.applicationDate)
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

  function FilterCards() {
    if (filterInput === "") {
      getVaccines();
    } else {
      const filterd = vaccines.filter((element) =>
        element.name.toLowerCase().includes(filterInput.toLowerCase())
      );
      setVaccines(filterd);
    }
  }

  if (!user.token) {
    return <Redirect to="/login" />;
  }

  function dataConverter(data) {
    return data.split("-").reverse().join("/");
  }

  return (
    <main>
      <Header
        dash
        setFilterInput={setFilterInput}
        filterInput={filterInput}
        FilterCards={FilterCards}
      />
      <DashHeader>
        <ContainerSearchMobile>
          <FilterInputMobile
            type="text"
            placeholder="Pesquise sua vacina"
            value={filterInput}
            onChange={(event) => setFilterInput(event.target.value)}
          />
          <ButtonSearchMobile onClick={FilterCards}>
            Pesquisar
          </ButtonSearchMobile>
        </ContainerSearchMobile>
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
                <p>{dataConverter(user.info.dateOfBirth)}</p>
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
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
          >
            <button onClick={() => pdfMaker(user.info, vaccines)}>
              <GrDocumentPdf style={{ fontSize: "23px" }} />
            </button>
          </motion.button>
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
            <motion.button whileHover={{ scale: 1.1 }}>
              <MdAddCircle style={{ fontSize: "40px" }} />
            </motion.button>
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
