import { formEvent, useRef, useState } from "react";
import styles from "./index.module.css";
// See video here: https://www.youtube.com/watch?v=_tUdtt6H5CE for full explanation
// New hook for this to keep track of loading states that is experimental:
// https://react.dev/reference/react-dom/hooks/useFormStatus

function TodoList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    if (inputRef.current == null) return;
    setIsLoading(true);
    const newTodo = await createTodo(inputRef.current.value);
    setIsLoading(false);
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <label>Add some items to the todo list:</label>
        <br></br>
        <input ref={inputRef} required></input>
        <br></br>
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Create"}
        </button>
        <br></br>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

function createTodo(title) {
  // Simulating network traffic
  return wait({ id: crypto.randomUUID(), title }, 1000);
}

function wait(value, duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}

export default TodoList;
