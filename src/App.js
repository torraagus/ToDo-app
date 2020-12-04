import "./App.css";
import NewTodo from "./components/newTodo/NewTodo";
import TodoList from "./components/todoList/TodoList";
import UpdateTodo from "./components/updateTodo/UpdateTodo";
import useToDo from "./hooks/useToDo";

function App() {
  const {
    todos,
    setTodos,
    selectedTodo,
    setSelectedTodo,
    deleteToDo,
    updateToDo,
  } = useToDo();

  return (
    <div className="App">
      <h1>To-dos</h1>
      {selectedTodo === "" ? (
        <NewTodo
          onNewTodoAdded={(newTodo) => setTodos([...todos, newTodo])}
        ></NewTodo>
      ) : (
        <UpdateTodo
          selectedTodo={selectedTodo}
          onUpdatedTodo={(newTodo) => updateToDo(newTodo, selectedTodo)}
          onUpdateCanceled={() => setSelectedTodo("")}
        ></UpdateTodo>
      )}
      <TodoList
        todos={todos}
        onDeleteToDo={(todo) => deleteToDo(todo)}
        onUpdateToDo={(todo) => setSelectedTodo(todo)}
      ></TodoList>
    </div>
  );
}

export default App;
