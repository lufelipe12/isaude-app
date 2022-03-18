import logo from "../../assets/logo.png"
import { StyledHeader, StyledNav } from "./styles"

import { useHistory, Link } from "react-router-dom"

const Header = ({ dash = false }) => {
  const history = useHistory()

  const backHome = () => {
    history.push("/")
  }

  const logout = () => {
    localStorage.clear()
    history.push("/")
  }

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
            <button onClick={logout}>Sair</button>
          </div>
        )}
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
