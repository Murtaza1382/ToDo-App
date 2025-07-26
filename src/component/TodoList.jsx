import React, { useState } from "react";
function TodoList({ todo, deleteTodo, editedTodo, markAsComplete }) {
  let [isEdit, setEdit] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  function startComplete(todo) {
    setIsComplete(todo.isComplete);
    markAsComplete(todo.id);
  }

  function makeEditable() {
    setNewContent(todo.content);
    setEdit(true);
  }
  return (
    <div className="flex items-center justify-center gap-9 ">
      <div className="flex items-center justify-between gap-3 ">
        {isEdit == true ? (
          <div>
            <input
              type="text"
              value={newContent}
              className="border border-blue-300"
              onChange={(e) => setNewContent(e.target.value)}
            />
            <button
              onClick={() => editedTodo(todo.id, newContent, setEdit(false))}
              className="bg-green-400 px-2 rounded-md text-white"
            >
              save
            </button>
          </div>
        ) : (
          <p
            className={
              todo.isCompleted == true ? "line-through text-red-400" : ""
            }
          >
            {todo.content}
          </p>
        )}
        {/* <input
          type="checkbox"
          value={isComplete}
          onChange={() => startComplete(todo)}
        /> */}
        <button
          value={isComplete}
          className="bg-blue-100 rounded-full p-2 "
          onClick={() => startComplete(todo)}
        >
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=100&id=11849&format=png&color=000000"
            alt=""
          />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <img
            className="w-10 h-10"
            src="https://img.icons8.com/?size=100&id=13086&format=png&color=000000"
            alt=""
          />
        </button>
        <button
          onClick={() => makeEditable(todo)}
          className="text-lg text-white"
        >
          <img
            className="w-10 h-10"
            src="https://img.icons8.com/?size=100&id=16265&format=png&color=000000"
            alt=""
          />
        </button>
      </div>
      <div>{todo.creatAt}</div>
    </div>
  );
}

export default TodoList;
