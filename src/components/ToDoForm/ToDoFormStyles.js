import styled from "styled-components";

export const ToDoFormStyled = styled.form`
  background-color: var(--bg-form);
  padding: 10px 20px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  z-index: 2;
  input {
    border: none;
    background-color: transparent;
    color: var(--text-gray);
    outline: none;
  }

  button {
    padding: 10px;
    background: linear-gradient(
      to right,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
    color: var(--text-strong);
    border-radius: 15px;
  }
`;
