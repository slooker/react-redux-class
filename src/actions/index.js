import {store} from '../stores'

export function handleTurn(square) {
  store.dispatch({
    type: 'HANDLE_TURN',
    payload: square
  })
}