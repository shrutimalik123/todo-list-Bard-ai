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
  const newTodo = {
    text,
    completed: false,
  };
  setTodos([...todos, newTodo]);
};

const handleMarkTodoCompleted = (id) => {
  setTodos(todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  }));
};
;

return (
<div>
<h1>To-Do List</h1>
<ul>
{todos.map((todo) => (
<li key={todo.id}>
{todo.text}
<button onClick={() => handleMarkTodoCompleted(todo.id)}>
{todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
</button>
</li>
))}
</ul>
<input
  type="text"
  placeholder="Add a new todo"
  onChange={(e) => handleAddTodo(e.target.value)}
  onKeyPress={(e) => {
    if (e.key === "Enter") {
      handleAddTodo(e.target.value);
      e.preventDefault();
    }
  }}
/>
</div>
);
};

export default App;