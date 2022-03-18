import ModalComponent from "../ModalComponent"
import {Container} from "./styles"
import Input from "../Input"
import Button from "../Button"

import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useVaccines} from "../../providers/vaccines"

const EditVaccineModal = ({isModalOpen, closeModal, vaccineToChange}) => {
  const { changeVaccine } = useVaccines()

  const schema = yup.object().shape({
    name: yup.string(),
    manufacturer: yup.string(),
    lote: yup.string(),
    applicationDate: yup.string(),
    location: yup.string(),
    nextShot: yup.string(),
  })

  const initialForm = {
    name: "",
    manufacturer: "",
    lote: "",
    applicationDate: "",
    location: "",
    nextShot: "",
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})

  const onSubmitFunction = (data) => {
    changeVaccine(data, vaccineToChange.id) 
    reset(initialForm)
    closeModal()
  }

  // const vaccine = vaccines.find(vaccine => vaccine.id === vaccineToChange.id)
  // console.log(vaccine)

  return (
    <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal}>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>
          Mudar detalhes da vacina: Preencha apenas os campos que deseja mudar!{" "}
        </h2>

        <Input
          name="name" // o que vai ser passado para o register
          label={vaccineToChange.name} // placeholder
          type="text"
          helperText={errors.name?.message}
          error={!!errors.name}
          register={register}
        />

        <Input
          name="manufacturer" // o que vai ser passado para o register
          label={vaccineToChange.manufacturer} // placeholder
          type="text"
          helperText={errors.manufacturer?.message}
          error={!!errors.manufacturer}
          register={register}
        />
        <Input
          name="lote" // o que vai ser passado para o register
          label={vaccineToChange.lote} // placeholder
          type="text"
          helperText={errors.lote?.message}
          error={!!errors.lote}
          register={register}
        />
        <Input
          name="applicationDate" // o que vai ser passado para o register
          label={vaccineToChange.applicationDate} // placeholder
          type="text"
          helperText={errors.applicationDate?.message}
          error={!!errors.applicationDate}
          register={register}
        />
        <Input
          name="location" // o que vai ser passado para o register
          label={vaccineToChange.location} // placeholder
          type="text"
          helperText={errors.location?.message}
          error={!!errors.location}
          register={register}
        />
        <Input
          name="nextShot" // o que vai ser passado para o register
          label={vaccineToChange.nextShot} // placeholder
          type="text"
          helperText={errors.nextShot?.message}
          error={!!errors.nextShot}
          register={register}
        />

        <Button type="submit" colorType="Primary">
          Mudar detalhes da vacina
        </Button>
      </Container>
    </ModalComponent>
  )
}

export default EditVaccineModal
