import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NewsCarousel } from "../../components/NewsCarousel";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <section className="BeginSection">
        <p>Acompanhe sua Saúde</p>
        <Button colorType="primary">Entrar</Button>
        <Button colorType="secondary">Cadastrar</Button>
      </section>
      <section className="CarouselSection">
        <h2>Notícias</h2>
        <NewsCarousel />
      </section>
      <section className="RecomendationsSection">Recomendations</section>

      <Footer />
    </Container>
  );
};

export default Home;
