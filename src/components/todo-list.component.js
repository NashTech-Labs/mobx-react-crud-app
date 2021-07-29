import React from "react";
import {inject, observer} from "mobx-react";
import Todo from "./todo.component";
import './todo-list.css'

const TodoList = inject('todoStore')(observer(({todoStore}) => {
    return <div className='todo-list'>
        {todoStore.todos.map(todo => {
            return <Todo
                key={todo.id}
                completed={todo.completed}
                title={todo.title}
                deleteTodo={() => todoStore.deleteTodo(todo)}
                updateTitle={(value) => todoStore.updateTodoTitle(todo, value)}
                toggle={() => todoStore.toggleTodo(todo)}/>
        })}
        <br/>
        Tasks left: {todoStore.unCompleteTodoCount}
    </div>
}))

export default TodoList
