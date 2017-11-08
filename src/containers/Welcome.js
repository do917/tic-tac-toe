import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  FormControl,
} from 'react-bootstrap';
import actions from '../actions';
import components from '../components';

const { Status } = components;

const WelcomeContainer = ({
  username,
  editUsername,
  playGame,
}) => {
  const handlePlayGame = (e) => {
    e.preventDefault();
    playGame();
  };

  return (
    <div className="welcome">
      <Status text="Welcome to Tic-Tac-Toe" />
      <form className="welcome-form">
        <FormControl
          type="input"
          value={username}
          placeholder="Enter Nickname"
          onChange={(e) => editUsername(e.target.value)}
        />
        <Button
          block={true}
          type="submit"
          bsStyle="primary"
          onClick={handlePlayGame}
        >
          Play!
        </Button>
      </form>
    </div>
  );
};


const mapStateToProps = (state) => ({
  username: state.game.username,
  playerInit: state.game.playerInit,
  gameInPlay: state.game.gameInPlay,
});

const mapDispatchToProps = (dispatch) => ({
  playGame: () => dispatch(actions.playGame()),
  editUsername: (t) => dispatch(actions.editUsername(t)),
  placePiece: (i, board) => dispatch(actions.placePiece(i, board)),
});

WelcomeContainer.propTypes = {
  playGame: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  editUsername: PropTypes.func.isRequired,
};

const Welcome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeContainer);

export default Welcome;
