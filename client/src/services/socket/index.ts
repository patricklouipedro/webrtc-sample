import io from 'socket.io-client';

export const connect = (server: string) => {
  return io(server);
};
