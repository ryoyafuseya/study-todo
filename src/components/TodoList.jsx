function TodoList ({ filteredTodos, setTodos, toggleTodo, deleteTodo }) {
    return (
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
                <li className="todo-item" key={todo.id}>
                    <input 
                        type="checkbox"
                        checked={todo.done}
                            onChange={()  => 
                                toggleTodo(todo.id)
                            }
                    />
                    
                    <span className={todo.done ? "done" : ""}>
                        {todo.text}
                    </span>

                    <button
                        onClick={() => 
                            deleteTodo(todo.id)
                        }
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;