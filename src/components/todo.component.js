import React from "react";
import './todo.css'
const Todo = ({title, completed, toggle, deleteTodo, updateTitle}) => {
    return <div className='todo'>
        <input
            type="checkbox"
            checked={completed}
            onChange={toggle}
        />
        <input className='title' value={title} onChange={(event) => updateTitle(event.target.value)}/>
        <button onClick={deleteTodo}>Delete</button>
    </div>
}

export default Todo
