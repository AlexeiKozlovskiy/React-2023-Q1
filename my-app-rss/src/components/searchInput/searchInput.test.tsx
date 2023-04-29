import { render, fireEvent, screen } from '@testing-library/react';
import { SearchInput } from './../searchInput/searchInput';
import { Provider } from 'react-redux';
import { store } from './../store';

describe('SearchInput', () => {
  it('should render the search input', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });
  it('update the input value', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement).toHaveValue('test');
  });

  it('should call the search function when the user clicks the search button', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    const searchButtonElement = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButtonElement);
  });

  it('should call the clear input function when the user clicks the clear input button', () => {
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
  });
  it('should clear input value on cross button click', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
    const crossButton = getByTestId('cross-button');
    fireEvent.click(crossButton);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    expect(input.value).toBe('');
  });
});
