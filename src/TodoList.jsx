import { useState } from "react";
import List from "./List";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue) {
      setTodos((prevState) => [...prevState, inputValue]);
      setInputValue("");
    }
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <List
            todo={todo}
            index={index}
            key={index}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
