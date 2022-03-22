import Input from '../../components/Input'
import Button from '../../components/Button'
import { useUser } from '../../providers/user'
import MotionRoutes from '../../motionRoutes'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'


import {
  Container,
  ContainerButton,
  ContainerForm,
  Form,
  Label,
  Logo,
} from './styles'
import logo from '../../assets/logo.png'

const Login = () => {
  const history = useHistory()

  const { login } = useUser()

  const [showPassword, setShowPassword] = useState(false)

  const loginSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo Obrigatório'),
    password: yup
      .string()
      // .matches(
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      //   "Senha fraca"
      // )
      .required('Campo Obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const handleLogin = (data) => login(data)

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = (event) => event.preventDefault()
console.log(showPassword)
  const inputPropsPassword = {
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge='end'
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }

  return (
    <MotionRoutes>
      <Container>
        <Logo>
          <img src={logo} alt='I saúde' />
        </Logo>
        <ContainerForm>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <h1>Login</h1>
            <Label></Label>
            <Input
              name='email'
              label='Email'
              type='email'
              register={register}
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            />
            <Label></Label>
            <Input
              name='password'
              label='Senha'
              type={showPassword ? 'text' : 'password'}
              register={register}
              helperText={errors.password?.message}
              error={!!errors.password}
              InputProps={inputPropsPassword}
            />
            <ContainerButton>
              <Button colorType='primary' type='submit'>
                Entrar
              </Button>
            </ContainerButton>

            <span>Ainda não possui uma conta?</span>
            <ContainerButton>
              <Button
                colorType='terciary'
                onClick={() => history.push('/register')}
              >
                Cadastre-se
              </Button>
            </ContainerButton>
          </Form>
        </ContainerForm>
      </Container>
    </MotionRoutes>
  )
}
export default Login
