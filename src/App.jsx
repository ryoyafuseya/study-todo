import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() => {
          if (input === "") return;
          setTodos([
            ...todos, 
            { id: Date.now(), text: input, done: false }
          ]);
        }}
      >
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                setTodos(todos.filter(t => t.id !== todo.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;