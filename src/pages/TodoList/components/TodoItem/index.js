import React, { useState, useContext } from 'react'

import './styles.css'
import { StoreContext } from '../../../../provider/Store'

const TodoItem = ({ todo }) => {

  const { actions, dispatch } = useContext(StoreContext)

  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(todo.description);

  const updateTodoDescription = () => {
    dispatch(actions.update(todo.id, editingValue))
    setIsEditing(false)
  }

  const handleEnterPressed = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      updateTodoDescription()
    }
  }

  return (
    <li key={todo.id} className="todo-item-container">
      {
        isEditing ?
          <input type="text"
            autoFocus
            className="editing-input"
            value={editingValue}
            onKeyPress={e => handleEnterPressed(e)}
            onChange={e => setEditingValue(e.target.value)}
            onBlur={updateTodoDescription} /> :
          <>
            <input type="checkbox"
              className="checkbox"
              checked={todo.done}
              disabled={todo.done}
              onChange={() => dispatch(actions.complete(todo.id))} />

            <span onDoubleClick={() => setIsEditing(true)}
              className={`description ${todo.done ? 'done' : ''}`}>
              {todo.description}
            </span>

            <button onClick={() => dispatch(actions.remove(todo.id))} type="button">X</button>
          </>
      }
    </li>
  )
}

export default TodoItem
