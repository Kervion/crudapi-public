import { useState } from "react";
import tstore from "../scripts/tstore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "@react-spring/web";

function AddTodo() {
  const springs = useSpring({
    from: { x: 300, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const todos = tstore((state) => state.todos);
  const setTodos = tstore((state) => state.setTodos);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      title: title,
      body: body,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setBody("");
  }

  return (
    <animated.form
      onSubmit={handleSubmit}
      class="w-52 h-60 m-2 border bg-slate-500 relative border-slate-300 shadow-lg"
      style={{
        ...springs,
      }}
    >
      <div class="p-3">
        <h2 class="text-2xl mb-2 text-slate-700">
          <FontAwesomeIcon icon={faPlus} /> Add a Note
        </h2>
        <div>
          <input
            required
            class="mb-4 w-full p-1 focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
        </div>
        <div>
          <textarea
            required
            class="mb-1 w-full h-1/3 p-1 focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="note"
          />
        </div>
      </div>
      <button type="submit" class="bg-slate-300 py-2 absolute bottom-0 left-0 w-full hover:bg-slate-200 text-slate-600">
        <FontAwesomeIcon icon={faPlus} />
        <span class="ml-1">add</span>
      </button>
    </animated.form>
  );
}
export default AddTodo;
