import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";

import "./App.css";

export default class App extends Component {
  state = {
    todoData: [
      { id: 1, label: "Learn React", important: false },
      { id: 2, label: "Learn Redux", important: false },
      { id: 3, label: "Build Awesome App", important: true }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newTodos = [...before, ...after];

      return {
        todoData: newTodos
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
