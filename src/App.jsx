import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Todo from "./component/Todo";
import { TodoProvder } from "./Context/ToDoContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <TodoProvder>
        <Todo />
      </TodoProvder>
    </>
  );
}

export default App;
