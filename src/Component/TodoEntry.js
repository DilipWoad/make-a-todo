import React, { useState,useEffect } from "react";

const TodoEntry = () => {
  const [todoTxt, setTodoTxt] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, seteditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todoList.find((t) => t.id === editId);
      const updateTodo = todoList.map((todo) =>
        todo.id === editTodo.id
          ? (todo = { id: todo.id, text: todoTxt, description: todoDesc })
          : (todo)
      );
      setTodoList(updateTodo);
      seteditId(0);
      setTodoTxt("");
      setTodoDesc("");
      return;
    }
    if(todoTxt){
      setTodoList([
        ...todoList,
        {
          id: Math.floor(Math.random() * 1000),
          text: todoTxt,
          description: todoDesc,
        },
      ]);
    }
    
    console.log(todoList);
    setTodoTxt("");
    setTodoDesc("");
  };

  const handleDelete = (index) => {
    var todoFilter = todoList.filter((todo) => todo.id !== index);
    setTodoList(todoFilter);
    console.log(todoFilter);
  };

  const handleEdit = (id) => {
    const updateEdit = todoList.find((todo) => todo.id === id);
    setTodoTxt(updateEdit.text);
    setTodoDesc(updateEdit.description);
    seteditId(id);
  };

  //
  // useEffect(()=>{
  //   const todosTxt = JSON.parse(localStorage.getItem("todos")); //get the todo array/json from localStorage
  //   const todosDes =JSON.parse(localStorage.getItem("todoDes"));

  //   if(todos && todos.length>0){  //Checking whether it is empty if empty don't need to set it as it of no use
  //     setTodoTxt(todos);
  //   }
  // },[])

  // //to set the todo
  // useEffect(()=>{
  //   localStorage.setItem("todos",JSON.stringify(todoTxt));
  // },[todoTxt,todoDesc]) //depend



  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodoList(todos);
    }
  },[]);
  //to set todo list in localStorage

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList));
  },[todoList]);

  

  //

  let renderTask = <h2 className="font-semibold text-white text-lg rounded-md p-4 bg-green-500 hover:bg-green-600">No Task Available</h2>;
  if (todoList.length > 0) {
    renderTask = todoList.map((todo, index) => {
      return (
        <li key={index} className="flex justify-between bg-green-600 hover:bg-green-700 my-3 rounded-xl shadow-2xl">
          <div className=" m-3">
            <p className="text-white font-semibold text-xl">{todo.text}</p>
            <p className="text-slate-700 font-medium" >{todo.description}</p>
          </div>
          <div className="flex justify-between items-center gap-3 m-3">
            <button className="bg-red-500 rounded-lg h-8 w-10 hover:bg-red-600 " onClick={() => handleDelete(todo.id)}>🗑️</button>
            <button className="bg-yellow-300 rounded-lg h-8 w-10 hover:bg-yellow-400 " onClick={() => handleEdit(todo.id)}>✏️</button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit} className="todo-entry">
          <input
            value={todoTxt}
            onChange={(e) => {
              setTodoTxt(e.target.value);
            }}
            className="bg-slate-500 mt-4 mb-5 rounded-md p-2 px-3 mr-2 placeholder:text-zinc text-white outline-none shadow-lg font-semibold"
            type="text"
            placeholder="Enter a Todo..."
          ></input>
          <input
            value={todoDesc}
            onChange={(e) => {
              setTodoDesc(e.target.value);
            }}
            className="bg-slate-500 rounded-md p-2 px-3 mr-2 placeholder:text-zinc text-white outline-none shadow-lg font-semibold"
            type="text"
            placeholder="Todo Description..."
          ></input>
          <button className="bg-blue-500 p-2 rounded-lg text-white font-semibold hover:bg-blue-600 shadow-lg">{editId ? "Edit" : "Add"}</button>
        </form>
      </div>
      <div className="todo-container">
        <div className="todo-list">
          <ul>{renderTask}</ul>
        </div>
      </div>

      {/* <Todo mainTask={todoList} setTodoList = {todoList} /> */}
    </>
  );
};

export default TodoEntry;
