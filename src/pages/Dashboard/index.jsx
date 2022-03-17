import {useState} from "react"
import { useVaccines } from "../../providers/vaccines";
import Card from "../../components/Card";
import Header from "../../components/Header";
import NewVaccineModal from "../../components/NewVaccineModal"

const Dashboard = () => {
  const [isNewVaccineModalOpen, setIsNewVaccineModalOpen] = useState(false)

  function openNewVaccineModal() {
    setIsNewVaccineModalOpen(true)
  }

  function closeNewVaccineModal() {
    setIsNewVaccineModalOpen(false)
  }

  const vaccines = [
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
      name: "Covid-19",
      manufacturer: "Oxford",
      lote: 2337593279,
      applicationDate: "19/01/2022",
      shot: 2,
      location: "Araguari",
      totalShots: 2,
      nextShot: "20/04/2022",
    },
  ];



  return (

    <>
      <Header dash />
      <div>
        {vaccines.map((vaccine, index) => (
          <Card vaccine={vaccine} key={index} />
        ))}
      </div>
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
        </>
  )
}


export default Dashboard