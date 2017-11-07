import React from 'react';
import PropTypes from 'prop-types';


const Piece = ({ mark }) => {
  return (
    <div className="piece">
      {mark}
    </div>
  );
};

Piece.propTypes = {

};

export default Piece;
