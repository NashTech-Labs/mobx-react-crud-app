import React from "react";
import TodoList from "./components/todo-list.component";
import {inject, observer} from "mobx-react";
import './App.css'

const App = inject('todoStore')(observer(({todoStore}) => {
    const [userInput, setUserInput] = React.useState('');
    const onAddNewTodo = () => {
        if (userInput) {
            todoStore.addTodo(userInput)
            setUserInput('')
        }
    }
        return (
            <div>
                <div className='add-new-todo-container'>
                <input
                    className='add-new-todo-input'
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                />
                <button onClick={() => onAddNewTodo()}>Add</button>
                </div>
                <TodoList/>
            </div>
        );
    }
))

export default App;
