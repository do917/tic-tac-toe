import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import components from '../components';

const { Board, Status, Piece } = components;


const EndGameContainer = ({ winner, pieces }) => {
  const message = {
    X: 'You Lost :(',
    O: 'You Won!!',
  };

  const announcement = message[winner] || 'It\'s a Tie!';
  const boardPieces = pieces.map((p, i) => {
    return <Piece key={i} mark={p} disable={true} />;
  });

  return (
    <div className="endgame">
      <Status text={announcement} />
      <Board pieces={boardPieces} width={3 * 100} />
    </div>
  );
};


const mapStateToProps = (state) => ({
  winner: state.game.winningPlayer,
  pieces: state.game.pieces,
});

const mapDispatchToProps = (dispatch) => ({
});

EndGameContainer.propTypes = {
  winner: PropTypes.string,
  pieces: PropTypes.array.isRequired,
};

const EndGame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EndGameContainer);

export default EndGame;
