import React from 'react';
import InputContainer from './components/InputContainer';
import TodosContainer from './components/TodosContainer';

const TodoList = () => {
  return (
    <div>
      <header>Todo App</header>

      <InputContainer />
      <TodosContainer />
    </div>
  );
}

export default TodoList
