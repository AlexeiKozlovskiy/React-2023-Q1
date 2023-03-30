import React from 'react';
import { Card } from './card';
import { FormInputData } from './types';

interface CardListFormProps {
  formSubmissions?: FormInputData[];
}

export class CarListForm extends React.Component<CardListFormProps> {
  render() {
    const formSubmissions = this.props.formSubmissions?.reverse() || [];
    return (
      <div className="cardList__wrapper wrapper">
        {formSubmissions.map((formData) => (
          <Card key={formData.id} {...formData} />
        ))}
      </div>
    );
  }
}
