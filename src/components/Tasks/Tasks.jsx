import React from "react";
import { TasksStyled } from "./TasksStyles";
import { FaTrashAlt } from "react-icons/fa";

const Tasks = ({ task, deleteTodo }) => {
  return (
    <TasksStyled>
      <p>{task.task}</p>
      <FaTrashAlt className="dlt-btn" onClick={() => deleteTodo(task.id)} />
    </TasksStyled>
  );
};

export default Tasks;
