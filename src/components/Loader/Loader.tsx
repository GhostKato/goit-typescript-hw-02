import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';
import s from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <RiseLoader color="#14c57c" loading={true} size={20} />
    </div>
  );
};

export default Loader;

