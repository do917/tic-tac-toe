import {
  PLAY_GAME,
  UPDATE_BOARD,
  EDIT_USERNAME,
  SET_BOARD_LENGTH,
} from './actionTypes';

const checkWin = (pieces) => {
  const boardLength = Math.sqrt(pieces.length);
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
      const currCol = [];
      for (let j = 0; j < boardLength; j++) {
        currCol.push(pcs[i + j * boardLength]);
      }
      cols.push(currCol);
    }
    return cols;
  };

  const getDiags = (pcs) => {
    // Get Left sloping down to right diagonal
    const diags = [];
    let currDiag = [];
    for (let i = 0; i < boardLength; i++) {
      const pointer = boardLength * i;
      currDiag.push(pcs[i + pointer]);
    }
    diags.push(currDiag);

    // Get Right sloping down to left diagonal
    currDiag = [];
    const startRightDiag = boardLength - 1;
    const maxRightDiag = startRightDiag * boardLength;
    for (let i = startRightDiag; i <= maxRightDiag; i += startRightDiag) {
      currDiag.push(pcs[i]);
    }
    diags.push(currDiag);

    return diags;
  };

  const aWin = (pcs) => {
    const rows = getRows(pcs);
    const cols = getCols(pcs);
    const diags = getDiags(pcs);
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
    .filter(p => p !== '').length === board.length;

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
