import tstore from "../scripts/tstore";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ title, body, indeks }) {
  const todos = tstore((state) => state.todos);
  const setTodos = tstore((state) => state.setTodos);
  const [edycja, setEdycja] = useState(false);
  const [newtitle, setNewtitle] = useState(title);
  const [newBody, setNewbody] = useState(body);

  // EDYCJA TODO
  const handleEdit = (i) => {
    if (edycja === true) {
      const newTodo = {
        title: newtitle,
        body: newBody,
      };
      const newArray = [...todos];
      newArray[i.indeks] = newTodo;
      setTodos(newArray);
    }
    setEdycja(!edycja);
  };

  // DELETE TODO
  const handleDelete = (i) => {
    const newTodos = todos.filter((_, index) => index !== i.indeks);
    setTodos(newTodos);
  };

  return (
    <div class="w-52 h-60 m-2 border border-slate-600 bg-slate-300 relative shadow-lg">
      <div class="text-left p-3">
        {edycja ? (
          <>
            <input
              class="text-3xl mb-4 w-full p-1 focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2"
              type="text"
              id="title"
              value={newtitle}
              onChange={(e) => setNewtitle(e.target.value)}
            />
            <textarea
              class="w-full p-1 focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2"
              id="body"
              value={newBody}
              onChange={(e) => setNewbody(e.target.value)}
            />
          </>
        ) : (
          <>
            <h3 class="text-3xl mb-4">{title}</h3>
            <p>{body}</p>
          </>
        )}
      </div>
      <div class="absolute bottom-0 flex justify-between bg-slate-700 w-full">
        <div class="text-slate-600 bg-slate-400 py-2 px-1 w-1/2 border-t border-r border-slate-500 cursor-pointer hover:bg-slate-300" onClick={() => handleDelete({ indeks })}>
          <FontAwesomeIcon icon={faTrash} />
          <span class="ml-1">remove</span>
        </div>
        <div class="text-slate-600 bg-slate-400 py-2 px-1 w-1/2 border-t border-slate-500 cursor-pointer hover:bg-slate-300" onClick={() => handleEdit({ indeks })}>
          {edycja ? (
            <>
              <FontAwesomeIcon icon={faCheck} />
              <span class="ml-1">save</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faEdit} />
              <span class="ml-1">edit</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
