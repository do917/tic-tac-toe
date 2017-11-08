import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ pieces, width }) => (
  <div className="board" style={{ width }}>
    {pieces.map(piece => piece)}
  </div>
);

Board.propTypes = {
  width: PropTypes.number.isRequired,
  pieces: PropTypes.array.isRequired,
};

export default Board;
