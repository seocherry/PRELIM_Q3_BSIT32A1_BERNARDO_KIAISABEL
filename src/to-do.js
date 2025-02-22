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
</div>;
