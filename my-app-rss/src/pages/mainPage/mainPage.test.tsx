import { render, screen } from '@testing-library/react';
import { MainPage } from './mainPage';
import { Provider } from 'react-redux';
import { store } from './../../components/store';

describe('MainPage component', () => {
  it('renders the SearchInput component', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
