import {
  PLAY_GAME,
  UPDATE_BOARD,
  EDIT_USERNAME,
  SET_BOARD_LENGTH,
  INITIALIZE_BOARD,
} from './actionTypes';

const checkWin = (pieces) => {
  const boardLength = 3;
  const players = ['O', 'X'];

  const getRows = (pcs) => {
    const rows = [];
    for (let i = 0; i < pcs.length; i += boardLength) {
      rows.push(pcs.slice(i, i + boardLength));
    }
    return rows;
  };

  const getCols = (pcs) => {
    const cols = [];
    for (let i = 0; i < boardLength; i++) {
      cols.push([pcs[i], pcs[i + boardLength], pcs[i + (boardLength * 2)]]);
    }
    return cols;
  };

  const getDiags = (pcs) => {
    const diags = [];
    let currDiag = [];
    for (let i = 0; i < boardLength; i++) {
      const pointer = boardLength * i;
      currDiag.push(pcs[i + pointer]);
    }
    diags.push(currDiag);
    currDiag = [];
    // TODO:
    // hard coded solution for finding second diagonal
    for (let i = 2; i < 8; i += 2) {
      currDiag.push(pcs[i]);
    }
    diags.push(currDiag);

    return diags;
  };

  const aWin = (pcs) => {
    const rows = getRows(pcs);
    const cols = getCols(pcs);
    const diags = getDiags(pcs)
    const allPoss = [...rows, ...cols, ...diags];
    for (let i = 0; i < allPoss.length; i++) {
      const poss = allPoss[i];
      
      for (let j = 0; j < players.length; j++) {
        const player = players[j];
        let aMatch = poss.reduce((acc, p) => {
          if (p !== player) {
            return undefined;
          } else {
            return acc;
          }
        }, true);
        if (aMatch) {
          return player;
        }
      }
    }
    return undefined;
  };

  return aWin(pieces);
};

const initializeBoardHelper = (len) => {
  const pieces = [];
  for (let i = 0; i < len * len; i++) {
    pieces.push('');
  }
  return pieces;
};

const placePieceHelper = (i, player, board) => {
  const boardCopy = [...board];
  boardCopy[i] = player
  const winningPlayer = checkWin(boardCopy);
  let gameInPlay = true;
  const turn = {
    X: 'O',
    O: 'X',
  };
  const placedLastPiece = boardCopy
    .filter(p => p !== '').length === 9;

  if (winningPlayer || placedLastPiece) {
    gameInPlay = false;
  }

  return {
    gameInPlay,
    winningPlayer,
    board: boardCopy,
    nextPlayerTurn: turn[player],
  };
};

const setBoardLength = (len) => ({
  type: SET_BOARD_LENGTH,
  payload: {
    data: len,
  },
});

const editUsername = (t) => ({
  type: EDIT_USERNAME,
  payload: {
    data: t,
  },
});

const playGame = (len) => ({
  type: PLAY_GAME,
  payload: {
    data: initializeBoardHelper(len),
  },
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
  setBoardLength,
};
