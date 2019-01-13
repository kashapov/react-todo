import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const items = ["Learn React", "Learn Redux", "Build Awesome App"];

  return (
    <ul>
      <li><TodoListItem /></li>
    </ul>
  );
};

export default TodoList;
