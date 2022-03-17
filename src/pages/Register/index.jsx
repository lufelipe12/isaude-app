import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Redirect, useHistory } from 'react-router-dom'
import { FaMailBulk } from 'react-icons/fa'
import { MenuItem } from '@mui/material'

import Input from '../../components/Input'
import { Container } from './styles'
import Select from '../../components/Select'
import Button from '../../components/Button'

const Register = () => {
  const history = useHistory()

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Campo obrigatório')
      .matches(
        '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$',
        'O nome deve conter apenas letras'
      ),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    gender: yup.string().required('Campo obrigatório'),
    dateOfBirth: yup.string().required('Campo obrigatório'),
    state: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    cpf: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Senha Diferente')
      .required('Campo obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  //{
    const onSubmit = (data) => {
      delete data.passwordConfirm
    console.log(data)
    
    // axios
    //   .post("link", data)
    //   .then((response) => {
    //     history.push("/login")
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // if (authenticated) {
    //   return <Redirect to="/dashboard" />
    // }
  }

  const arrayOfStates = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]

  const arrayOfGenders = ['Feminino', 'Masculino', 'Outros']

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='name'
          label='Nome'
          type='text'
          helperText={errors.name?.message}
          error={!!errors.name}
          register={register}
          // icon={FaMailBulk}
        />

        <Input
          name='email'
          label='Email'
          type='email'
          helperText={errors.email?.message}
          error={!!errors.email}
          register={register}
          // icon={FaMailBulk}
        />

        <Input
          name='cpf'
          label='CPF'
          type='text'
          helperText={errors.cpf?.message}
          error={!!errors.cpf}
          register={register}
          // icon={FaMailBulk}
        />

        <Input
          name='dateOfBirth'
          label=''
          type='date'
          helperText={errors.dateOfBirth?.message}
          error={!!errors.dateOfBirth}
          register={register}
          // icon={FaMailBulk}
        
/>

        <Select
          name='gender'
          label='Gênero'
          register={register}
          error={!!errors.gender}
          helperText={errors.gender?.message}
        >
          {arrayOfGenders.map((gender, index) => (
            <MenuItem key={index} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </Select>

        <Input
          name="city"
          label="Cidade"
          type="text"
          helperText={errors.city?.message}
          error={!!errors.city}
          register={register}
          // icon={FaMailBulk}
        />

        <Select
          name='state'
          register={register}
          label='Estado'
          error={!!errors.state}
          helperText={errors.state?.message}
        >
          {arrayOfStates.map((state, index) => (
            <MenuItem key={index} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>

        <Input
          name='password'
          label='Senha'
          type='password'
          helperText={errors.password?.message}
          error={!!errors.password}
          register={register}
          // icon={FaMailBulk}
        />

        <Input
          name='passwordConfirm'
          label='Confirmar Senha'
          type='password'
          helperText={errors.passwordConfirm?.message}
          error={!!errors.passwordConfirm}
          register={register}
          // icon={FaMailBulk}
        />
        <button type='submit'>Cadastrar</button>
      </form>

      <span>
        {/* Já possui uma conta? Faça o <Redirect to={"/login"}>Login</Redirect> */}
      </span>
    </Container>
  )
}
export default Register
