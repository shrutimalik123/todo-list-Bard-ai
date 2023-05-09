import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
const [todos, setTodos] = useState([
{
text: "Buy milk",
completed: false,
},
{
text: "Wash the car",
completed: false,
},
{
text: "Take out the trash",
completed: false,
},
]);

const handleAddTodo = (text) => {
  setTodos([...todos, { text, completed: false }]);
};

const handleMarkTodoCompleted = (id) => {
  setTodos(todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = true;
    }
    return todo;
  }));
};

const handleDeleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
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