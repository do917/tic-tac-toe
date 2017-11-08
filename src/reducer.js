import {
  PLAY_GAME,
  UPDATE_BOARD,
  EDIT_USERNAME,
} from './actionTypes';

const defualtState = {
  username: '',
  playerInit: false,
  gameInPlay: false,
  currentStatus: 'O',
  pieces: ['', '', '', '', '', '', '', '', ''],
};

const reducer = (state = defualtState, action) => {
  if (action.type === EDIT_USERNAME) {
    return {
      ...state,
      username: action.payload.data,
    };
  }

  if (action.type === PLAY_GAME) {
    return {
      ...state,
      playerInit: true,
      gameInPlay: true,
    };
  }

  if (action.type === UPDATE_BOARD) {
    const {
      board,
      gameInPlay,
      winningPlayer,
      nextPlayerTurn,
    } = action.payload.data;
    return {
      ...state,
      gameInPlay,
      winningPlayer,
      pieces: board,
      currentStatus: nextPlayerTurn,
    };
  }

  return state;
};

export default reducer;
