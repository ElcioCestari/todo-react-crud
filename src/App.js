import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState([
    { todo: "Mow the lawn", complete: false },
    { todo: "Do Laundry", complete: false },
    { todo: "Make Dinner", complete: false },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <TodoInput createTodoItem={createTodoItem}/>
      {todoItems.map((item, index) => (
        <TodoItem key={index} index={index} item={item} />
      ))}
    </div>
  );
}

export default App;
