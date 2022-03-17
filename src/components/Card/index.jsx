import {
  Container,
  ContainerTop,
  ContainerInfo,
  ContainerColumn,
  Info,
  ContainerStatus,
  Status,
  ContainerButtons,
} from "./styles";

import { FaRegEdit, FaTrash } from "react-icons/fa";

function Card({ vaccine, type, status = "VACINADO",setVaccineToChange, openEditVaccineModal }) {
  //Uma condição para as datas das vacinas definira a dinâmica
  // if date is approaching, else type="approaching" status="Vacinação Proxima"
  // if date is undefined, else type="not-vaccinated" status="Não Vacinado"
  // else type="" status="VACINADO"
  //passando o type por props

  //a prop status se refere a children de <Status>{status}</Status>
  function handleOpenEditVaccineModal() {
    setVaccineToChange(vaccine)
    openEditVaccineModal()
  }
  return (
    <>
      <Container type={type}>
        <ContainerTop type={type}>
          <h3>{vaccine.name}</h3>
        </ContainerTop>

        <ContainerInfo>
          <ContainerColumn>
            <Info type={"label"}>Aplicação</Info>
            <Info>{vaccine.applicationDate}</Info>
            <Info type={"label"}>Próxima</Info>
            <Info>{vaccine.nextShot}</Info>
          </ContainerColumn>
          <ContainerColumn>
            <Info type={"label"}>Fabricante</Info>
            <Info>{vaccine.manufacturer}</Info>
            <Info type={"label"}>Lote</Info>
            <Info>{vaccine.lote}</Info>
          </ContainerColumn>
        </ContainerInfo>
        <ContainerStatus>
          <div>
            <Info>Local: {vaccine.location}</Info>
            <ContainerButtons>
              <button onClick={handleOpenEditVaccineModal}>
                <FaRegEdit />
              </button>
              <button>
                <FaTrash />
              </button>
            </ContainerButtons>
          </div>

          <Status type={type}>{status}</Status>
        </ContainerStatus>
      </Container>
    </>
  );
}

export default Card;
