import TodoItem from "./TodoItem";
import tstore from "../scripts/tstore";

function TodoList() {
  const todos = tstore((state) => state.todos);

  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem key={index} title={todo.title} body={todo.body} indeks={index} />
      ))}
    </>
  );
}

export default TodoList;
