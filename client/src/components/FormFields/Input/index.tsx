import React, { InputHTMLAttributes } from 'react';
import './input.css';
import clsx from 'clsx';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  block?: boolean;
  variant?: 'sm' | 'lg';
}

const Input: React.FunctionComponent<Props> = props => {
  const { block, label, variant, ...rest } = props;
  return (
    <React.Fragment>
      {label && <label className="label">{label}</label>}
      <input
        className={clsx('input', {
          [`input-${variant}`]: variant,
          'input-block': block
        })}
        {...rest}
      />
    </React.Fragment>
  );
};

export default Input;
