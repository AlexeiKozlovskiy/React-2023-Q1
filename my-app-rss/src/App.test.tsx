import React from 'react';
import { render, screen } from '@testing-library/react';
import { AboutUs } from './pages/aboutUs';
import { NotFound } from 'pages/notFound';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';

describe('any components app', () => {
  it('render app', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('render About Us page header text', () => {
    render(<AboutUs />);
    expect(screen.getByText(/Lorem/i)).toBeInTheDocument();
  });

  it('render not found page text', () => {
    render(<NotFound />);
    expect(screen.getByText(/404 - Not Found/i)).toBeInTheDocument();
  });

  it('render header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it('render footer', () => {
    render(<Footer />);
    expect(screen.getByText(/alexeikozlovskiy/i)).toBeInTheDocument();
  });
});

describe('useFetchMain', () => {});
