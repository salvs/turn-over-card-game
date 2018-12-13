import React, { Component } from 'react';
import './App.css';

let id = 0
const Todo = props => (
  <li>
    <input type="checkbox" onClick={props.markChecked}/>
    <button onClick={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      checked: false,
    }
  }

  addTodo() {
    const text = prompt("What a TODO?")
    this.setState( {
      todos: [...this.state.todos, {id: id++, text: text, checked: false}],
    })
  }

  removeTodo(id) {
    this.setState( {
      todos: this.state.todos.filter(todo => id !== todo.id)
    })
  }
  
  

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        
        <button onClick={() => this.addTodo()}>Add</button>
        <ul>
          {this.state.todos.map(todo => (
          <Todo onDelete={() => this.removeTodo(todo.id)} 
          todo= {todo} />
          ))}
        </ul>
        <span>The number of todos are: {this.state.todos.length}</span>
        <span>The checked todos are: {this.state.todos.map((a) => a !== false).length}</span>
      </div>


    );
  }
}

export default App;
