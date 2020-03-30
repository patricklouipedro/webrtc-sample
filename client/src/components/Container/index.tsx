import React from 'react';
import './container.css';

import clsx from 'clsx';

interface Props {
  center?: boolean;
}

const Container: React.FunctionComponent<Props> = ({ children, center }) => {
  return (
    <div className={clsx('container', { 'container-center': center })}>
      {children}
    </div>
  );
};

export default Container;
