import { useState } from "react";

//state
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  console.log("filter:", filter);
  console.log("todos:", todos);

  const filteredTodos = todos.filter(todo => {
    if(filter === "active") return !todo.done;
    if(filter === "done") return todo.done;
    return true;
  });

  const addTodo = () => {
  const value = input;
  if (value === "") return;

  setTodos(prev => [
    ...prev,
    { id: Date.now(), text: value, done: false }
  ]);

  setInput("");
};

//　画面
  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      <div className="input-area">
        <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.nativeEvent.isComposing) return; // ★日本語対策

          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />

      <button onClick={addTodo}>
      Add
      </button>
      </div>
      

      <div className="filter">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => {
                console.log("toggle", todo.id);

                setTodos(prev => 
                  prev.map(t => 
                    t.id === todo.id 
                    ? { ...t, done: !t.done }
                    : t
                  )
                );
              }}
            />
            
            <span className={todo.done ? "done" : ""}>
              {todo.text}
            </span>


            <button
              onClick={() => {
                console.log("delete:", todo.id);
                setTodos(prev =>
                  prev.filter(t => t.id !== todo.id)
                );
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