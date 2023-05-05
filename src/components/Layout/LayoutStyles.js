import styled from "styled-components";

export const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  img {
    position: absolute;
  }
`;

export const TasksContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-form);
  z-index: 2;
`;
