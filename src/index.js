import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

import "./index.css";

const App = () => {
  const todoData = [
    { id: 1, label: "Learn React", important: false },
    { id: 2, label: "Learn Redux", important: false },
    { id: 3, label: "Build Awesome App", important: true }
  ];

  return (
    <div className="todo-app">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
