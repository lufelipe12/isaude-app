import Input from "../../components/Input"
import Button from "../../components/Button"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Redirect, useHistory } from 'react-router-dom'

import { useUser } from "../../providers/user"

import {
  Container,
  ContainerButton,
  ContainerForm,
  Form,
  Label,
  Logo,
} from "./styles"
import logo from "../../assets/logo.png"

const Login = () => {

  const history = useHistory()
  
  const { login, user } = useUser()
  
  const loginSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      // .matches(
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      //   "Senha fraca"
      // )
      .required("Campo Obrigatório")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const handleLogin = (data) => login(data)

  return (
    <Container>
      <Logo>
        <img src={logo} alt="I saúde" />
      </Logo>
      <ContainerForm>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <h1>Login</h1>
          <Label></Label>
          <Input
            name="email" 
            label="Email" 
            type="email"
            register={register}
            helperText={errors.email?.message}
            error={!!errors.email?.message}
          />
          <Label></Label>
          <Input
            name="password" 
            label="Senha" 
            type="password"
            register={register}
            helperText={errors.password?.message}
            error={!!errors.password}
          />
          <ContainerButton>
            <Button colorType="primary" type='submit'>Entrar</Button>
          </ContainerButton>

          <span>Ainda não possui uma conta?</span>
          <ContainerButton>
            <Button colorType="terciary" onClick={() => history.push("/register")}>Cadastre-se</Button>
          </ContainerButton>
        </Form>
      </ContainerForm>
    </Container>
  )
}
export default Login
