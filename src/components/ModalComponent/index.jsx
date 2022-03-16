import Modal from "react-modal"

// Props esperadas: isModalOpen: estado que determina se o modal está aberto.
// closeModal: função para fechar o modal.

const ModalComponent = ({children, isModalOpen, closeModal}) => {
  Modal.setAppElement("#root")

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <button onClick={closeModal} className="close-modal">
        X
      </button>
      {children}
    </Modal>
  )
}

export default ModalComponent
