import React, { useState } from "react";
import { ToDoFormStyled } from "./ToDoFormStyles";

const ToDoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    addTask(inputValue);
  };

  return (
    <ToDoFormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo--input"
        value={inputValue}
        placeholder="Create a new todo..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="add--btn">
        Add Task
      </button>
    </ToDoFormStyled>
  );
};

export default ToDoForm;
