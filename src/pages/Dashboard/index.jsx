import {useState} from "react"
import ModalComponent from "../../components/ModalComponent"

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }
  return (
    <div>
      <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal}>
        <h1>Teste de Modal Para ver como está </h1>
      </ModalComponent>
      Dashboard
      <button onClick={openModal}>Abrir Modal de teste</button>
    </div>
  )
}

export default Dashboard
