//Nome, nome do fabricante, data da aplicação, lote, local,
//data da próxima dose (se houver próxima data, exibir a próxima data

import Card from "../../components/Card";

const Home = () => {
  const vaccine = {
    name: "Vacina COVID-19",
    manufacturer: "OXFORD",
    batch: "ABW3Z038",
    local: "Araguari",
    application_date: "23/03/2021",
    date_next_dose: "23/05/2021",
  };

  return (
    <>
      <Card vaccine={vaccine} />
    </>
  );
};
export default Home;
