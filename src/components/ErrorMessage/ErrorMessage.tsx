import React from 'react';
import s from './ErrorMessage.module.css';
import BarLoader from 'react-spinners/ScaleLoader';

const ErrorMessage: React.FC = () => {
  return (
    <div className={s.error}>
      <p className={s.p}>Error</p>
      <BarLoader color="red" size={500} height={10} />
    </div>
  );
};

export default ErrorMessage;

