import {
  ADD_MOVE,
  UPDATE_STATUS,
  EDIT_USERNAME,
} from './actionTypes';

const editUsername = (t) => ({
  type: EDIT_USERNAME,
  payload: {
    data: t,
  },
});

export default {
  editUsername,
};
