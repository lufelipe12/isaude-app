import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { useUser } from "../user";

const VaccinesContext = createContext([]);

export const VaccinesProvider = ({ children }) => {
  const [vaccines, setVaccines] = useState([]);

  const { user } = useUser();
  const { token, info } = user;

  const getVaccines = () => {
    api
      .get("/vaccines", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setVaccines(response.data))
      .catch((err) => console.log(err));
  };

  const addVaccine = (vaccine) => {
    api
      .post(
        "/vaccines",
        { userId: info.id, ...vaccine },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        toast.success("Vacina cadastrada");
        getVaccines();
      })
      .catch((err) => toast.error("Ops!! Algo deu errado."));
  };

  const changeVaccine = (vaccine, idToChange) => {
    api
      .patch(`/vaccines/${idToChange}`, vaccine, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Vacina atualizada");
        getVaccines();
      })
      .catch((err) => toast.error("Ops!! Algo deu errado."));
  };

  const delVaccine = (id) => {
    api
      .delete(`/vaccines/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Vacina deletada");
        getVaccines();
      })
      .catch((err) => console.log(err));
  };

  return (
    <VaccinesContext.Provider
      value={{ vaccines, changeVaccine, addVaccine, delVaccine, getVaccines }}
    >
      {children}
    </VaccinesContext.Provider>
  );
};

export const useVaccines = () => useContext(VaccinesContext);
