import React from 'react';
import { Card } from './card';
import { FormInputData } from './types';

interface CardListFormProps {
  formSubmissions?: FormInputData[];
}

export function CarListForm({ formSubmissions = [] }: CardListFormProps) {
  return (
    <div className="cardList__wrapper wrapper">
      {formSubmissions
        .slice()
        .reverse()
        .map((formData) => (
          <Card key={formData.id} {...formData} />
        ))}
    </div>
  );
}
