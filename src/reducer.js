import {
  ADD_MOVE,
  UPDATE_STATUS,
  EDIT_USERNAME,
} from './actionTypes';

const defualtState = {
  playerInit: false,
  gameWinner: false,
  username: '',
};

const reducer = (state = defualtState, action) => {
  if (action.type === EDIT_USERNAME) {
    return {
      ...state,
      username: action.payload.data,
    };
  }
  return state;
};

export default reducer;
