import React, { useState } from "react";
import styled from "styled-components";
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2f3136;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0;
  list-style-type: none;
  width: 400px;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #36393f;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 18px;
  color: white;
`;

const TodoText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TodoButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.elements.todo.value;
    handleAddTodo(text);
    event.target.reset();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}
>
        <input type="text"
         placeholder="Add a todo" 
         name="todo"
         style={{ padding: "10px", borderRadius: "5px", fontSize: "18px" }}/>
        <button 
        type="submit"
        style={{
          backgroundColor: "#7289DA",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "18px",
          cursor: "pointer",
        }}
        >Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button 
            onClick={() => handleMarkTodoCompleted(todo.id)}
            style={{
              float: "right",
              backgroundColor: "#7289DA",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            
            >
              {todo.completed ? "Uncheck" : "Check"}
            </button>
            <button 
            onClick={() => handleDeleteTodo(todo.id)}
            style={{
              float: "right",
              backgroundColor: "#7289DA",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            
            >
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




