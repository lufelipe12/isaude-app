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

/*
.modal-content {
    width: 100%;
    max-width: 370px;
    background: var(--grey-3);
    padding: 1.5rem;
    position: relative;
    border-radius: var(--radius-inputs-buttons-cards);
    h3{
        margin-bottom: 1rem;
        color: var(--grey-0);
        font-size: 14px;
    }
    p{
        color: var(--grey-0);
        margin-bottom: 5px;
    }
}
.modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.close-modal{
    color: var(--grey-1);
    background: transparent;
    border: none;
    position: absolute;
    right: 36px;
    top: 21px;
}
`;







*/
