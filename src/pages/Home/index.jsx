import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./styles";
import Curiosidades from "../../components/Curiosidades";
import MotionRoutes from "../../motionRoutes";

import historyImg from "../../assets/history.jpg";
import importanceImg from "../../assets/importance.jpg";
import erradicationImg from "../../assets/erradication.jpg";

const Home = () => {
  return (
    <MotionRoutes>
      <Container>
        <Header />
        <Curiosidades img={historyImg} imageFirst>
          A história das vacinas é muito mais antiga do que imaginam! No século
          XVIII o médico inglês Edward Jenner utilizou a vacina para prevenir
          acontaminação por varíola, uma doença viral extremamente grave
          quecausava febre alta, dores de cabeça e no corpo, lesões na pele e
          morte. "
        </Curiosidades>

        <Curiosidades img={importanceImg}>
          A vacinação é uma forma de salvar vidas! Uma vez expostos a uma, ou
          mais doses de uma vacina, normalmente permanecemos protegidos contra
          uma doença por anos, décadas ou mesmo por todaa vida. É isso que torna
          as vacinas tão eficazes. Ao invés de tratar uma doença depois que ela
          ocorre, as vacinas nos previnem de adoecer.
        </Curiosidades>
        <Curiosidades img={erradicationImg} imageFirst>
          A exemplo da importância das vacinas já temos doenças que foram
          erradicadas ou muito bem controlada por elas, como:
          <ol>
            <li>Varíola, completamente erradicada mundialmente.</li>
            <li>
              Poliomielite, erradicada no território nacional mas com altas
              chances de voltar devido à baixa adesão a vacinação.
            </li>
            <li>
              Sarampo chegou a ser erradicada mas devido à falta de vacinação
              voltou a aparecer
            </li>
          </ol>
        </Curiosidades>
        {/* <iframe title='Calendário' src="https://calendar.google.com/calendar/embed?src=larissaspaulino%40gmail.com&ctz=America%2FSao_Paulo" style={{width: "800px", height: "600px"}}  /> */}
        <Footer />
      </Container>
    </MotionRoutes>
  );
};

export default Home;
