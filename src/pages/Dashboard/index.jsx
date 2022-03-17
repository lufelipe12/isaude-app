import { useVaccines } from "../../providers/vaccines";
import { useUser } from "../../providers/user"
import Card from "../../components/Card";
import Header from "../../components/Header";
import { CardContainer, UserContainer, UserData, UserInfos } from "./styles";
import pdfMaker from "../../utils/pfvGen";
import { useEffect } from "react";
import { GrDocumentPdf } from "react-icons/gr";

const Dashboard = () => {
  const { vaccines, getVaccines } = useVaccines()

  const { user } = useUser()
  console.log(vaccines)

  useEffect(() => {
    getVaccines();
  }, []);


  // const user = {
  //   name: "FULANA DA SILVA",
  //   birthday: "30/9/0000",
  //   gender: "Feminino",
  //   cpf: "00000000000",
  //   cns: "70000000000",
  // };

  // const vaccines = [
  //   {
  //     userId: 2,
  //     name: "Covid-19",
  //     manufacturer: "Oxford",
  //     lote: 2337593279,
  //     applicationDate: "19/01/2022",
  //     shot: 2,
  //     location: "Araguari",
  //     totalShots: 2,
  //     nextShot: "20/04/2022",
  //   },
  //   {
  //     userId: 2,
  //     name: "Covid-19",
  //     manufacturer: "Oxford",
  //     lote: 2337593279,
  //     applicationDate: "19/01/2022",
  //     shot: 2,
  //     location: "Araguari",
  //     totalShots: 2,
  //     nextShot: "20/04/2022",
  //   },
  //   {
  //     userId: 2,
  //     name: "Covid-19",
  //     manufacturer: "Oxford",
  //     lote: 2337593279,
  //     applicationDate: "19/01/2022",
  //     shot: 2,
  //     location: "Araguari",
  //     totalShots: 2,
  //     nextShot: "20/04/2022",
  //   },
  //   {
  //     userId: 2,
  //     name: "Covid-19",
  //     manufacturer: "Oxford",
  //     lote: 2337593279,
  //     applicationDate: "19/01/2022",
  //     shot: 2,
  //     location: "Araguari",
  //     totalShots: 2,
  //     nextShot: "20/04/2022",
  //   },
  // ];

  return (
    <main>
      <Header dash />
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
        <button onClick={() => pdfMaker(user, vaccines)}>
          <GrDocumentPdf style={{ "fontSize": "23px" }} />
        </button>
      </UserContainer>
      <CardContainer>
        {vaccines.map((vaccine, index) => (
          <Card vaccine={vaccine} key={index} />
        ))}
      </CardContainer>
    </main>
  );
};

export default Dashboard;
