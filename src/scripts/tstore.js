import { create } from "zustand";
import { persist } from "zustand/middleware";

const tstore = create(
  persist(
    (set) => ({
      todos: [],
      setTodos: (val) => {
        set((state) => ({ todos: val }));
      },
      track: "",
      setTrack: (val) => {
        set((state) => ({ track: val }));
      },
    }),
    {
      name: "todos-storage",
    }
  )
);

export default tstore;
