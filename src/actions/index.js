import store from './store'

export function handleTurn(square) {
  store.dispatch({
    type: 'HANDLE_TURN',
    payload: square
  })
}