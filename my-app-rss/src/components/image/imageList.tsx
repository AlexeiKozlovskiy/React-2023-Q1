import React, { useContext } from 'react';
import { Image } from './image';
import { ImageContext } from '../../pages/mainPage';
import { ImageContextType, ImagesProps } from '../types';
import { PreloaderCircle } from '../preloader/preloaderCircle';

interface ImageListProps {
  responseMain: ImagesProps[];
  isLoadingMain: boolean;
}

export function ImageList({ responseMain, isLoadingMain }: ImageListProps) {
  const { handleImageClick } = useContext<ImageContextType>(ImageContext);

  return (
    <div data-testid="image-list" className="cardList__cotainer wrapper">
      <PreloaderCircle isLoading={isLoadingMain}>
        <div className="cardList__wrapper wrapper">
          {responseMain!.map((data) => (
            <Image key={data.id} {...data} onClick={() => handleImageClick(data)} />
          ))}
        </div>
      </PreloaderCircle>
    </div>
  );
}
