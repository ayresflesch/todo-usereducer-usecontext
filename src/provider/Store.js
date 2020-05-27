import React, { useReducer, useEffect } from 'react'
import { reducer, initialState, actions } from "../reducers/TodoReducer";
import { fetchTodos } from '../api/todosService'

export const StoreContext = React.createContext()

const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch(actions.requestTodos())

    const fetch = async () => {
      const todos = await fetchTodos()
      dispatch(actions.receiveTodos(todos))
    }

    fetch()
  }, [dispatch, state.filter])

  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
