import React from 'react';
import './field.css';

const Field: React.FunctionComponent = ({ children }) => {
  return <div className="field">{children}</div>;
};

export default Field;
