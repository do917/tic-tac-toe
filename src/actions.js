import {
  PLAY_GAME,
  UPDATE_BOARD,
  EDIT_USERNAME,
} from './actionTypes';

const placePieceHelper = (i, board) => {
  const boardCopy = [...board];
  boardCopy[i] = 'O';
  return boardCopy;
};

const editUsername = (t) => ({
  type: EDIT_USERNAME,
  payload: {
    data: t,
  },
});

const playGame = () => ({
  type: PLAY_GAME,
});

const placePiece = (i, board) => ({
  type: UPDATE_BOARD,
  payload: {
    data: placePieceHelper(i, board),
  },
});

export default {
  playGame,
  placePiece,
  editUsername,
};
