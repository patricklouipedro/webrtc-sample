import React, { ButtonHTMLAttributes } from 'react';
import './button.css';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
}

const Button: React.FunctionComponent<Props> = ({
  block,
  children,
  ...rest
}) => {
  return (
    <button className={clsx('button', { 'button-block': block })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
