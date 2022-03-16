import logo from "../../assets/logo.png";
import { StyledHeader, StyledNav } from "./styles";

import { useHistory, Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const backHome = () => {
    history.push("/");
  };

  return (
    <StyledHeader>
      <img src={logo} alt="logoiSaude" onClick={backHome} />
      <StyledNav>
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
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
