import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import containers from './containers';
import actions from './actions';
import './App.css';

const { Welcome, CurrentGame, EndGame } = containers;

class AppContainer extends Component {
  render() {
    const {
      pieces,
      username,
      playGame,
      playerInit,
      gameInPlay,
      placePiece,
      editUsername,
    } = this.props;

    return (
      <div className="App">
        {!playerInit
          ? <Welcome
            username={username}
            playGame={playGame}
            editUsername={editUsername}
          />
          : gameInPlay
          ? <CurrentGame
            pieces={pieces}
            placePiece={placePiece}
          />
          : <EndGame />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pieces: state.game.pieces,
  username: state.game.username,
  playerInit: state.game.playerInit,
  gameInPlay: state.game.gameInPlay,
});

const mapDispatchToProps = (dispatch) => ({
  playGame: () => dispatch(actions.playGame()),
  editUsername: (t) => dispatch(actions.editUsername(t)),
  placePiece: (i, board) => dispatch(actions.placePiece(i, board)),
});

AppContainer.propTypes = {
  pieces: PropTypes.array.isRequired,
  playGame: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  placePiece: PropTypes.func.isRequired,
  playerInit: PropTypes.bool.isRequired,
  gameInPlay: PropTypes.bool.isRequired,
  editUsername: PropTypes.func.isRequired,
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);

export default App;
