
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import components from '../components';

const { Board, Status, Piece } = components;


const EndGameContainer = ({ winner, pieces, boardLength }) => {
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
      <Board pieces={boardPieces} width={boardLength * 100} />
    </div>
  );
};


const mapStateToProps = (state) => ({
  pieces: state.game.pieces,
  winner: state.game.winningPlayer,
  boardLength: state.game.boardLength,
});

const mapDispatchToProps = (dispatch) => ({
});

EndGameContainer.propTypes = {
  winner: PropTypes.string,
  pieces: PropTypes.array.isRequired,
  boardLength: PropTypes.number.isRequired,
};

const EndGame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EndGameContainer);

export default EndGame;
