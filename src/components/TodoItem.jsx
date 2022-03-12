import React from "react";

const TodoItem = ({ item, index, deleteTodoItem, updateTodoItem }) => {
  return (
    <div>
      <li>
        {`${item.todo} complete: ${item.complete}`}
        <button onClick={() => deleteTodoItem(index)}>del</button>
        <button onClick={() => updateTodoItem(index)}>update</button>
      </li>
    </div>
  );
};
export default TodoItem;
