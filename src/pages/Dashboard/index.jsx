import { useVaccines } from "../../providers/vaccines"
import { useUser } from "../../providers/user"
import Card from "../../components/Card"
import Header from "../../components/Header"
import {
  CardContainer,
  DashHeader,
  StyledContainer,
  UserContainer,
  UserData,
  UserInfos,
} from "./styles"
import pdfMaker from "../../utils/pfvGen"
import { useEffect } from "react"
import { GrDocumentPdf } from "react-icons/gr"
import { MdAddCircle } from "react-icons/md"

const Dashboard = () => {
  const { vaccines, getVaccines } = useVaccines()

  const { user } = useUser()
  console.log(vaccines)

  useEffect(() => {
    getVaccines()
  }, [])
 
  return (
    <main>
      <Header dash />
      <DashHeader>
      <UserContainer>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt="userImage"
        />
        <UserInfos>
          <h3>{user.info.name}</h3>
          <UserData>
            <div>
              <span>Nascimento</span>
              <p>{user.info.dateOfBirth}</p>
            </div>
            <div>
              <span>Sexo</span>
              <p>{user.info.gender}</p>
            </div>
            <div>
              <span>CPF</span>
              <p>{user.info.cpf}</p>
            </div>
            <div>
              <span>Estado</span>
              <p>{user.info.state}</p>
            </div>
          </UserData>
        </UserInfos>
        </UserContainer>
        <button onClick={() => pdfMaker(user, vaccines)}>
          <GrDocumentPdf style={{ "fontSize": "23px" }} />
        </button>
      </DashHeader>
      <CardContainer>
        {vaccines.map((vaccine, index) => (
          <Card vaccine={vaccine} key={index} />
        ))}
      </CardContainer>
      <StyledContainer>
        <button onClick={() => console.log("Abrir modal de adicionar")}>
          <MdAddCircle style={{ "font-size": "40px" }} />
        </button>
      </StyledContainer>
    </main>
  )
}

export default Dashboard
