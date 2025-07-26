import { createContext, useContext, useState } from "react";

const ToDoContext = createContext([]);

export const TodoProvder = ({ children }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      content: "Reading the book",
      isComplete: false,
      creatAt: new Date().toDateString(),
    },
    {
      id: 2,
      content: "Writing the homework",
      isComplete: false,
      creatAt: new Date().toDateString(),
    },
  ]);

  const searchTodo = (content) => {
    const filteredTodo = todo.filter((to) =>
      to.content.toLowerCase().includes(content.toLowerCase())
    );
    setTodo([...todo, filteredTodo]);
  };

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const editedTodo = (id, newContent) => {
    const editedTodo = todo.map((to) => {
      if (to.id === id) {
        const edited = { ...to, content: newContent };
        return edited;
      } else {
        return to;
      }
    });
    setTodo(editedTodo);
  };

  const deleteTodo = (id) => {
    const filteredTodo = todo.filter((to) => to.id !== id);
    setTodo(filteredTodo);
  };

  const markAsComplete = (id) => {
    const completeTodo = todo.map((to) => {
      if (to.id === id) {
        return { ...to, isCompleted: !to.isCompleted };
      } else {
        return to;
      }
      setTodo(completeTodo);
    });
    setTodo(completeTodo);
  };

  return (
    <ToDoContext.Provider
      value={{
        todo,
        searchTodo,
        addTodo,
        deleteTodo,
        editedTodo,
        markAsComplete,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(ToDoContext);
};
