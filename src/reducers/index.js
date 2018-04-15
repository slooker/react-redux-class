const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true
}

export function ticTacToeReducer(state = initialState, action) {
  switch(action.type) {
    case 'HANDLE_TURN':
      const square = action.payload;
      state.squares[square.number] = square.marker;
      return {
        ...state,
        xIsNext: !state.xIsNext
      }
    case 'GET_TODOS':
      return {...state, todos: action.payload}
    default:
      return state
  }
}