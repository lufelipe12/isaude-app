import {useState} from "react"
import {useVaccines} from "../../providers/vaccines"
import Card from "../../components/Card"
import Header from "../../components/Header"
import NewVaccineModal from "../../components/NewVaccineModal"
import EditVaccineModal from "../../components/EditVaccineModal"

const Dashboard = () => {
  // Estados e funções do modal para cadastrar uma nova vacina:
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false)

  function openNewVaccineModal() {
    setIsNewVaccineModalOpen(true)
  }

  function closeNewVaccineModal() {
    setIsNewVaccineModalOpen(false)
  }

  //Estados e funções do modal para editar uma vacina:
  const [isEditVaccineModalOpen, setIsEditVaccineModalOpen] = useState(false)

  function openEditVaccineModal() {
    setIsEditVaccineModalOpen(true)
  }

  function closeEditVaccineModal() {
    setIsEditVaccineModalOpen(false)
  }

  // Estado para armazenar qual vacina quer mudar ao clicar no botão.

  const [vaccineToChange, setVaccineToChange] = useState("")

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
  ]

  return (
    <>
      <Header dash />
      <div>
        {vaccines.map((vaccine, index) => (
          <Card
            vaccine={vaccine}
            key={index}
            setVaccineToChange={setVaccineToChange}
            openEditVaccineModal={openEditVaccineModal}
          />
        ))}
      </div>
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
    </>
  )
}

export default Dashboard
