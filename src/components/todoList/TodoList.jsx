import React from "react";
import PropTypes from "prop-types";
import { ToDo, DeleteBtn, UpdateBtn, Description, ActionBtns } from "./todoList.styles";

const TodoList = ({ todos, onDeleteToDo, onUpdateToDo }) => {
  return (
    <div>
      <h4>List</h4>
      {todos.map((todo, index) => (
        <ToDo key={index}>
          <Description>{todo}</Description>
          <ActionBtns>
            <DeleteBtn onClick={() => onDeleteToDo(todo)}>Delete</DeleteBtn>
            <UpdateBtn onClick={() => onUpdateToDo(todo)}>Update</UpdateBtn>
          </ActionBtns>
        </ToDo>
      ))}
      {todos.length === 0 && <p>You don't have todos</p>}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string),
};

export default TodoList;
