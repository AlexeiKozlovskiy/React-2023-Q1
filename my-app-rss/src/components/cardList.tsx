import React from 'react';
import { Card } from './card';
import { FormInputData } from './types';
import products from './../assets/products.json';

interface CardListProps {
  formSubmissions?: FormInputData[];
}

export class CardList extends React.Component<CardListProps> {
  render() {
    const formSubmissions = this.props.formSubmissions?.reverse() || [];
    return (
      <div className="cardList__wrapper wrapper">
        {formSubmissions.map((formData, index) => (
          <Card key={index} {...formData} />
        ))}
        {products.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  }
}
