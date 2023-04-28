import React from 'react';
import { render, screen } from '@testing-library/react';
import { AboutUs } from 'pages/aboutUs';
import { NotFound } from 'pages/notFound';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';

import App from 'App';
import { Provider } from 'react-redux';
import store from './components/store';

describe('any components app', () => {
  it('render app', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/alexeikozlovskiy/i)).toBeInTheDocument();
  });
  it('render About Us page header text', () => {
    render(
      <Provider store={store}>
        <AboutUs />
      </Provider>
    );
    expect(screen.getByText(/Lorem/i)).toBeInTheDocument();
  });
  it('render not found page text', () => {
    render(
      <Provider store={store}>
        <NotFound />
      </Provider>
    );
    expect(screen.getByText(/404 - Not Found/i)).toBeInTheDocument();
  });

  it('render header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it('render footer', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(screen.getByText(/alexeikozlovskiy/i)).toBeInTheDocument();
  });
});
