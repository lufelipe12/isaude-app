import ModalComponent from "../ModalComponent"
import {Container} from "./styles"
import Input from "../Input"
import Button from "../Button"

import { useState } from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useVaccines} from "../../providers/vaccines"

const EditVaccineModal = ({isModalOpen, closeModal, vaccineToChange}) => {
  const {changeVaccine} = useVaccines()

  const schema = yup.object().shape({
    name: yup.string(),
    manufacturer: yup.string(),
    batch: yup.string(),
    applicationDate: yup.string(),
    location: yup.string(),
    nextShot: yup.string(),
  })

  // const initialForm = {
  //   name: "",
  //   manufacturer: "",
  //   batch: "",
  //   applicationDate: "",
  //   location: "",
  //   nextShot: "",
  // }
  // const [defaultValues] = useState({
  //   name: vaccineToChange.name,
  //   manufacturer: vaccineToChange.manufacturer,
  //   batch: vaccineToChange.batch,
  //   applicationDate: vaccineToChange.applicationDate,
  //   nextShot: vaccineToChange.nextShot,
  //   location: vaccineToChange.location
  // })

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitFunction = (data) => {
    console.log(data)
    // const newData = {}
    // for (const info in data) {
    //   if (data[info]) {
    //     newData[info] = data[info]
    //   }
    // }

    changeVaccine(data, vaccineToChange._id)
    closeModal()
  }

  return (
    <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal}>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>
          Editar vacina
        </h2>
        <p>Preencha apenas os campos que deseja mudar</p>

        <Input
          name="name" 
          label='Nome' 
          type="text"
          helperText={errors.name?.message}
          error={!!errors.name}
          register={register}
          defaultValue={vaccineToChange.name}
        />

        <Input
          name="manufacturer" 
          label="Fabricante" 
          type="text"
          helperText={errors.manufacturer?.message}
          error={!!errors.manufacturer}
          register={register}
          defaultValue={vaccineToChange.manufacturer}
        />
        <Input
          name="batch" 
          label="Lote" 
          type="text"
          helperText={errors.batch?.message}
          error={!!errors.batch}
          register={register}
          defaultValue={vaccineToChange.batch}
        />
        <Input
          name="applicationDate" 
          label="Data de aplicação"
          type="date"
          helperText={errors.applicationDate?.message}
          error={!!errors.applicationDate}
          register={register}
          date
          defaultValue={vaccineToChange.applicationDate}
        />
        <Input
          name="location" 
          label="Local de aplicação" 
          type="text"
          helperText={errors.location?.message}
          error={!!errors.location}
          register={register}
          defaultValue={vaccineToChange.location}
        />
        <Input
          name="nextShot" 
          label="Próxima dose" 
          type="date"
          helperText={errors.nextShot?.message}
          error={!!errors.nextShot}
          register={register}
          date
          defaultValue={vaccineToChange.nextShot}
        />

        <Button type="submit" colorType="primary">
          Mudar detalhes da vacina
        </Button>
      </Container>
    </ModalComponent>
  )
}

export default EditVaccineModal
