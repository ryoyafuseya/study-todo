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
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => {
                setTodos(
                  todos.map(t => 
                    t.id === todo.id 
                    ? { ...t, done: !t.done }
                    : t
                  )
                );
              }}
            />
            
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>


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