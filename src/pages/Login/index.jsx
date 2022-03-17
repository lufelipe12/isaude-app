import Input from "../../components/Input";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useUser } from "../../providers/user";
import api from "../../services/api";

import {
  Container,
  ContainerButton,
  ContainerForm,
  Form,
  Label,
  Logo,
} from "./styles";
import logo from "../../assets/logo.png";

const Login = () => {
  const loginSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha fraca"
      )
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // const {login} = useUser();

  const handleLogin = (data) => {
    // login(data);
    // api.post("/login", data)
    // .then((response)=> {
    //   const {accessToken, user} = response.data;
    //   localStorage.setItem("@Isaúde:token", JSON.stringify(accessToken));
    //   localStorage.setItem("@Isaúde:user", JSON.stringify(user));
    // }).catch((err) => console.log("Email ou senha invalidos"))
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="I saúde" />
      </Logo>
      <ContainerForm>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <h1>Login</h1>
          <Label>E-mail</Label>
          <Input
            name="email" // o que vai ser passado para o register
            label="Digite seu E-mail" // placeholder
            type="email"
            register={register}
            helperText={errors.email?.message}
            error={!!errors.email?.message}
          />
          <Label>Senha</Label>
          <Input
            name="password" // o que vai ser passado para o register
            label="Digite sua Senha" // placeholder
            type="password"
            register={register}
            helperText={errors.password?.message}
            error={!!errors.password}
          />
          <ContainerButton>
            <Button colorType="Primary">Entrar</Button>
          </ContainerButton>

          <span>Ainda não possui uma conta?</span>
          <ContainerButton>
            <Button colorType="Tertiary">Cadastre-se</Button>
          </ContainerButton>
        </Form>
      </ContainerForm>
    </Container>
  );
};
export default Login;
