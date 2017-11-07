import React from 'react';
import PropTypes from 'prop-types';


const Board = ({ pieces }) => {
  // const pieces = ['x', '', 'o','x', '', 'o','x', '', 'o'];

  return (
    <div className="board">
      {pieces.map((piece, i) => {
        return (
          <div className={`board-section pos-${i}`}>
            {piece}
          </div>
        );
      })}
    </div>
  );
};

Board.propTypes = {

};

export default Board;
