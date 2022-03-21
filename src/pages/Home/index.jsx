import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <Header />
      {/* <iframe title='Calensário' src="https://calendar.google.com/calendar/embed?src=larissaspaulino%40gmail.com&ctz=America%2FSao_Paulo" style={{width: "800px", height: "600px"}}  /> */}
      <Footer />
    </Container>
  )
}

export default Home
