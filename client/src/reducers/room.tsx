import { AnyAction } from 'redux';

interface State {
  name: string;
  roomId: string;
}

const initialState: State = {
  name: '',
  roomId: ''
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
