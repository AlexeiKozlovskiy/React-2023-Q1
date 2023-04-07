import React from 'react';
import { ImagesProps } from '../types';

export function Image({ user, alt_description, urls, likes, onClick }: ImagesProps) {
  function handleImageClick() {
    onClick();
  }

  return (
    <div data-testid="image" className="image" onClick={handleImageClick}>
      <img className="image__img" src={urls?.regular} alt={alt_description} />
      <div>{user?.name}</div>
      <div>{likes}&#9829;</div>
    </div>
  );
}
