import {makeObservable, observable, action, computed} from 'mobx';

export default class TodoListState {
    todos = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            toggleTodo: action,
            unCompleteTodoCount: computed
        });
    }

    addTodo = (userInput) => {
        const newTodo = {
            title: userInput,
            completed: false,
            id: Math.random(),
        }
        this.todos = [newTodo, ...this.todos]
    };

    toggleTodo = (todo) => {
        const todoIndex = this.todos.findIndex(({id}) => id === todo.id)
        this.todos[todoIndex].completed = !this.todos[todoIndex].completed
    }

    updateTodoTitle = (todo, value) => {
        const todoIndex = this.todos.findIndex(({id}) => id === todo.id)
        this.todos[todoIndex].title = value
    }

    deleteTodo = (todo) => {
        this.todos = this.todos.filter(({id}) => id !== todo.id)
    }

    get unCompleteTodoCount() {
        return this.todos.filter(todo => !todo.completed).length;
    }
}
