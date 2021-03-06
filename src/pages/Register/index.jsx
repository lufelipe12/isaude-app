import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'
import { MenuItem, TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { Container, FullContainer, ImageContainer, ImageHome } from './styles'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import api from '../../services/api'
import logo from '../../assets/logo.png'
import MotionRoutes from '../../motionRoutes'
import { AiOutlineHome } from 'react-icons/ai'

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

    api
      .post('/user', data)
      .then(() => {
        history.push('/login')
        toast.success('Cadastro realizado com sucesso! Faça o login')
      })
      .catch((err) => {
        console.log(err)
        toast.error('Cadastro inválido')
      })
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

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 350,
      },
    },
  }

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

  const backHome = () => {
    history.push('/')
  }

  return (
    <MotionRoutes>
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
            />

            <InputMask
              mask='999.999.999-99'
              defaultValue=''
              {...register('cpf')}
            >
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
              label='Data de nascimento'
              type='date'
              register={register}
              helperText={errors.dateOfBirth?.message}
              error={!!errors.dateOfBirth}
              date
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
              MenuProps={MenuProps}
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
              InputProps={inputPropsPassword}
            />

            <Input
              name='passwordConfirm'
              label='Confirmar Senha'
              type={showPassword.confirmPassword ? 'text' : 'password'}
              helperText={errors.passwordConfirm?.message}
              error={!!errors.passwordConfirm}
              register={register}
              InputProps={inputPropsConfirmPassword}
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
        <ImageHome onClick={backHome}>
          <AiOutlineHome />
        </ImageHome>
      </FullContainer>
    </MotionRoutes>
  )
}
export default Register
