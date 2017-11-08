import React from 'react';
import PropTypes from 'prop-types';


const Status = ({ text }) => {
  return (
    <div className="status">
      {text}
    </div>
  );
};

Status.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Status;

