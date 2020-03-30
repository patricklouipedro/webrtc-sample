import { combineReducers } from 'redux';

import App from './app';
import Room from './room';

const reducers = {
  app: App,
  room: Room
};

const root = combineReducers(reducers);

export default root;
