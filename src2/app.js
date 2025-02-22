import React, { useState } from "react";
const App = () => {
  // State for the individual name parts and full name
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isFullNameVisible, setIsFullNameVisible] = useState(false);
  // State for the todo list
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // Handle input changes for name
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "middleName") {
      setMiddleName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else {
      setTodo(value);
    }
  };
  // Handle click to submit the full name
  const handleClick = () => {
    setFullName(`${firstName} ${middleName} ${lastName}`);
  };
  // Handle toggle visibility of full name
  const toggleVisibility = () => {
    setIsFullNameVisible(!isFullNameVisible);
  };
  // Add todo item
  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  // Delete todo item
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <div>
        <h3>Full Name Form</h3>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="middleName"
          value={middleName}
          onChange={handleInputChange}
          placeholder="Middle Name"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <button onClick={handleClick}>Submit</button>
        {/* Show or hide the full name */}
        {isFullNameVisible && <p>Full Name: {fullName}</p>}
        <button onClick={toggleVisibility}>
          {isFullNameVisible ? "Hide" : "Show"} Full Name
        </button>
      </div>
      <div>
        <h3>To-Do List</h3>
        <input
          type="text"
          value={todo}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((task, index) => (
            <li key={index} onClick={() => deleteTodo(index)}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
