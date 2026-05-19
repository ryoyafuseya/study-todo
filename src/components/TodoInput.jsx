function TodoInput({ input, setInput, addTodo, handleKeyDown }) {
    return (
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
    );
}

export default TodoInput;







