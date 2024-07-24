import { useState } from "react";

const EntryList = () => {
  const [todoTxt, setTodoTxt] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleClick = () => {
    if (todoTxt.trim() === "") {
      return;
    }
    if (editingTodo !== null) {
      const updateTodoList = todoList.map((todo) => 
        todo.id === editingTodo.id ? { ...todo, text:todoTxt } : todo
      );
      setTodoList(updateTodoList);
      setEditingTodo(null);
    } else {
      const newTodo = {
        id: idCounter,
        text: todoTxt,
      };
      setTodoList([...todoList, newTodo]);
      setIdCounter(idCounter + 1);
    }
    setTodoTxt("");
  };

  const handleDelete = (id) => {
    const updateTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updateTodoList);

    if (editingTodo && editingTodo.id === id){
      setEditingTodo(null);
    }
  };

  return (
    <div>
      <input
        id="input-txt"
        className="input-bar"
        type="text"
        placeholder="Enter a Todo"
        value={todoTxt}
        onChange={(e) => {
          setTodoTxt(e.target.value);
        }}
      ></input>
      <button onClick={handleClick} className="add-btn">
        Add
      </button>
      <div>
        <div>
          {todoList.map((todo) => (
            <div key={todo.id}>
              {editingTodo === todo ? (
                <>
                  <input
                    type="text"
                    value={todoTxt}
                    onChange={(e) => 
                      setTodoTxt(e.target.value)
                    }
                  ></input>
                  <button onClick={handleClick}>Save</button>
                </>
              ) : (
                <>
                  {todo.text}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => setEditingTodo(todo)}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryList;
