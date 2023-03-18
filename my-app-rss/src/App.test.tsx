import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Main } from './pages/main';
import { AboutUs } from './pages/aboutUs';
import { NotFound } from 'pages/notFound';
import Footer from './components/footer';
import Header from './components/header';
import { Card } from './components/card';
import { CardList } from './components/cardList';
import SearchInput from './components/searchInput';
import products from './assets/products.json';
import { BrowserRouter } from 'react-router-dom';

describe('Card', () => {
  it('render card', () => {
    render(<Card />);
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Collection/i)).toBeInTheDocument();
    expect(screen.getByText(/Stock/i)).toBeInTheDocument();
    expect(screen.getByText(/Color/i)).toBeInTheDocument();
    expect(screen.getByText(/Size/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
  });
});

describe('Cards list', () => {
  it('render cards list', () => {
    render(<CardList />);
    products.forEach((el, ind) => {
      expect(screen.getByText(el.name)).toBeInTheDocument();
      expect(screen.getByText(el.price)).toBeInTheDocument();
      expect(screen.getAllByText(el.collection)).toHaveLength(
        products.filter((product) => product.collection === el.collection).length
      );
      expect(screen.getAllByText(el.stock)).toHaveLength(
        products.filter((product) => product.stock === el.stock).length
      );
      expect(screen.getAllByText(el.size)).toHaveLength(
        products.filter((product) => product.size === el.size).length
      );
      expect(screen.getAllByText(el.category)).toHaveLength(
        products.filter((product) => product.category === el.category).length
      );
    });
  });

  it('count cards', () => {
    render(<CardList />);
    expect(screen.getAllByTestId('card')).toHaveLength(products.length);
  });
});

describe('App components', () => {
  it('render header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it('render app', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('render Main page and header text', () => {
    render(<Main />);
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });

  it('render About Us page and header text', () => {
    render(<AboutUs />);
    expect(screen.getByText(/About us page/i)).toBeInTheDocument();
  });

  it('render not found page', () => {
    render(<NotFound />);
    expect(screen.getByText(/404 - Not Found/i)).toBeInTheDocument();
  });

  it('render footer', () => {
    render(<Footer />);
    expect(screen.getByText(/alexeikozlovskiy/i)).toBeInTheDocument();
  });

  it('render SearchInput', () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
