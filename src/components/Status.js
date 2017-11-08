import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ text }) => (
  <h3 className="status">
    {text}
  </h3>
);

Status.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Status;

