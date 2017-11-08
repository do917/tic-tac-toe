import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  FormControl,
  SplitButton,
  MenuItem,
} from 'react-bootstrap';
import actions from '../actions';
import components from '../components';

const { Status } = components;

const WelcomeContainer = ({
  username,
  playGame,
  boardLength,
  editUsername,
  setBoardLength,
}) => {
  const handlePlayGame = (e) => {
    e.preventDefault();
    playGame(boardLength);
  };

  return (
    <div className="welcome">
      <Status text="Welcome to Tic-Tac-Toe" />
      <form className="welcome-form flex-center">
        <FormControl
          type="input"
          value={username}
          placeholder="Enter Nickname"
          onChange={(e) => editUsername(e.target.value)}
        />
        <SplitButton
          pullRight
          title="Play!"
          type="submit"
          id="play-button"
          bsStyle="primary"
          onClick={handlePlayGame}
          style={{ width: 175 }}
        >
          <MenuItem eventKey="0">Grid Length</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="3" onClick={() => setBoardLength(3)}>3</MenuItem>
          <MenuItem eventKey="4" onClick={() => setBoardLength(4)}>4</MenuItem>
          <MenuItem eventKey="5" onClick={() => setBoardLength(5)}>5</MenuItem>
          <MenuItem eventKey="6" onClick={() => setBoardLength(6)}>6</MenuItem>
          <MenuItem eventKey="7" onClick={() => setBoardLength(7)}>7</MenuItem>
        </SplitButton>
      </form>
    </div>
  );
};


const mapStateToProps = (state) => ({
  username: state.game.username,
  playerInit: state.game.playerInit,
  gameInPlay: state.game.gameInPlay,
  boardLength: state.game.boardLength,
});

const mapDispatchToProps = (dispatch) => ({
  playGame: (len) => dispatch(actions.playGame(len)),
  editUsername: (t) => dispatch(actions.editUsername(t)),
  setBoardLength: (len) => dispatch(actions.setBoardLength(len)),
  placePiece: (i, board) => dispatch(actions.placePiece(i, board)),
});

WelcomeContainer.propTypes = {
  playGame: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  editUsername: PropTypes.func.isRequired,
  boardLength: PropTypes.number.isRequired,
  setBoardLength: PropTypes.func.isRequired,
};

const Welcome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeContainer);

export default Welcome;
