import {
  ADD_MOVE,
  UPDATE_STATUS,
  SET_PLAYER_INFO,
} from './actionTypes';

const defualtState = {
  playerInit: false,
  gameWinner: false,
};

const reducer = (state = defualtState, action) => {
  return state;
};

export default reducer;
