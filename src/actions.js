import {
  PLAY_GAME,
  UPDATE_BOARD,
  EDIT_USERNAME,
} from './actionTypes';

const placePieceHelper = (i, player, board) => {
  const boardCopy = [...board];
  boardCopy[i] = player.toUpperCase();
  const turn = {
    x: 'o',
    o: 'x',
  };
  
  return {
    board: boardCopy,
    nextPlayerTurn: turn[player],
  }
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

const placePiece = (i, player, board) => ({
  type: UPDATE_BOARD,
  payload: {
    data: placePieceHelper(i, player, board),
  },
});

export default {
  playGame,
  placePiece,
  editUsername,
};
