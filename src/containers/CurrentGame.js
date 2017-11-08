import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import components from '../components';
import actions from '../actions';

const { Board, Status, Piece } = components;

class CurrentGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.currentStatusToMsg = this.currentStatusToMsg.bind(this);
    this.computerMakesMove = this.computerMakesMove.bind(this);
  }

  currentStatusToMsg(st) {
    const status = {
      o: 'Make Your Move!',
      x: 'The computer is thinking',
    };
    return status[st];
  }

  computerMakesMove() {
    const { pieces, placePiece } = this.props;
    setTimeout(() => {
      const availPieces = pieces.reduce((acc, piece, i) => {
        if (piece === '') {
          return [...acc, i];
        } else {
          return acc;
        }
      }, []);
      const indToDel = availPieces[Math.floor(Math.random() * availPieces.length)];

      placePiece(indToDel, 'x', pieces);
    }, 3000);
  }

  render() {
    const {
      pieces,
      placePiece,
      currentStatus,
    } = this.props;
    const boardPieces = pieces.map((d, i) => {
      return (
        <Piece
          mark={d}
          cb={() => {
            if (currentStatus === 'o') {
              placePiece(i, 'o', pieces)}
            }
          } 
        />
      );
    });

    if (currentStatus === 'x') {
      this.computerMakesMove();
    } 

    return (
      <div className="current-game">
        <Status text={this.currentStatusToMsg(currentStatus)} />
        <Board pieces={boardPieces} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  pieces: state.game.pieces,
  currentStatus: state.game.currentStatus,
});

const mapDispatchToProps = (dispatch) => ({
  placePiece: (i, player, board) => dispatch(actions.placePiece(i, player, board)),
});

CurrentGameContainer.propTypes = {
  pieces: PropTypes.array.isRequired,
  placePiece: PropTypes.func.isRequired,
  currentStatus: PropTypes.string.isRequired,
};

const CurrentGame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentGameContainer);


export default CurrentGame;
