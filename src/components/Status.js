import React from 'react';
import PropTypes from 'prop-types';


const Status = ({ text }) => {
  return (
    <h4 className="status">
      {text}
    </h4>
  );
};

Status.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Status;

