import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  Button,
} from 'react-bootstrap';

const Welcome = ({ username, editUsername, registerUser }) => {
  return (
    <div>
      Welcome to Tic-Tac-Toe!<br />
      <FormControl onChange={(e) => editUsername(e.target.value)}>
        {username}
      </FormControl>
      <Button bsStyle="primary">
        Play!
      </Button>
    </div>
  );
};

Welcome.propTypes = {

};

export default Welcome;
