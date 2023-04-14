import React from 'react';
import { Card } from './card';
import { FormInputData } from '../types';

interface CardListFormProps {
  formSubmissions: FormInputData[];
}

export function CarListForm({ formSubmissions }: CardListFormProps) {
  return (
    <div data-testid="card-list" className="cardList__wrapper wrapper">
      {formSubmissions &&
        formSubmissions.map((formData) => <Card key={formData.id} {...formData} />).reverse()}
    </div>
  );
}
