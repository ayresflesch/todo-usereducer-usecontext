import React from 'react';
import TodoList from './pages/TodoList';
import StoreContext from './provider/Store';

const App = () => {
  return (
    <StoreContext>
      <TodoList />
    </StoreContext>
  );
}

export default App;
