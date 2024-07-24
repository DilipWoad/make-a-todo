import React from "react";
import ReactDOM from "react-dom/client"
import TodoWrapper from "./Component/TodoWrapper";


const App = () => {
  return (
    <div className="app">
      <TodoWrapper/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
