import { useVaccines } from "../../providers/vaccines"

const Dashboard = () => {
  const { vaccines } = useVaccines()
  console.log(vaccines)
  
  return <div>Dashboard</div>
}

export default Dashboard
