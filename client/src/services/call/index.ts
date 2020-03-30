import { connect } from '../socket';

export const connectToServer = () => {
  // @ts-ignore
  return connect(process.env.REACT_APP_API_URL);
};
