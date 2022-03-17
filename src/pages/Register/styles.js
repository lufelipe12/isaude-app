import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: var(--white);
  border-radius: 10px;

  form {
    margin: auto;
    width: 300px;
    padding: 30px;
  }
`

export const Error = styled.span`
  color: var(--error);
  font-size: 12px;
  text-align: left;
`
