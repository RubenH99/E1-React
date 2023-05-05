import styled from "styled-components";

export const HeaderContainerStyled = styled.section`
  display: flex;
  align-items: center;
  max-width: 1300px;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderContainerUp = styled(HeaderContainerStyled)`
  gap: 35px;
  color: var(--text-strong);
  padding: 50px;
  z-index: 2;
  h1 {
    font-size: 36px;
  }
`;
