import React from "react";

const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, updateTodoItem }) => {
  return (
    <div>
      <li>
        {`${item.todo} complete: ${item.complete}`}
        <button onClick={() => deleteTodoItem(index)}>del</button>
        <button onClick={() => completeTodoItem(index)}>complete</button>
        <button onClick={() => updateTodoItem(index)}>update</button>
      </li>
    </div>
  );
};
export default TodoItem;
