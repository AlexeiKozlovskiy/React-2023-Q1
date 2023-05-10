import React from 'react';
import { Image } from './image';
import { ImagesProps } from '../types';
import { PreloaderCircle } from '../preloader/preloaderCircle';

interface ImageListProps {
  responseMain: ImagesProps[];
  isLoadingMain: boolean;
  handleImageClick: (data: ImagesProps) => void;
}

export function ImageList({ responseMain, isLoadingMain, handleImageClick }: ImageListProps) {
  return (
    <div data-testid="image-list" className="cardList__cotainer wrapper">
      <PreloaderCircle isLoading={isLoadingMain}>
        <div className="cardList__wrapper wrapper">
          {responseMain &&
            Array.isArray(responseMain) &&
            responseMain.map((data) => (
              <Image key={data.id} {...data} onClick={() => handleImageClick(data)} />
            ))}
        </div>
      </PreloaderCircle>
    </div>
  );
}
