import { Dispatch } from 'redux';

export const CREATE_ROOM = '@room/create';
export const CREATE_ROOM_SUCCESS = '@room/create-success';
export const CREATE_ROOM_FAILED = '@room/create-failed';

export const JOIN_ROOM = '@room/join';
export const JOIN_ROOM_SUCCESS = '@room/join-success';
export const JOIN_ROOM_FAILED = '@room/join-failed';

export const createRoom = (name: string, host: string) => (
  dispatch: Dispatch
) => {
  dispatch({ type: CREATE_ROOM, payload: { name, host } });
};

export const joinRoom = (roomId: string, name: string) => (
  dispatch: Dispatch
) => {
  dispatch({ type: JOIN_ROOM, payload: { roomId, name } });
};
