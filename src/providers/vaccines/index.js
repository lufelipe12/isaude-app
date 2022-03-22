import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { useUser } from "../user";

const VaccinesContext = createContext([]);

export const VaccinesProvider = ({ children }) => {
  const [vaccines, setVaccines] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const { user } = useUser();
  const { token, info } = user;

  const getVaccines = () => {
    api
      .get(`/user/${info._id}/vaccines`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setVaccines(response.data))
      .catch((err) => console.log(err));
  };

  const addVaccine = (vaccine) => {
    api
      .post(`/user/${info._id}/vaccines`, vaccine, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Vacina cadastrada");
        getVaccines();
        console.log(res.data);
      })
      .catch((err) => toast.error("Ops!! Algo deu errado."));
  };

  const changeVaccine = (vaccine, idToChange) => {
    api
      .patch(`/user/${info._id}/vaccines/${idToChange}`, vaccine, {
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
      .delete(`/user/${info._id}/vaccines/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Vacina deletada");
        getVaccines();
      })
      .catch((err) => console.log(token));
  };

  useEffect(() => {
    if (!filterInput) {
      getVaccines();
    } else {
      const filterd = vaccines.filter((element) =>
        element.name.toLowerCase().includes(filterInput.toLowerCase())
      );
      setVaccines(filterd);
    }
  }, [filterInput]);

  return (
    <VaccinesContext.Provider
      value={{
        vaccines,
        changeVaccine,
        addVaccine,
        delVaccine,
        getVaccines,
        setVaccines,
        filterInput,
        setFilterInput,
      }}
    >
      {children}
    </VaccinesContext.Provider>
  );
};

export const useVaccines = () => useContext(VaccinesContext);
