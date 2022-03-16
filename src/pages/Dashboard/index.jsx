import {useState} from "react"

import NewVaccineModal from "../../components/NewVaccineModal"

const Dashboard = () => {
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false)

  function openNewVaccineModal() {
    setIsNewVaccineModalOpen(true)
  }

  function closeNewVaccineModal() {
    setIsNewVaccineModalOpen(false)
  }
  return (
    <div>
      <NewVaccineModal
        isModalOpen={isNewVaccineModalOpen}
        closeModal={closeNewVaccineModal}
      />
      Dashboard
      <button onClick={openNewVaccineModal}>
        Abrir Modal Para cadastrar nova vacina
      </button>
    </div>
  )
}

export default Dashboard
