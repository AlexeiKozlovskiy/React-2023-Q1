import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './card';
import { CarListForm } from './cardListForm';

describe('Card', () => {
  it('render card', () => {
    render(<Card />);
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
  });
  it('renders available colors', () => {
    const availableColors = ['red', 'green', 'black'];
    render(<Card availableColors={availableColors} />);
    expect(screen.getByText(/red/i)).toBeInTheDocument();
  });
});

describe('CarListForm', () => {
  it('renders a list of Card components with the correct props', () => {
    const formSubmissions = [
      {
        id: 1,
        name: 'test',
        price: 10,
        collection: '06-04-2023',
        color: 'red',
        availableColors: ['black', 'green', 'red'],
        category: 'Tree decorations',
        image: '/test.jpg',
      },
    ];
    const { getAllByTestId } = render(<CarListForm formSubmissions={formSubmissions} />);
    const cards = getAllByTestId('card');
    expect(cards).toHaveLength(formSubmissions.length);
    cards.forEach((card, index) => {
      const formData = formSubmissions[formSubmissions.length - 1 - index];
      expect(card).toHaveTextContent(formData.name);
      expect(card).toHaveTextContent(formData.collection);
    });
  });
});
