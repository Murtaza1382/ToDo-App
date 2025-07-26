import React, { useState } from "react";
import TodoList from "./TodoList";
import { useTodo } from "../Context/ToDoContext";

function Todo() {
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const { todo, searchTodo, addTodo, deleteTodo, editedTodo, markAsComplete } =
    useTodo();
  function handelAddTodo() {
    const newTodo = {
      id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 1,
      content: newTask,
      creatAt: new Date().toDateString(),
      isCompleted: false,
    };
    addTodo(newTodo);
    setNewTask("");
  }
  return (
    <div className="w-full h-screen bg-purple-700 flex items-center justify-center">
      <div className=" w-3xl bg-white shadow shadow-black rounded-lg h-80 flex flex-col items-center justify-center gap-15 ">
        <h1 className="flex items-center justify-center font-serif text-3xl text-purple-500">
          List of Todo{" "}
          <img
            className="w-15 h-15"
            src="https://img.icons8.com/?size=100&id=12085&format=png&color=000000"
            alt=""
          />
        </h1>
        <div className="flex items-start flex-col shadow shadow-purple-600 p-3 rounded-md w-xl">
          {todo.length > 0 ? (
            todo.map((to) => (
              <TodoList
                key={to.id}
                todo={to}
                editedTodo={editedTodo}
                deleteTodo={deleteTodo}
                markAsComplete={markAsComplete}
              />
            ))
          ) : (
            <span>No task in ToDo</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
