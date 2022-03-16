import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { Container } from "./styles";

const Register = () => {
  const [select, setSelect] = useState("");
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "O nome deve conter apenas letras"
      ),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    gender: yup.string().required("Campo obrigatório"),
    dob: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha Diferente")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("teste");
    // axios
    //   .post("link", data)
    //   .then((response) => {
    //     history.push("/login");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // if (authenticated) {
    //   return <Redirect to="/dashboard" />;
    // }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          label="Nome"
          type="text"
          helperText={errors.name?.message}
          error={!!errors.name}
          register={register}
          // icon={FaMailBulk}
        />

        <Input
          name="email"
          label="Email"
          type="email"
          helperText={errors.email?.message}
          error={!!errors.email}
          register={register}
          // icon={FaMailBulk}
        />

        <Input
          name="cpf"
          label="CPF"
          type="text"
          helperText={errors.cpf?.message}
          error={!!errors.cpf}
          register={register}
          // icon={FaMailBulk}
        />

        <Input
          name="dob"
          label=""
          type="date"
          helperText={errors.dob?.message}
          error={!!errors.dob}
          register={register}
          // icon={FaMailBulk}
        />

        <select
          {...register("gender")}
          defaultValue={"Genero"}
          onChange={(event) => {
            setSelect(event.target.value);
          }}
        >
          <option value="Genero">Gênero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </select>
        <Input
          name="city"
          label=""
          type="text"
          helperText={errors.city?.message}
          error={!!errors.city}
          register={register}
          // icon={FaMailBulk}
        />

        <select
          {...register("state")}
          defaultValue={"Estado"}
          onChange={(event) => {
            setSelect(event.target.value);
          }}
        >
          <option value="Estado">Estado</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MT">MT</option>
          <option value="MS">MS</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PB</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>

        <Input
          name="password"
          label="Senha"
          type="password"
          helperText={errors.password?.message}
          error={!!errors.password}
          register={register}
          // icon={FaMailBulk}
        />

        <Input
          name="passwordConfirm"
          label="Confirmar Senha"
          type="password"
          helperText={errors.passwordConfirm?.message}
          error={!!errors.passwordConfirm}
          register={register}
          // icon={FaMailBulk}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <span>
        {/* Já possui uma conta? Faça o <Redirect to={"/login"}>Login</Redirect> */}
      </span>
    </Container>
  );
};
export default Register;
