import styled from "styled-components";

export const ToDo = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0;
  border-bottom: 1px solid #ccc;

  :hover {
    cursor: pointer;
    opacity: 70%;
    background-color: #eee;
  }

  :active {
    opacity: 90%;
  }
`;

export const Description = styled.p`
  letter-spacing: 3px;
`;

const Button = styled.button`
  display: none;
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  margin: 0 0.25rem;

  :hover {
    cursor: pointer;
    opacity: 70%;
  }

  :active {
    opacity: 90%;
  }

  ${ToDo}:hover & {
    display: block;
  }
`;

export const ActionBtns = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;

  ${ToDo}:hover & {
    right: 1rem;
  }
`;

export const DeleteBtn = styled(Button)`
  color: white;
  background-color: red;
`;

export const UpdateBtn = styled(Button)`
  background-color: blue;
  color: white;
`;
