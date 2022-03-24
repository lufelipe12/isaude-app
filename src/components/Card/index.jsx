import {useVaccines} from "../../providers/vaccines"
import {
  Container,
  ContainerTop,
  ContainerInfo,
  ContainerColumn,
  Info,
  ContainerStatus,
  Status,
  ContainerButtons,
} from "./styles"

import {FaRegEdit, FaTrash} from "react-icons/fa"
import {useEffect} from "react"

function Card({
  vaccine,
  setVaccineToChange,
  openEditVaccineModal,
  filterVaccines,
  setFilterVaccines,
}) {
  const {delVaccine} = useVaccines()

  const atualDate = new Date()

  const monthToMs = 2628000000

  function dataConverter(data) {
    return data.split("-").reverse().join("/")
  }

  const nextShotDate = new Date(vaccine.nextShot)

  const time = ((nextShotDate - atualDate) / monthToMs).toFixed(2)

  function handleOpenEditVaccineModal() {
    setVaccineToChange(vaccine)
    openEditVaccineModal()
  }

  async function handleDeleteVaccine(vaccine) {
    await delVaccine(vaccine._id)
    if (filterVaccines.length > 0) {
      const newFilterVaccine = filterVaccines.filter(
        (vaccineInFilter) => vaccineInFilter._id !== vaccine._id
      )
      setFilterVaccines(newFilterVaccine)
    }
  }
  useEffect(() => {
    console.log(filterVaccines)
  }, [filterVaccines])

  return (
    <>
      <Container time={time}>
        <ContainerTop time={time}>
          <h3>{vaccine.name}</h3>
        </ContainerTop>
        <ContainerInfo>
          <ContainerColumn time={time}>
            <Info type={"label"}>Aplicação</Info>
            <Info>{dataConverter(vaccine.applicationDate)}</Info>
            <Info type={"label"}>Próxima dose</Info>
            <Info>{dataConverter(vaccine.nextShot)}</Info>
          </ContainerColumn>
          <ContainerColumn time={time}>
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
              <button onClick={() => handleDeleteVaccine(vaccine)}>
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
  )
}

export default Card
