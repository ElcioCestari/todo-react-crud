import React from "react"

const TodoItem = ({item, index}) => {
    return (
    <div>
        <li>{item.todo}</li>
    </div>)
}
export default TodoItem