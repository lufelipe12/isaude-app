import logo from "../../assets/logo.png";
import { StyledHeader, StyledNav } from "./styles";

import { useHistory, Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logoiSaude" />
      <StyledNav>
        <div>
          <Link to="/">Home</Link>
          <Link>Sobre</Link>
          <Link to="/register">Cadastrar</Link>
          <Link to="/login">Entrar</Link>
        </div>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
