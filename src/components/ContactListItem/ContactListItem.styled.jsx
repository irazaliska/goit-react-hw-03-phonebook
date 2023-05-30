import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Text = styled.p`
  font-size: 16px;
`
export const DeleteBtn = styled.button`
  border-radius: 6px;
  border: 1px solid #000000;
  color: #ffffff;
  font-weight: 600;
  padding: 5px 15px;
  background: #212121;
  &:hover {
    color: #212121;
    background: #ffffff;
  }
`
