import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, onDeleteToDo, onUpdateToDo }) => {
	return (
		<div>
			<h4>List</h4>
			{todos.map((todo, index) => (
				<Fragment key={index}>
					<p>{todo}</p>
					<button onClick={() => onDeleteToDo(todo)}>Delete</button>
					<button onClick={() => onUpdateToDo(todo)}>Update</button>
				</Fragment>
			))}
			{todos.length === 0 && <p>You don't have todos</p>}
		</div>
	);
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.string),
};

export default TodoList;
