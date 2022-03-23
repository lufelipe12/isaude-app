import {
  Container,
  ContainerLeaders,
  ContainerQuite,
  ContainerOthers,
} from "./styles"

import equipe from "../../assets/equipe.jpg"

export function Footer() {
  return (
    <Container>
      <ContainerLeaders>
        <div>
          <p>Product Owner:</p>
          <ul>
            <li>
              <p>Luiz Felipe Dias</p>
            </li>
          </ul>
          <p>Tech Lead:</p>
          <ul>
            <li>
              <p>Larissa Paulino</p>
            </li>
          </ul>
          <p>Scrum Master:</p>
          <ul>
            <li>
              <p>Nehama</p>
            </li>
          </ul>
        </div>
      </ContainerLeaders>
      <ContainerQuite>
        <h3>EQUIPE</h3>
        <img src={equipe} alt="" />
      </ContainerQuite>
      <ContainerOthers>
        <div>
          <p>Quality Assurance:</p>
          <ul>
            <li>Bernardo Enock</li>
            <li>Matheus Porto</li>
            <li>Murilo Batista</li>
          </ul>
        </div>
      </ContainerOthers>
    </Container>
  )
}
