import React, { useContext } from 'react'
import TodoItem from '../TodoItem'

import './styles.css';
import { StoreContext } from '../../../../provider/Store';

const TodosContainer = () => {

  const { state, actions, dispatch } = useContext(StoreContext)

  return (
    <ul className="todos-container">
      {
        state.isFetching ?
          <li>loading</li> :
          state.todos.map(todo => (
            <TodoItem key={todo.id}
              todo={todo} />
          ))
      }
    </ul>
  )
}

export default TodosContainer
