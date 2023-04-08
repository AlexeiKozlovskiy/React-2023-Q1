import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchInput from './../searchInput/searchInput';

describe('searchInput', () => {
  it('render SearchInput', () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  it('update the input value', () => {
    render(<SearchInput />);
    const searchButtonElement = screen.getByText('Search');
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.click(searchButtonElement);
    expect(inputElement).toHaveValue('test');
  });
});
