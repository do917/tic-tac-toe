import React from 'react';
import PropTypes from 'prop-types';

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
    this.hoverActive = this.hoverActive.bind(this);
    this.hoverInactive = this.hoverInactive.bind(this);
  }

  hoverActive() {
    this.setState({
      hovered: true,
    });
  }

  hoverInactive() {
    this.setState({
      hovered: false,
    });
  }

  render() {
    const { mark, cb, disable } = this.props;
    let hovered;
    if (this.state.hovered || disable) {
      hovered = 'rgba(195, 195, 195, 0.6)';
    }

    return (
      <div
        className="piece flex-center"
        onClick={cb}
        style={{ backgroundColor: hovered }}
        onMouseOver={this.hoverActive}
        onMouseLeave={this.hoverInactive}
      >
        {mark}
      </div>
    );
  }
}

Piece.propTypes = {
  cb: PropTypes.func,
  disable: PropTypes.bool,
  mark: PropTypes.string.isRequired,
};

export default Piece;
