import ModalComponent from "../ModalComponent"
import {Container, InputContainer} from "./styles"
import Input from "../Input"

import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const NewVaccineModal = ({isModalOpen, closeModal}) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    manufacturer: yup.string().required("Campo Obrigatório!"),
    lote: yup.string().required("Campo Obrigatório! "),
    applicationDate: yup.string().required("Campo obrigatório!"),
    location: yup.string().required("Campo Obrigatório! "),
    nextShot: yup.string().required("Campo Obrigatório! "),
  })

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})

  const onSubmitFunction = (data) => {
    console.log(data)
  }

  return (
    <ModalComponent isModalOpen={isModalOpen} closeModal={closeModal}>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Cadastrar nova vacina</h2>
        <InputContainer>
          <Input
            name="name" // o que vai ser passado para o register
            label="Digite o nome da vacina" // placeholder
            type="text"
            helperText={errors.name?.message}
            error={!!errors.password}
            register={register}
          />
        </InputContainer>
        <InputContainer>
          <Input
            name="manufacturer" // o que vai ser passado para o register
            label="Digite o nome do Fabricante" // placeholder
            type="text"
            helperText={errors.manufacturer?.message}
            error={!!errors.password}
            register={register}
          />
        </InputContainer>
        <button type="submit">Submit Teste</button>
      </Container>
    </ModalComponent>
  )
}

export default NewVaccineModal
