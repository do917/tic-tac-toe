import React from 'react';
import PropTypes from 'prop-types';
import components from '../components';

const { Board, Status, Piece } = components;

const CurrentGame = ({ pieces, placePiece }) => {  
  const boardPieces = pieces.map((d, i) => {
    return (<Piece mark={d} cb={() => placePiece(i, pieces)} />);
  });

  return (
    <div className="current-game">
      <Status text={'you are playing!'} />
      <Board pieces={boardPieces} />
    </div>
  );
};

CurrentGame.propTypes = {
  pieces: PropTypes.array.isRequired,
  placePiece: PropTypes.func.isRequired,
};

export default CurrentGame;
