import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './../../components/header/header';

describe('routes', () => {
  it('sets page title based on current route', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-title')).toHaveTextContent('Form');
  });
  it('sets page title based on current route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-title')).toHaveTextContent('About Us');
  });

  it('based on invalid route, no header', () => {
    render(
      <MemoryRouter initialEntries={['/formmmmm']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-title')).not.toHaveTextContent('Form');
  });
});
