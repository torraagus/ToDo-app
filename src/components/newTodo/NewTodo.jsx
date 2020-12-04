import React, { useState, useRef, useEffect } from "react";

const NewTodo = ({ onNewTodoAdded }) => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    onNewTodoAdded(todo);
    setTodo("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h4>New Todo</h4>
      <form onSubmit={(e) => handleOnSubmitForm(e)}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Insert todo..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></input>
        <input type="submit" value="Add"></input>
      </form>
    </div>
  );
};

export default NewTodo;
