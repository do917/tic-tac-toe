import React, { Component } from 'react';
import { connect } from 'react-redux';
import containers from './containers';
import actions from './actions';
import './App.css';

const { Welcome, CurrentGame, EndGame } = containers;

class AppContainer extends Component {
  render() {
    const { playerInit, gameWinner, username, editUsername } = this.props;
    return (
      <div className="App">
        {!playerInit
          ? <Welcome username={username} editUsername={editUsername}/>
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
  editUsername: (t) => dispatch(actions.editUsername(t))
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);

export default App;
