import { useVaccines } from "../../providers/vaccines";
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

function Card({ vaccine, setVaccineToChange, openEditVaccineModal }) {
  const { delVaccine } = useVaccines();

  const atualDate = new Date();

  const monthToMs = 2628000000;

  function dataConverter(data) {
    return data.split("-").reverse().join("/")
  }

  const nextShotDate = new Date(vaccine.nextShot);

  const time = ((nextShotDate - atualDate) / monthToMs).toFixed(2);

  function handleOpenEditVaccineModal() {
    setVaccineToChange(vaccine);
    openEditVaccineModal();
  }

  return (
    <>
      <Container time={time}>
        <ContainerTop time={time}>
          <h3>{vaccine.name}</h3>
        </ContainerTop>
        <ContainerInfo>
          <ContainerColumn>
            <Info type={"label"}>Aplicação</Info>
            <Info>{dataConverter(vaccine.applicationDate)}</Info>
            <Info type={"label"}>Próxima dose</Info>
            <Info>{dataConverter(vaccine.nextShot)}</Info>
          </ContainerColumn>
          <ContainerColumn>
            <Info type={"label"}>Fabricante</Info>
            <Info>{vaccine.manufacturer}</Info>
            <Info type={"label"}>Lote</Info>
            <Info>{vaccine.batch}</Info>
          </ContainerColumn>
        </ContainerInfo>
        <ContainerStatus>
          <div>
            <Info>Local: {vaccine.location}</Info>
            <ContainerButtons>
              <button onClick={handleOpenEditVaccineModal}>
                <FaRegEdit />
              </button>
              <button onClick={() => delVaccine(vaccine._id)}>
                <FaTrash />
              </button>
            </ContainerButtons>
          </div>
          <Status time={time}>
            {time <= 0
              ? "NÃO VACINADO"
              : time < 1
              ? "VACINAÇÃO PRÓXIMA"
              : "VACINADO"}
          </Status>
        </ContainerStatus>
      </Container>
    </>
  );
}

export default Card;
