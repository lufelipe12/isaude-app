import Input from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const Login = () => {
  const loginSchema = yup.object().shape({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [inputData, setInputData] = useState();

  const handleLogin = (data) => {
    setInputData(data);
    //axios
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <Input
          name="email" // o que vai ser passado para o register
          label="Digite seu E-mail" // placeholder
          type="email"
          register={register}
          // helperText={error.email?.message}
          // error = {!!error.email}
        />
        <Input
          name="password" // o que vai ser passado para o register
          label="Digite sua Senha" // placeholder
          type="password"
          register={register}
          // helperText={error.password?.message}
          // error = {!!error.password}
        />
      </form>
    </>
  );
};
export default Login;
