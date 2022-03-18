import ModalComponent from "../ModalComponent"
import {Container} from "./styles"
import Input from "../Input"
import Button from "../Button"

import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useVaccines} from "../../providers/vaccines"

const NewVaccineModal = ({isModalOpen, closeModal}) => {
  const {addVaccine} = useVaccines()

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    manufacturer: yup.string().required("Campo Obrigatório!"),
    lote: yup.string().required("Campo Obrigatório! "),
    applicationDate: yup.string().required("Campo obrigatório!"),
    location: yup.string().required("Campo Obrigatório! "),
    nextShot: yup.string().required("Campo Obrigatório! "),
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
    addVaccine(data)
    reset(initialForm)
    closeModal()
  }

  return (
    <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal}>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Cadastrar nova vacina</h2>

        <Input
          name="name" // o que vai ser passado para o register
          label="Vacina" // placeholder
          type="text"
          helperText={errors.name?.message}
          error={!!errors.name}
          register={register}
        />

        <Input
          name="manufacturer" // o que vai ser passado para o register
          label="Fabricante" // placeholder
          type="text"
          helperText={errors.manufacturer?.message}
          error={!!errors.manufacturer}
          register={register}
        />
        <Input
          name="lote" // o que vai ser passado para o register
          label="Lote" // placeholder
          type="text"
          helperText={errors.lote?.message}
          error={!!errors.lote}
          register={register}
        />
        <Input
          name="applicationDate" // o que vai ser passado para o register
          label="Data da aplicação" // placeholder
          type="date"
          helperText={errors.applicationDate?.message}
          error={!!errors.applicationDate}
          register={register}
          date
        />
        <Input
          name="location" // o que vai ser passado para o register
          label="Local da aplicação" // placeholder
          type="text"
          helperText={errors.location?.message}
          error={!!errors.location}
          register={register}
        />
        <Input
          name="nextShot" // o que vai ser passado para o register
          label="Data da próxima dose" // placeholder
          type="date"
          helperText={errors.nextShot?.message}
          error={!!errors.nextShot}
          register={register}
          date
        />

        <Button type="submit" colorType="Primary">
          Cadastrar vacina
        </Button>
      </Container>
    </ModalComponent>
  )
}

export default NewVaccineModal
