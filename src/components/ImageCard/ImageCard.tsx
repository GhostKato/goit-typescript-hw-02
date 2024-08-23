import React from 'react';
import s from './ImageCard.module.css';
import { Image } from '../../types/types';

interface ImageCardProps {
  image: Image;
  handleOpenModal: (
    url: string,
    alt: string,
    description: string | undefined,
    instagram: string | undefined,
    location: string | undefined
  ) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, handleOpenModal }) => {
  const { urls, alt_description, description, user } = image;

  const handleClick = () => {
    handleOpenModal(
      urls.regular,
      alt_description,
      description,
      user.instagram_username,
      user.location
    );
  };

  return (
    <li className={s.card} onClick={handleClick}>
      <img src={urls.small} alt={alt_description} className={s.img} />
    </li>
  );
};

export default ImageCard;

