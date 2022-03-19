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
    batch: yup.string().required("Campo Obrigatório! "),
    applicationDate: yup.string().required("Campo obrigatório!"),
    location: yup.string().required("Campo Obrigatório! "),
    nextShot: yup.string().required("Campo Obrigatório! "),
  })

  const initialForm = {
    name: "",
    manufacturer: "",
    batch: "",
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
    console.log(data)
    addVaccine(data)
    reset(initialForm)
    closeModal()
  }

  return (
    <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal}>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Cadastrar nova vacina</h2>

        <Input
          name="name" 
          label="Vacina" 
          type="text"
          helperText={errors.name?.message}
          error={!!errors.name}
          register={register}
        />

        <Input
          name="manufacturer" 
          label="Fabricante" 
          type="text"
          helperText={errors.manufacturer?.message}
          error={!!errors.manufacturer}
          register={register}
        />
        <Input
          name="batch" 
          label="Lote" 
          type="text"
          helperText={errors.batch?.message}
          error={!!errors.batch}
          register={register}
        />
        <Input
          name="applicationDate" 
          label="" 
          type="date"
          helperText={errors.applicationDate?.message}
          error={!!errors.applicationDate}
          register={register}
        />
        <Input
          name="location" 
          label="Local da aplicação" 
          type="text"
          helperText={errors.location?.message}
          error={!!errors.location}
          register={register}
        />
        <Input
          name="nextShot" 
          label="" 
          type="date"
          helperText={errors.nextShot?.message}
          error={!!errors.nextShot}
          register={register}
        />

        <Button type="submit" colorType="Primary">
          Cadastrar vacina
        </Button>
      </Container>
    </ModalComponent>
  )
}

export default NewVaccineModal
