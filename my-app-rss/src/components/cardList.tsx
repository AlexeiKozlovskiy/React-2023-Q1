import React from 'react';
import { Card } from './card';

export class CardList extends React.Component {
  render() {
    return (
      <div className="cardList__wrapper">
        <Card />
      </div>
    );
  }
}
