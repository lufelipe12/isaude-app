import { ButtonStyled } from './styles'

const Button = ({ children, colorType, ...rest }) => {
  // colorType -> accepts one of the three options: primary, secondary, tertiary

  return (
    <ButtonStyled>
      <button className={colorType} {...rest}>
        {children}
      </button>
    </ButtonStyled>
  )
}

export default Button
