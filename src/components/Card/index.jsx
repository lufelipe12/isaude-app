//Receber por prop o objeto vacina.

//Exibir as seguintes informações: Nome, nome do fabricante, data da aplicação, lote, local,
//data da próxima dose (se houver próxima data, exibir a próxima data. se não houver, colocar dose única ou esquema completo)

// Deve conter um botão para deletar a vacina e um botão para editar, que abre o modal para editar a vacina.
//Seguir a estilização do figma.

import {
  Container,
  ContainerTop,
  ContainerInfo,
  ContainerColumn,
  Info,
  ContainerStatus,
  Status,
  ContainerButtons,
} from './styles'

import { FaRegEdit, FaTrash } from 'react-icons/fa'

function Card({ vaccine }) {
  return (
    <>
      <Container>
        <ContainerTop>
          <h3>{vaccine.name}</h3>
        </ContainerTop>

        <ContainerInfo>
          <ContainerColumn>
            <Info type={'label'}>Aplicação</Info>
            <Info>{vaccine.application_date}</Info>
            <Info type={'label'}>Próxima</Info>
            <Info>{vaccine.date_next_dose}</Info>
          </ContainerColumn>
          <ContainerColumn>
            <Info type={'label'}>Fabricante</Info>
            <Info>{vaccine.manufacturer}</Info>
            <Info type={'label'}>Lote</Info>
            <Info>{vaccine.batch}</Info>
          </ContainerColumn>
        </ContainerInfo>
        <ContainerStatus>
          <div>
            <Info>Local: {vaccine.local}</Info>
            <ContainerButtons>
              <button>
                <FaRegEdit />
              </button>
              <button>
                <FaTrash />
              </button>
            </ContainerButtons>
          </div>

          <Status>VACINADO</Status>
        </ContainerStatus>
      </Container>
    </>
  )
}

export default Card
