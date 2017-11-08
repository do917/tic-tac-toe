import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import containers from './containers';
import './App.css';

const { Welcome, CurrentGame, EndGame } = containers;

const AppContainer = ({ playerInit, gameInPlay }) => (
  <div className="App">
    {!playerInit
      ? <Welcome />
      : gameInPlay
      ? <CurrentGame />
      : <EndGame />
    }
  </div>
);

const mapStateToProps = (state) => ({
  playerInit: state.game.playerInit,
  gameInPlay: state.game.gameInPlay,
});

const mapDispatchToProps = (dispatch) => ({
});

AppContainer.propTypes = {
  playerInit: PropTypes.bool.isRequired,
  gameInPlay: PropTypes.bool.isRequired,
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);

export default App;
