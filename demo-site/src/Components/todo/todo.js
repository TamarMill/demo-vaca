import React, { useState, useContext } from "react";

import { TextField, Checkbox, Button, Title } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddToDriveOutlined } from "@mui/icons-material";
import { TodoContext } from "../App/App";


export function Todo() {
    
  const { todos, setTodos } = useContext(TodoContext);

  const [todo, setTodoText] = React.useState("");
  

  function addTodos(event) {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));

    setTodoText("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function changeDone(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <body>
      <div className="todo-container">
        <header>Todo List</header>
        <br></br>
        <div id="inputs">
          <form onSubmit={addTodos}>
            <TextField
              id="filled-basic"
              onChange={(event) => setTodoText(event.target.value)}
              value={todo}
              placeholder="Input todo"
            />

            <Button id="submit" type="submit"> 
              Add
            </Button>
          </form>
        </div>

        {todos.map((todo) => (
          <div id="tasks">
            {todo.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <DeleteIcon onClick={() => deleteTodo(todo.id)}></DeleteIcon>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Checkbox
              onChange={() => changeDone(todo.id)}
              checked={todo.completed}
            />
          </div>
        ))}
      </div>
    </body>
  );
}

export default Todo;