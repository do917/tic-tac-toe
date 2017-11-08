import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions';
import {
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

class WelcomeContainer extends React.Component {
  render() {
    const {
      username,
      editUsername,
      playGame,
    } = this.props;

    return (
      <div>
        Welcome to Tic-Tac-Toe!<br />
        <Form>
          <FormControl
            type="input"
            value={username}
            onChange={(e) => editUsername(e.target.value)}
          />
          <Button
            type="submit"
            bsStyle="primary"
            onClick={playGame}
          >
            Play!
          </Button>
        </Form>
      </div>
    );
  }
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
