import React from "react";

const TodoItem = ({ item, index, deleteTodoItem }) => {
  return (
    <div>
      <li>
        {item.todo}
        <button onClick={deleteTodoItem}>del</button>
      </li>
    </div>
  );
};
export default TodoItem;
