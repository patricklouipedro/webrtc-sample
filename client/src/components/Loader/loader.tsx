import React from 'react';
import './loader.css';

interface Props {
  message?: string;
}

const Loader: React.FunctionComponent<Props> = ({ message = 'Loading...' }) => {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-message">{message}</div>
      </div>
    </div>
  );
};

export default Loader;
