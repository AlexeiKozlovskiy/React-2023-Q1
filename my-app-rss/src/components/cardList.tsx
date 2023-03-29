import React from 'react';
import { Card } from './card';
import products from './../assets/products.json';

export class CardList extends React.Component {
  render() {
    return (
      <div className="cardList__wrapper wrapper">
        {products.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );
  }
}
