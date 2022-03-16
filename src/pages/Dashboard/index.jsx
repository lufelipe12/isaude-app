import { useVaccines } from '../../providers/vaccines'
import Card from '../../components/Card'

const Dashboard = () => {
  // const { vaccines } = useVaccines()
  const vaccines = [
    {
      userId: 2,
      name: 'Covid-19',
      manufacturer: 'Oxford',
      lote: 2337593279,
      applicationDate: '19/01/2022',
      shot: 2,
      location: 'Araguari',
      totalShots: 2,
      nextShot: '20/04/2022',
    },
    {
      userId: 2,
      name: 'Covid-19',
      manufacturer: 'Oxford',
      lote: 2337593279,
      applicationDate: '19/01/2022',
      shot: 2,
      location: 'Araguari',
      totalShots: 2,
      nextShot: '20/04/2022',
    },
    {
      userId: 2,
      name: 'Covid-19',
      manufacturer: 'Oxford',
      lote: 2337593279,
      applicationDate: '19/01/2022',
      shot: 2,
      location: 'Araguari',
      totalShots: 2,
      nextShot: '20/04/2022',
    },
  ]

  return <div>
    {vaccines.map((vaccine, index) => (
      <Card vaccine={vaccine} key={index}/>
    ))}
  </div>
}

export default Dashboard
