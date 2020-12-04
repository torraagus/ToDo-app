import React from "react";

const TodoItem = ({ todo, onDeleteToDo, onUpdateToDo }) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <p>{todo}</p>
      <button onDeleteToDo={todo}>Delete</button>
      <button onUpdateToDo={todo}>Update</button>
    </div>
  );
};

export default TodoItem;
