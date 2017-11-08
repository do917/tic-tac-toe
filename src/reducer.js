import {
  PLAY_GAME,
  UPDATE_BOARD,
  EDIT_USERNAME,
  SET_BOARD_LENGTH,
} from './actionTypes';

const defualtState = {
  username: '',
  boardLength: 3,
  playerInit: false,
  gameInPlay: false,
  currentStatus: 'O',
  pieces: ['', '', '', '', '', '', '', '', ''],
};

const reducer = (state = defualtState, action) => {
  if (action.type === SET_BOARD_LENGTH) {
    return {
      ...state,
      boardLength: action.payload.data,
    };
  }

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
      pieces: action.payload.data,
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
