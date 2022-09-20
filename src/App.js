import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn React",
      isComplete: false,
    },
    {
      text: "Meeting a friend for lunch",
      isComplete: false,
    },
    {
      text: "Build ToDo App",
      isComplete: false,
    },
  ]);

  const addTodo = (text) => {
    const newToDos = [...todos, { text: text, isComplete: false }];
    setTodos(newToDos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div id='todo'>
      <h1>ToDo List</h1>
        {todos.map((todo, i) => (
          <Todo id="todo" index={i} key={i} todo={todo} remove={removeTodo} />
        ))}
        <br/>
        <ToDoForm addTodo={addTodo}/>
    </div>
  );
}


function ToDoForm({addTodo}) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
  };
  
  return (
    <form> 
      <label htmlFor='new-todo'> Add todo: </label>
      <input
        id='new-todo'
        type="text"
        className="input"
        value={value}
        placeholder="Add ToDo ..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add todo</button>
    </form>
  );
}


function Todo({todo, index, remove}) {
  function handle() {
      remove(index);
  }
  return (
      <div onClick={handle}>
        {todo.text} (-)</div>
  )
}

export default App;
