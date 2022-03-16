import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

const VaccinesContext = createContext([]);

export const VaccinesProvider = ({ children }) => {
  const [vaccines, setVaccines] = useState([]);

  const getVaccines = () => {
    // console.log("buscou");
    // api
    //   .get("")
    //   .then((response) => setVaccines(response.data))
    //   .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   getVaccines();
  // }, []);

  const addVaccine = (vaccine) => {
    //fazer requisição post ao invés do setVaccine
    //buscando dados no modal de cadastro de vacinas
    //   api
    //     .post("", vaccine, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then((_) => {
    //       toast.success("Vacina cadastrada");
    //     })
    //     .catch((err) => toast.error("Ops!! Algo deu errado."));
    // };

    setVaccines([...vaccines, vaccine]);
  };

  const changeVaccine = (vaccine) => {
    //requisição put pelo id
    // api
    //   .put(`...${idToChange}`, vaccine, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })
    //   .then((_) => {
    //     toast.success("Vacina atualizada");
    //   })
    //   .catch((err) => toast.error("Ops!! Algo deu errado."));
  };

  const delVaccine = (id) => {
    //requisição de delete no card de produto dentro do botão
    // api
    //   .delete(`...${id}`, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })
    //   .then((_) => {
    //     toast.success("Vacina deletada").catch((err) => console.log(err));
    //   });
  };

  return (
    <VaccinesContext.Provider
      value={{ vaccines, addVaccine, changeVaccine, delVaccine }}
    >
      {children}
    </VaccinesContext.Provider>
  );
};

export const useVaccines = () => useContext(VaccinesContext);
