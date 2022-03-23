import ModalComponent from '../ModalComponent'
import { CheckContainer, Container } from './styles'
import Input from '../Input'
import { useVaccines } from '../../providers/vaccines'
import Button from '../Button'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

const EditVaccineModal = ({ isModalOpen, closeModal, vaccineToChange }) => {
  const { changeVaccine } = useVaccines()

  const [vaccinated, setVaccinated] = useState(false)

  const schema = yup.object().shape({
    name: yup.string(),
    manufacturer: yup.string(),
    batch: yup.string(),
    applicationDate: yup.string(),
    location: yup.string(),
    nextShot: yup.string(),
  })

  const initialForm = {
    name: '',
    manufacturer: '',
    batch: '',
    applicationDate: '',
    location: '',
    nextShot: '',
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitFunction = (data) => {
    if (vaccinated) {
      data.nextShot = 'Esquema completo'
      setVaccinated(false)
    }

    const newData = {}
    for (const info in data) {
      if (data[info]) {
        newData[info] = data[info]
      }
    }

    reset(initialForm)
    if (Object.keys(newData).length !== 0) {
      changeVaccine(newData, vaccineToChange._id)
    } else {
      toast('Nenhum dado foi alterado')
    }
    closeModal()
  }

  return (
    <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal}>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Editar vacina</h2>
        <p>Preencha apenas os campos que deseja mudar</p>

        <Input
          name='name'
          label='Nome'
          type='text'
          helperText={errors.name?.message}
          error={!!errors.name}
          register={register}
        />

        <Input
          name='manufacturer'
          label='Fabricante'
          type='text'
          helperText={errors.manufacturer?.message}
          error={!!errors.manufacturer}
          register={register}
        />
        <Input
          name='batch'
          label='Lote'
          type='text'
          helperText={errors.batch?.message}
          error={!!errors.batch}
          register={register}
        />
        <Input
          name='applicationDate'
          label='Data de aplicação'
          type='date'
          helperText={errors.applicationDate?.message}
          error={!!errors.applicationDate}
          register={register}
          date
        />
        <Input
          name='location'
          label='Local de aplicação'
          type='text'
          helperText={errors.location?.message}
          error={!!errors.location}
          register={register}
        />
        <Input
          name='nextShot'
          label='Próxima dose'
          type='date'
          helperText={errors.nextShot?.message}
          error={!!errors.nextShot}
          register={register}
          date
        />
        <CheckContainer>
          <input type='checkbox' onChange={() => setVaccinated(!vaccinated)} />
          <span>Confirmar vacinação?</span>
        </CheckContainer>

        <Button type='submit' colorType='primary'>
          Mudar detalhes da vacina
        </Button>
      </Container>
    </ModalComponent>
  )
}

export default EditVaccineModal
