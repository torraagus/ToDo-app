import React, { useState, useRef, useEffect } from "react";

const UpdateTodo = ({ selectedTodo, onUpdatedTodo, onUpdateCanceled }) => {
  const [todo, setTodo] = useState(selectedTodo);
  const inputRef = useRef(null);

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    onUpdatedTodo(todo);
    setTodo("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h4>Update Todo</h4>
      <form onSubmit={(e) => handleOnSubmitForm(e)}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Update todo..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></input>
        <input type="button" value="Cancel" onClick={() => onUpdateCanceled()}></input>
        <input type="submit" value="Update"></input>
      </form>
    </div>
  );
};

export default UpdateTodo;
