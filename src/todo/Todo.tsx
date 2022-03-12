import React, { useState } from "react";
import TodoForm from "./TodoForm";
// import { RiCloseCircleLine } from "react-icons/ri";
// import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }: any) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value: any) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo: any, index: any) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <div onClick={() => removeTodo(todo.id)} className="delete-icon">
          delete
        </div>
        <div
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        >
          edit
        </div>
      </div>
    </div>
  ));
};

export default Todo;
