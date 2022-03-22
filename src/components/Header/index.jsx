import logo from '../../assets/logo.png'
import {
  StyledHeader,
  StyledNav,
  FilterInput,
  ButtonSearch,
  ButtonLogout,
  ContainerSearch,
} from './styles'

import { useUser } from '../../providers/user'
import { Link } from 'react-router-dom'

const Header = ({ dash = false, setFilterInput, filterInput, FilterCards }) => {
  const { logout } = useUser()

  return (
    <StyledHeader>
      <img src={logo} alt='logoiSaude' />

      <StyledNav>
        {!dash ? (
          <ul>
            <li>
              <Link to='/register'>Cadastrar</Link>
            </li>
            <li>
              <Link to='/login'>Entrar</Link>
            </li>
            <hr />
            <hr />
            <hr />
          </ul>
        ) : (
          <ContainerSearch>
            <FilterInput
              type='text'
              placeholder='Pesquise sua vacina'
              value={filterInput}
              onChange={(event) => setFilterInput(event.target.value)}
            />

            <ButtonLogout onClick={logout}>Sair</ButtonLogout>
          </ContainerSearch>
        )}
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
