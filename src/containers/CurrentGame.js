import React from 'react';
import PropTypes from 'prop-types';
import components from '../components';

const { Board, Header, Piece } = components;

const CurrentGame = ({ }) => {
  let pieces = [<Piece mark={'x'} />, <Piece mark={'x'} />, <Piece mark={'x'} />, <Piece mark={'x'} />, <Piece mark={'x'} />, <Piece mark={'x'} />, <Piece mark={'x'} />, <Piece mark={'x'} />, <Piece mark={'o'} />];
  return (
    <div className="current-game">
      <Header />
      <Board pieces={pieces} />
    </div>
  );
};

CurrentGame.propTypes = {

};

export default CurrentGame;
