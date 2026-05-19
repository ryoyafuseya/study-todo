import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
  //state、state更新関数作成
  //todos → Todo一覧状態
  const [todos, setTodos] = useState([]);
  //入力欄状態
  const [input, setInput] = useState("");
  //表示条件状態
  const [filter, setFilter] = useState("all");

  console.log("filter:", filter);
  console.log("todos:", todos);
  
  //派生データ作成（filterによる表示変更のため）
  const filteredTodos = todos.filter(todo => {
    if(filter === "active") return !todo.done;
    if(filter === "done") return todo.done;
    return true;
  });

  //イベント処理関数
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  //Todo追加関数
  const addTodo = () => {
  const value = input;
  if (value === "") return;

  setTodos(prev => [
    ...prev,
    { id: Date.now(), text: value, done: false }
  ]);

  setInput("");
  };

  //Todo完了状態切り替え関数
  const toggleTodo = (id) => {
    setTodos(prev => 
      prev.map((t) => 
        t.id === id
          ? { ...t, done: !t.done }
          : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => 
      prev.filter((t) => t.id !== id)
    );
  }




//　画面
  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      
      <TodoInput
        input={input}
        setInput={setInput}
        addTodo={addTodo}
        handleKeyDown={handleKeyDown}
      />

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

      
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      
    </div>
  );
}

export default App;