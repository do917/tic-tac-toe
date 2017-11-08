import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';

const reducers = combineReducers({
  game: reducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;
