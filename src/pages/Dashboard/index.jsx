import { useState } from "react";
import { useVaccines } from "../../providers/vaccines";
import Card from "../../components/Card";
import Header from "../../components/Header";
import NewVaccineModal from "../../components/NewVaccineModal";
import EditVaccineModal from "../../components/EditVaccineModal";

import {
  DashHeader,
  UserContainer,
  UserInfos,
  UserData,
  CardContainer,
} from "./styles";

import { GrDocumentPdf } from "react-icons/gr";

const Dashboard = () => {
  // Estados e funções do modal para cadastrar uma nova vacina:
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false);

  function openNewVaccineModal() {
    setIsNewVaccineModalOpen(true);
  }

  function closeNewVaccineModal() {
    setIsNewVaccineModalOpen(false);
  }

  //Estados e funções do modal para editar uma vacina:
  const [isEditVaccineModalOpen, setIsEditVaccineModalOpen] = useState(false);

  function openEditVaccineModal() {
    setIsEditVaccineModalOpen(true);
  }

  function closeEditVaccineModal() {
    setIsEditVaccineModalOpen(false);
  }

  // Estado para armazenar qual vacina quer mudar ao clicar no botão.

  const [vaccineToChange, setVaccineToChange] = useState("");

  const vaccines = [
    {
      userId: 2,
      name: "Febre Amarela",
      manufacturer: "Oxford",
      lote: 2337593279,
      applicationDate: "19/01/2022",
      shot: 2,
      location: "Araguari",
      totalShots: 2,
      nextShot: "20/04/2022",
    },
    {
      userId: 2,
      name: "Covid-19",
      manufacturer: "Oxford",
      lote: 2337593279,
      applicationDate: "19/01/2022",
      shot: 2,
      location: "Araguari",
      totalShots: 2,
      nextShot: "20/04/2022",
    },
    {
      userId: 2,
      name: "Tétano",
      manufacturer: "Oxford",
      lote: 2337593279,
      applicationDate: "19/01/2022",
      shot: 2,
      location: "Araguari",
      totalShots: 2,
      nextShot: "20/04/2022",
    },
    {
      userId: 2,
      name: "Covid-19",
      manufacturer: "Oxford",
      lote: 2337593279,
      applicationDate: "19/01/2022",
      shot: 2,
      location: "Araguari",
      totalShots: 2,
      nextShot: "20/04/2022",
    },
  ];

  const user = [
    {
      name: "Nehama",
      email: "email1@email.com",
      password: 123456,
      dateOfBirth: "20/10/1989",
      gender: "masculino",
      cpf: 94743482982,
      city: "Belo Horizonte",
      state: "MG",
    },
  ];
  return (
    <>
      <main>
        <Header dash />
        <DashHeader>
          <UserContainer>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
              alt="userImage"
            />
            <UserInfos>
              <h3>{user.name}</h3>
              <UserData>
                <div>
                  <span>Nascimento</span>
                  <p>{user.birthday}</p>
                </div>
                <div>
                  <span>Sexo</span>
                  <p>{user.gender}</p>
                </div>
                <div>
                  <span>CPF</span>
                  <p>{user.cpf}</p>
                </div>
                <div>
                  <span>CNS</span>
                  <p>{user.cns}</p>
                </div>
              </UserData>
            </UserInfos>
          </UserContainer>
          <button>
            <GrDocumentPdf style={{ "font-size": "23px" }} />
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
          Dashboard
          <button onClick={openNewVaccineModal}>
            Abrir Modal Para cadastrar nova vacina
          </button>
          <button onClick={openEditVaccineModal}>
            Abrir Modal de Editar vacina
          </button>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
