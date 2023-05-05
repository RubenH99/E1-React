import React, { useState } from "react";
import { LayoutWrapper } from "./LayoutStyles";
import { v4 as uuidv4 } from "uuid";
import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoForm from "../ToDoForm/ToDoForm";
import Tasks from "../Tasks/Tasks";
import { TasksContainer } from "./LayoutStyles";

uuidv4();

const Layout = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo }]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <LayoutWrapper>
      <img
        src="/images/bg-desktop-dark.jpg"
        className="header-img"
        id="dark-bg"
        alt="header img dark"
      />
      <img
        src="/images/bg-desktop-light.jpg"
        className="header-img hidden"
        id="ligth-bg"
        alt="header img light"
      />
      <ToDoHeader />
      <ToDoForm addTask={addTask} />

      <TasksContainer>
        {todos.map((todo, index) => (
          <Tasks task={todo} key={index} deleteTodo={deleteTodo} />
        ))}
      </TasksContainer>
    </LayoutWrapper>
  );
};

export default Layout;
