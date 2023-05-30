import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #000000;
  width: 350px;
  margin: 0 auto;
  padding: 20px 40px;
`
export const Label = styled.label`
  font-size: 20px;
`
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 6px;
  min-width: 300px;
`
export const Button = styled.button`
  border-radius: 6px;
  border: 1px solid #000000;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  min-width: 150px;
  margin: 10px auto 0;
  background: #212121;
  &:hover {
    color: #212121;
    background: #ffffff;
  }
`
