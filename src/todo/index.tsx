import React, { useState } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo: any) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos: any = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId: any, newValue: any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev: any) =>
      prev.map((item: any) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id: any) => {
    const removedArr = [...todos].filter((todo: any) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id: any) => {
    let updatedTodos: any = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
