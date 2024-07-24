import React from "react";


const Todo = ({ mainTask }) => {
  const handleDelete = (index) => {
    var todoFilter = mainTask.filter((todo) => todo.id !== index);
    console.log(todoFilter);
  };
  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((todo, index) => {
      
      return (
        <li key={index} className="each-todo">
          <div className="todo-div">
            <h3 className="todo-txt">{todo.text}</h3>
            <h4>{todo.description}</h4>
          </div>
          <div>
            <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            <button>Edit</button>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="todo-container">
      <div className="todo-list">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};
export default Todo;
