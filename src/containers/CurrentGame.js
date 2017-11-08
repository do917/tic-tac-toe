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

  piecesOnBoard(pieces) {
    return pieces.reduce((acc, piece, i) => {
      if (piece === '') {
        return [...acc, i];
      } else {
        return acc;
      }
    }, []);
  }

  currentStatusToMsg(st) {
    const status = {
      O: `${this.props.username}, make your move!`,
      X: 'The computer is thinking...',
    };
    return status[st];
  }

  computerMakesMove() {
    const { pieces, placePiece } = this.props;
    const timeToThink = Math.floor(Math.random() * 3000);
    setTimeout(() => {
      const availPieces = this.piecesOnBoard(pieces);
      const indToDel = availPieces[Math.floor(Math.random() * availPieces.length)];

      placePiece(indToDel, 'X', pieces);
    }, timeToThink);
  }

  render() {
    const {
      pieces,
      placePiece,
      boardLength,
      currentStatus,
    } = this.props;

    const boardPieces = pieces.map((d, i) => {
      return (
        <Piece
          key={i}
          mark={d}
          cb={() => {
            const piecesOnBoard = this.piecesOnBoard(pieces);
            const spaceAvailable = piecesOnBoard.indexOf(i) !== -1;
            if (currentStatus === 'O' && spaceAvailable) {
              placePiece(i, 'O', pieces)}
            }
          } 
        />
      );
    });

    if (currentStatus === 'X') {
      this.computerMakesMove();
    }

    return (
      <div className="current-game flex-center">
        <Status text={this.currentStatusToMsg(currentStatus)} />
        <Board pieces={boardPieces} width={boardLength * 100} />
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
  pieces: state.game.pieces,
  username: state.game.username,
  boardLength: state.game.boardLength,
  currentStatus: state.game.currentStatus,
});

const mapDispatchToProps = (dispatch) => ({
  placePiece: (i, player, board) => dispatch(actions.placePiece(i, player, board)),
});

CurrentGameContainer.propTypes = {
  pieces: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  placePiece: PropTypes.func.isRequired,
  boardLength: PropTypes.number.isRequired,
  currentStatus: PropTypes.string.isRequired,
};

const CurrentGame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentGameContainer);

export default CurrentGame;
