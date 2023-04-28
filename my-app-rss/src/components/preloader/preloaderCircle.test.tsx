import { render, screen } from '@testing-library/react';
import { PreloaderCircle } from './preloaderCircle';
import { store } from './../store';
import { Provider } from 'react-redux';

describe('preloader', () => {
  it('render preloader', () => {
    render(
      <Provider store={store}>
        <PreloaderCircle isLoading={true} />
      </Provider>
    );
    const preloaderCircle = screen.getByTestId('preloader-circle');
    expect(preloaderCircle).toBeInTheDocument();
  });
});
