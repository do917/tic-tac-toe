import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Welcome = ({
  username,
  playGame,
  editUsername,
}) => {
  return (
    <div>
      Welcome to Tic-Tac-Toe!<br />
      <Form>
        <FormControl
          type="input"
          value={username}
          onChange={(e) => editUsername(e.target.value)}
        />
        <Button
          type="submit"
          bsStyle="primary"
          onClick={playGame}
        >
          Play!
        </Button>
      </Form>
    </div>
  );
};

Welcome.propTypes = {
  playGame: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  editUsername: PropTypes.func.isRequired,
};

export default Welcome;
