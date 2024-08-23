import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { Image } from '../../types/types';


interface ImageGalleryProps {
  images: Image[];
  handleOpenModal: (
    url: string,
    alt: string,
    description?: string,
    instagram?: string,
    location?: string
  ) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, handleOpenModal }) => {
  return (
    <ul className={s.ul}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} handleOpenModal={handleOpenModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;

