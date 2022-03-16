import Input from "../../components/Input";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

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

  const [inputData, setInputData] = useState();

  const handleLogin = (data) => {
    setInputData();
    setInputData(data);
    console.log(inputData);
    //axios
    //provider
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <p>E-mail</p>
        <Input
          name="email" // o que vai ser passado para o register
          label="Digite seu E-mail" // placeholder
          type="email"
          register={register}
          helperText={errors.email?.message}
          error={!!errors.email?.message}
        />
        <p>Senha</p>
        <Input
          name="password" // o que vai ser passado para o register
          label="Digite sua Senha" // placeholder
          type="password"
          register={register}
          // helperText={error.password?.message}
          // error = {!!error.password}
        />

        <Button colorType="Primary">Entrar</Button>

        <span>Ainda não possui uma conta?</span>

        <Button colorType="Tertiary">Cadastre-se</Button>
      </form>
    </>
  );
};
export default Login;
