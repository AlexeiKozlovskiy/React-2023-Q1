// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { MainPage } from './pages/mainPage';
// import { AboutUs } from './pages/aboutUs';
// import { NotFound } from 'pages/notFound';
// import Footer from './components/footer';
// import Header from './components/header';
// import { Card } from './components/card/card';
// import { CardList } from './components/card/cardList';
// import SearchInput from './components/searchInput/searchInput';
// import products from './assets/products.json';
// import { BrowserRouter } from 'react-router-dom';
// import App from 'App';

// describe('Card', () => {
//   it('render card', () => {
//     render(<Card />);
//     expect(screen.getByText(/Price/i)).toBeInTheDocument();
//     expect(screen.getByText(/Collection/i)).toBeInTheDocument();
//     expect(screen.getByText(/Available colors/i)).toBeInTheDocument();
//     expect(screen.getByText(/Category/i)).toBeInTheDocument();
//   });
// });

// describe('Cards list', () => {
//   it('render cards list', () => {
//     render(<CardList />);
//     products.forEach((el) => {
//       expect(screen.getByText(el.name)).toBeInTheDocument();
//       expect(screen.getByText(el.price)).toBeInTheDocument();
//       expect(screen.getAllByText(el.collection)).toHaveLength(
//         products.filter((product) => product.collection === el.collection).length
//       );
//       expect(screen.getAllByText(el.category)).toHaveLength(
//         products.filter((product) => product.category === el.category).length
//       );
//     });
//   });

//   it('count cards', () => {
//     render(<CardList />);
//     expect(screen.getAllByTestId('card')).toHaveLength(products.length);
//   });
// });

// describe('any components app', () => {
//   it('render app', () => {
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );
//   });

//   it('render Main page header text', () => {
//     render(<MainPage />);
//     expect(screen.getByText(/Popcorn/i)).toBeInTheDocument();
//   });

//   it('render About Us page header text', () => {
//     render(<AboutUs />);
//     expect(screen.getByText(/Lorem/i)).toBeInTheDocument();
//   });

//   it('render not found page text', () => {
//     render(<NotFound />);
//     expect(screen.getByText(/404 - Not Found/i)).toBeInTheDocument();
//   });

//   it('render header', () => {
//     render(
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     );
//     expect(screen.getByText(/about/i)).toBeInTheDocument();
//   });

//   it('render footer', () => {
//     render(<Footer />);
//     expect(screen.getByText(/alexeikozlovskiy/i)).toBeInTheDocument();
//   });

//   it('render SearchInput', () => {
//     render(<SearchInput />);
//     expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
//   });

//   it('clears input value on click', () => {
//     const { getByPlaceholderText, getByTestId } = render(<SearchInput />);
//     const input = getByPlaceholderText('Search') as HTMLInputElement;
//     const clearButton = getByTestId('clear-button');
//     fireEvent.change(input, { target: { value: 'jjjj' } });
//     fireEvent.click(clearButton);
//     expect(input.value).toBe('');
//   });
// });
