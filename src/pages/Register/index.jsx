import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import { FaMailBulk } from 'react-icons/fa'
import { MenuItem, TextField } from '@mui/material'
import Input from '../../components/Input'
import { Container, FullContainer, ImageContainer } from './styles'
import Select from '../../components/Select'
import Button from '../../components/Button'
import InputMask from 'react-input-mask'
import InputAdornment from '@mui/material/InputAdornment'
import axios from 'axios'
import logo from '../../assets/logo.png'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'

const Register = () => {
  const history = useHistory()

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  })

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

  const handleClickShowPassword = () =>
    setShowPassword({ ...showPassword, password: !showPassword.password })
  const handleClickShowConfirmPassword = () =>
    setShowPassword({
      ...showPassword,
      confirmPassword: !showPassword.confirmPassword,
    })

  const handleMouseDownPassword = (event) => event.preventDefault()

  const onSubmit = (data) => {
    delete data.passwordConfirm
    console.log(data)

    axios
      .post('/register', data)
      .then((response) => {
        history.push('/login')
      })
      .catch((err) => {
        console.log(err)
      })
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

  const inputPropsPassword = {
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge='end'
        >
          {showPassword.password ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }

  const inputPropsConfirmPassword = {
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={handleClickShowConfirmPassword}
          onMouseDown={handleMouseDownPassword}
          edge='end'
        >
          {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }

  return (
    <FullContainer>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name='name'
            label='Nome'
            type='text'
            helperText={errors.name?.message}
            error={!!errors.name}
            register={register}
          />

          <Input
            name='email'
            label='Email'
            type='email'
            helperText={errors.email?.message}
            error={!!errors.email}
            register={register}
            Icon={FaMailBulk}
          />
          <InputMask mask='999.999.999-99' defaultValue='' {...register('cpf')}>
            {(inputProps) => {
              return (
                <TextField
                  name='cpf'
                  label='CPF'
                  type='text'
                  helperText={errors.cpf?.message}
                  error={!!errors.cpf}
                  {...inputProps}
                />
              )
            }}
          </InputMask>

          <Input
            name='dateOfBirth'
            label=''
            type='date'
            helperText={errors.dateOfBirth?.message}
            error={!!errors.dateOfBirth}
            register={register}
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
            name='city'
            label='Cidade'
            type='text'
            helperText={errors.city?.message}
            error={!!errors.city}
            register={register}
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
            type={showPassword.password ? 'text' : 'password'}
            helperText={errors.password?.message}
            error={!!errors.password}
            register={register}
            InputProps = {inputPropsPassword}
          />

          <Input
            name='passwordConfirm'
            label='Confirmar Senha'
            type={showPassword.confirmPassword ? 'text' : 'password'}
            helperText={errors.passwordConfirm?.message}
            error={!!errors.passwordConfirm}
            register={register}
            InputProps = {inputPropsConfirmPassword}
          />
          <Button colorType='terciary' type='submit'>
            Cadastrar
          </Button>
          <p>
            Já possui uma conta? Faça o
            <span onClick={() => history.push('/login')}> login</span>
          </p>
        </form>
      </Container>
      <ImageContainer>
        <figure>
          <img src={logo} alt='ImageRegister' />
        </figure>
      </ImageContainer>
    </FullContainer>
  )
}
export default Register
