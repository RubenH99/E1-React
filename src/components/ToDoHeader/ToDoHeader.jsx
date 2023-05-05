import React, { useState } from "react";
import { HeaderContainerStyled, HeaderContainerUp } from "./ToDoHeaderStyles";
import ToDoForm from "../ToDoForm/ToDoForm";

const ToDoHeader = () => {
  return (
    <HeaderContainerStyled>
      <HeaderContainerUp>
        <h1>To Do List</h1>
      </HeaderContainerUp>
    </HeaderContainerStyled>
  );
};

export default ToDoHeader;
