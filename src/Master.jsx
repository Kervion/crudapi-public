import Deezer from "./deezer/Deezer";
import AddTodo from "./notes/AddTodo";
import TodoList from "./notes/TodoList";

function Master() {
  return (
    <div class="flex flex-col h-screen text-slate-800 relative">
      <div class="text-center pb-8 bg-gradient-to-b from-slate-400 to-slate-800 ">
        <div>
          <h1 class="text-2xl py-4">CRUD : Short Notes</h1>
          <div class="flex justify-center flex-wrap">
            <TodoList />
            <AddTodo />
          </div>
        </div>
      </div>

      <Deezer />
    </div>
  );
}
export default Master;
