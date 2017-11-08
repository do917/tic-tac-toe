import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import components from '../components';
import actions from '../actions';

const { Board, Status, Piece } = components;

class CurrentGameContainer extends React.Component {
  render() {
    const {
      pieces,
      placePiece,
    } = this.props;
    const boardPieces = pieces.map((d, i) => {
      return (
        <Piece
          mark={d}
          cb={() => placePiece(i, pieces)} 
        />
      );
    });

    return (
      <div className="current-game">
        <Status text={'test'} />
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
  placePiece: (i, board) => dispatch(actions.placePiece(i, board)),
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
