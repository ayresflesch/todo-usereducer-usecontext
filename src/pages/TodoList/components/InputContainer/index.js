import React, { useContext } from 'react'
import { StoreContext } from '../../../../provider/Store'

const InputContainer = () => {

  const { state, actions, dispatch } = useContext(StoreContext)

  const handleAddClick = () => {
    if (state.newTodoInput.trim() !== '') {
      dispatch(actions.add())
    }
  }

  const handleEnterPressed = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleAddClick()
    }
  }

  return (
    <div>
      <input type="text"
        autoFocus
        value={state.newTodoInput}
        onChange={e => dispatch(actions.input(e.target.value))}
        onKeyPress={e => handleEnterPressed(e)}
      />
      <button onClick={handleAddClick}>Adicionar</button>
    </div>
  )
}

export default InputContainer
