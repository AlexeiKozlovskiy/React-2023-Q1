import './preloaderCircle.scss';
import React, { ReactNode } from 'react';

interface PreloaderCircleProps {
  children?: ReactNode;
  isLoading: boolean;
}

export const PreloaderCircle = ({ children, isLoading }: PreloaderCircleProps) => {
  if (isLoading || isLoading === undefined) {
    return (
      <div data-testid="preloader-circle" className="preloader-circle">
        <div className="preloader-circle__circle wrapper"></div>
      </div>
    );
  }
  return <>{children}</>;
};
