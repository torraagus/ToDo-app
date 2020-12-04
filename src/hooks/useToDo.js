import { useState } from "react";

const useToDo = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState("");

  const deleteToDo = (todo) => {
    todos.splice(
      todos.findIndex((t) => t === todo),
      1
    );
    setTodos([...todos]);
  };

  const updateToDo = (newTodo, selectedTodo) => {
    todos.splice(
      todos.findIndex((t) => t === selectedTodo),
      1,
      newTodo
    );
    setSelectedTodo("");
  };

  return {
    todos,
    setTodos,
    selectedTodo,
    setSelectedTodo,
    deleteToDo,
    updateToDo,
  };
};

export default useToDo;
