import React from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
