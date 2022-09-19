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
    <div>
      <h1>Todo List</h1>
        {todos.map((todo, i) => (
          <Todo index={i} key={i} todo={todo} remove={removeTodo} />
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
    <form onSubmit={handleSubmit}>
      <label htmlFor='new-todo'>Add todo: </label>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add ToDo ..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}


function Todo({todo, index, remove}) {
  function handle() {
      remove(index);
  }
  return (
      <div className="todo" onClick={handle}>
        {todo.text} (-)</div>
  )
}

export default App;

// function App() {
//   const [items, setItems] = React.useState([]);
//   const [value, setValue] = React.useState([]);
//   const [todos, setTodos] = React.useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if(!value) return;
//     addTodo(value);
//     setItems(...items, value);
//     setValue('');
//   }

//   const addTodo = (text) => {
//     const newToDos = [...todos, { text: text, isComplete: false }];
//     setTodos(newToDos);
//   };
  
//   const removeTodo = (index) => {
//     let temp = [...todos];
//     temp.splice(index, 1);
//     setTodos(temp);
//   };

//   return (
//     <div>
//       <h1>TODO</h1>
//       <TodoList items={items}/>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="new-todo">Add Todo: </label>
//         <input
//         id="new-todo"
//         value={value}
//         placeholder="Add Todo..."
//         onChange={e => setValue(e.target.value)}
//         />
//         <button>
//           Add #{items.length + 1}
//         </button>
//       </form>
//     </div>
//   );
// }

// function TodoList(props) {
//   return (
//     <ul>
//       {props.items.map((item, i) => (
//         <li key={i}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// export default App;
