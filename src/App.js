import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import containers from './containers';
const { Welcome, CurrentGame, EndGame } = containers;

class AppContainer extends Component {
  render() {
    console.log('this', this.props.game)
    const { playerInit, gameWinner } = this.props;
    return (
      <div className="App">
        {!playerInit
          ? <Welcome />
          : <CurrentGame />
          ? gameWinner
          : <EndGame />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playerInit: state.game.playerInit,
  gameWinner: state.game.gameWinner,
});

const mapDispatchToProps = (dispatch) => ({

});

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);

export default App;
