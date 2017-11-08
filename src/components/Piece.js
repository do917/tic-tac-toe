import React from 'react';
import PropTypes from 'prop-types';


const Piece = ({ mark, cb }) => {
  return (
    <div className="piece" onClick={cb}>
      {mark}
    </div>
  );
};

Piece.propTypes = {
  cb: PropTypes.func.isRequired,
  mark: PropTypes.string.isRequired,
};

export default Piece;
