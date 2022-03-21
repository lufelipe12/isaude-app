import logo from "../../assets/logo.png"
import { StyledHeader, StyledNav } from "./styles"
import { useUser } from '../../providers/user'

import { useHistory, Link } from "react-router-dom"
import Tooltip from '@mui/material/Tooltip';


const Header = ({ dash = false }) => {
  const history = useHistory()
  const { logout } = useUser()

  const backHome = () => {
    history.push("/")
  }

  return (
    <StyledHeader>
      <Tooltip title='Página inicial'>
        
      <img src={logo} alt="logoiSaude" onClick={backHome} />
      </Tooltip>
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
