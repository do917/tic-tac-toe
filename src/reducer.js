import {
  PLAY_GAME,
  UPDATE_BOARD,
  EDIT_USERNAME,
} from './actionTypes';

const defualtState = {
  playerInit: false,
  gameInPlay: false,
  username: '',
  pieces: ['', '', '', '', '', '', '', '', ''],
  currentStatus: 'Make your move!'
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
    return {
      ...state,
      pieces: action.payload.data,
    };
  }

  return state;
};

export default reducer;
