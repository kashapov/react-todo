import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";

import "./App.css";

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTodoItem("Learn React"),
      this.createTodoItem("Learn Redux"),
      this.createTodoItem("Build Awesome App")
    ],
    filter: "all",
    search: ""
  };

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    };
  }

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

  addItem = text => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      let newTodos = [...todoData, newItem];

      return {
        todoData: newTodos
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);

    return [...before, newItem, ...after];
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  onSearch = search => {
    this.setState({
      search
    });
  };
  

  search(items, search) {
    return items.filter(el => {
      return el.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  onFilter = filter => {
    this.setState({
      filter
    });
    //console.log(filter);
  };

  filter(items, filter) {
  // switch filter 

    /*return items.filter(el => {
      return el.label.done === filter;
    });*/
  }

  render() {
    const { todoData, search, filter } = this.state;

    //visibleTodo = this.filter(visibleTodo, filter);
    const visibleTodo = this.search(todoData, search);

    

    const doneCount = visibleTodo.filter(el => el.done).length;
    const todoCount = visibleTodo.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter onFilter={this.onFilter} filter={filter} />
        </div>
        <TodoList
          todos={visibleTodo}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
