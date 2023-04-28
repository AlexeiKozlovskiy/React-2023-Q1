import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Image } from './image';
import { ImageList } from './imageList';
import { Provider } from 'react-redux';
import store from './../store';
import { vi } from 'vitest';

describe('Image component', () => {
  const mockOnClick = vi.fn();
  const imageProps = {
    id: '1',
    user: {
      name: 'name',
      instagram_username: 'test',
    },
    alt_description: 'alt',
    urls: {
      regular: 'https://ru.reactjs.org',
    },
    likes: 5,
    onClick: mockOnClick,
  };
  it('renders the user name and number of likes', () => {
    render(
      <Provider store={store}>
        <Image {...imageProps} />
      </Provider>
    );

    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('5♥')).toBeInTheDocument();
  });

  it('renders the image with alt text', () => {
    render(
      <Provider store={store}>
        <Image {...imageProps} />
      </Provider>
    );
    expect(screen.getByAltText('alt')).toBeInTheDocument();
    expect(screen.getByAltText('alt').getAttribute('src')).toBe('https://ru.reactjs.org');
  });

  it('calls onClick func when the image is clicked', () => {
    const { getByRole } = render(<Image {...imageProps} />);
    const imageWrapper = getByRole('img').parentElement;
    if (imageWrapper) {
      fireEvent.click(imageWrapper);
      expect(mockOnClick).toHaveBeenCalled();
    }
  });
});

describe('Images list component', () => {
  const mockOnClick = vi.fn();
  const responseMain = [
    {
      id: 'ewfwf1',
      user: { name: 'user1', instagram_username: 'user1' },
      alt_description: 'description1',
      urls: { regular: 'https://ru.reactjs.org' },
      likes: 10,
      onClick: mockOnClick,
    },
    {
      id: 'ewlkj23',
      user: { name: 'user2', instagram_username: 'user2' },
      alt_description: 'description2',
      urls: { regular: 'https://ru.reactjs.org' },
      likes: 20,
      onClick: mockOnClick,
    },
  ];
  it('renders the component without preloader circle', () => {
    render(
      <ImageList responseMain={responseMain} isLoadingMain={false} handleImageClick={mockOnClick} />
    );
    expect(screen.getByAltText('description1')).toBeInTheDocument();
    expect(screen.getByAltText('description2')).toBeInTheDocument();
  });
});
