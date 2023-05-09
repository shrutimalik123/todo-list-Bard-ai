import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy milk",
      completed: false,
    },
    {
      id: 2,
      text: "Wash the car",
      completed: false,
    },
    {
      id: 3,
      text: "Do the laundry",
      completed: false,
    },
  ]);

  const handleAddTodo = (text) => {
    if (text.trim() === "") {
      throw new Error("Error adding todo: empty text");
    }
    setTodos([
      ...todos,
      {
        id: Math.random().toString(36).substring(7),
        text,
        completed: false,
      },
    ]);
  };

  const handleMarkTodoCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="Add a todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleMarkTodoCompleted(todo.id)}>
              {todo.completed ? "Uncheck" : "Check"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Completed Todos</h2>
      <ul>
        {todos.filter((todo) => todo.completed).map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
