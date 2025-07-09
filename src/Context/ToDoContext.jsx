import { createContext, useContext, useState } from "react";

const ToDoContext = createContext([]);

export const TodoProvder = ({ children }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      content: "Reading the book",
      isComplete: false,
      creatAt: new Date(),
    },
    {
      id: 2,
      content: "Writing the homework",
      isComplete: false,
      creatAt: new Date(),
    },
  ]);

  const searchTodo = (content) =>{
    const filteredTodo = todo.filter((to)=> to.content.toLowerCase().includes(content.toLowerCase()))
    setTodo([...todo, filteredTodo])
  }

  const addTodo = (newTodo)=>{
    setTodo([...todo, newTodo])
  }

  const editedTodo = (id, content){
    const editedTodo = todo.map((to)=> to.id === id ? {content:content}:todo)
  }

  return( <ToDoContext.Provider>{children}</ToDoContext.Provider>);
};

export const useTodo = () => {
  return useContext(ToDoContext);
};
