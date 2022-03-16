import { ButtonStyled } from './styles'

const Button = ({ children, colorType, ...rest }) => {
  // type -> accepts one of the three options: Primary, Secondary, Tertiary

  return (
    <ButtonStyled>
      <button className={colorType} {...rest}>
        {children}
      </button>
    </ButtonStyled>
  )
}

export default Button
