import logo from "../../assets/logo.png";
import {
  StyledHeader,
  StyledNav,
  FilterInput,
  ButtonSearch,
  ButtonLogout,
  ContainerSearch,
} from "./styles";

import { useHistory, Link } from "react-router-dom";

const Header = ({ dash = false, setFilterInput, filterInput, FilterCards }) => {
  const history = useHistory();

  const backHome = () => {
    history.push("/");
  };

  const logout = () => {
    //função de remover usuário autenticado
    localStorage.clear();
    history.push("/");
  };

  return (
    <StyledHeader>
      <img src={logo} alt="logoiSaude" onClick={backHome} />
      <StyledNav>
        {!dash ? (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <hr />
            <li>
              <Link>Sobre</Link>
            </li>
            <hr />
            <li>
              <Link to="/register">Cadastrar</Link>
            </li>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <hr />
          </ul>
        ) : (
          <ContainerSearch>
            <FilterInput
              type="text"
              placeholder="Pesquise sua vacina"
              value={filterInput}
              onChange={(event) => setFilterInput(event.target.value)}
            />
            <ButtonSearch onClick={FilterCards}>Pesquisar</ButtonSearch>
            <ButtonLogout onClick={logout}>Sair</ButtonLogout>
          </ContainerSearch>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
