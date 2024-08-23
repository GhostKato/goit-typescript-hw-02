import React from 'react';
import s from './ErrorMessage.module.css';
import BarLoader from 'react-spinners/BarLoader';

const ErrorMessage: React.FC = () => {
  return (
    <div className={s.error}>
      <p className={s.p}>Error</p>
      <BarLoader color="red" width={500} height={10} />
    </div>
  );
};

export default ErrorMessage;


