import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EndGameContainer = ({ winner }) => {
  const message = {
    X: 'You Lost :(',
    O: 'You Won!!',
  };

  return (
    <div>
      {message[winner]}
    </div>
  );
};

const mapStateToProps = (state) => ({
  winner: state.game.winningPlayer,
});

const mapDispatchToProps = (dispatch) => ({
});

EndGameContainer.propTypes = {
  winner: PropTypes.string.isRequired,
};

const EndGame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EndGameContainer);

export default EndGame;
