import { AnyAction } from 'redux';
import update from 'immutability-helper';

import {
  CREATE_ROOM,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAILED,
  JOIN_ROOM,
  JOIN_ROOM_SUCCESS,
  JOIN_ROOM_FAILED
} from '../actions/app';

interface State {
  creating: boolean;
  joining: boolean;
  error: string;
}

const initialState: State = {
  creating: false,
  joining: false,
  error: ''
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_ROOM:
      return update(state, {
        creating: { $set: true }
      });
    case CREATE_ROOM_SUCCESS:
      return update(state, {
        creating: { $set: false }
      });
    case CREATE_ROOM_FAILED:
      return update(state, {
        creating: { $set: false },
        error: { $set: action.payload }
      });
    case JOIN_ROOM:
      return update(state, {
        joining: { $set: true }
      });
    case JOIN_ROOM_SUCCESS:
      return update(state, {
        joining: { $set: false }
      });
    case JOIN_ROOM_FAILED:
      return update(state, {
        joining: { $set: false },
        error: { $set: action.payload }
      });
    default:
      return state;
  }
};

export default reducer;
