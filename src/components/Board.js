import React from 'react';
import PropTypes from 'prop-types';


const Board = ({ pieces }) => {
  return (
    <div className="board">
      {pieces.map((piece, i) => {
        return (
          <div key={i} className={`board-section pos-${i}`}>
            {piece}
          </div>
        );
      })}
    </div>
  );
};

Board.propTypes = {
  pieces: PropTypes.array.isRequired,
};

export default Board;
