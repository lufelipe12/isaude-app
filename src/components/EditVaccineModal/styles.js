import styled from "styled-components"

export const Container = styled.form`
  height: 645px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    /* margin-bottom: 20px; */
  }
`

export const InputContainer = styled.div`
  margin: 10px;
`

export const CheckContainer = styled.label`
  height: 15px;
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
  }
`
