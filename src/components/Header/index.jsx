import logo from "../../assets/logo.png";
import { StyledHeader, StyledNav } from "./styles";
import Button from "../../components/Button";

import { useHistory, Link } from "react-router-dom";

const Header = ({ dash }) => {
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
          <div>
            <Button onClick={logout}>Sair</Button>
          </div>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
