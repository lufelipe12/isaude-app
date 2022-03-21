//Receber por prop o objeto vacina.

//Exibir as seguintes informações: Nome, nome do fabricante, data da aplicação, lote, local,
//data da próxima dose (se houver próxima data, exibir a próxima data. se não houver, colocar dose única ou esquema completo)

// Deve conter um botão para deletar a vacina e um botão para editar, que abre o modal para editar a vacina.
//Seguir a estilização do figma.
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
    const dataArr = data.split("/");
    let newDataArr = [];

    for (let i = 0; i < dataArr.length; i++) {
      if (i < dataArr.length - 1) {
        newDataArr.unshift(dataArr[i]);
      } else {
        newDataArr.push(dataArr[i]);
      }
    }
    const formatedData = newDataArr.join("/");

    return formatedData;
  }

  const nextShotDate = new Date(dataConverter(vaccine.nextShot));

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
              <button onClick={() => delVaccine(vaccine.id)}>
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

export default Card
