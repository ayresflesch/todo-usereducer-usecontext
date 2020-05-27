const initialState = {
  newTodoInput: '',
  todos: [],
  isFetching: false
}

const types = {
  RECEIVE_TODOS: 'RECEIVE_TODOS',
  REQUEST_TODOS: 'REQUEST_TODOS',
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  REMOVE: 'REMOVE',
  COMPLETE: 'COMPLETE',
  INPUT: 'INPUT'
}

const actions = {
  receiveTodos: (todos) => ({ type: types.RECEIVE_TODOS, payload: todos }),
  requestTodos: () => ({ type: types.REQUEST_TODOS }),
  add: () => ({ type: types.ADD }),
  update: (id, description) => ({ type: types.UPDATE, payload: { id, description } }),
  remove: (id) => ({ type: types.REMOVE, payload: id }),
  complete: (id) => ({ type: types.COMPLETE, payload: id }),
  input: (value) => ({ type: types.INPUT, payload: value }),
}

const reducer = (state, action) => {
  const { todos, newTodoInput } = state

  switch (action.type) {
    case types.RECEIVE_TODOS:
      return { ...state, todos: action.payload, isFetching: false }
    case types.REQUEST_TODOS:
      return { ...state, isFetching: true }
    case types.ADD:
      return {
        newTodoInput: '',
        todos: [...todos, {
          id: new Date().getTime(),
          description: newTodoInput,
          done: false
        }],
      }
    case types.UPDATE:
      const { id, description } = action.payload

      return {
        ...state,
        todos: todos.map(todo => {
          return todo.id === id ? { ...todo, description } : todo
        })
      }
    case types.REMOVE:
      const idToRemove = action.payload

      return {
        ...state,
        todos: todos.filter(todo => todo.id !== idToRemove)
      }
    case types.COMPLETE:
      const idToComplete = action.payload

      const newTodos = todos.map(todo => {
        return todo.id === idToComplete ? { ...todo, done: true } : todo
      })

      return {
        ...state,
        todos: newTodos
      }
    case types.INPUT:
      return { ...state, newTodoInput: action.payload }
    default:
      return state
  }
}

export {
  initialState,
  actions,
  reducer,
}