import React, { useState } from "react";

const TodoInput = ({ createTodoItem }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("Please add something to-do");
    }
    createTodoItem(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create a todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
};
export default TodoInput;
