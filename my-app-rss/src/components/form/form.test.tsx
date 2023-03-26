import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './form';
import { FormPage } from './../../pages/formPage';
import { ErrorMessage } from './formErrorMessage';
import { BrowserRouter } from 'react-router-dom';
import { validateFormData } from './validateForm';
import { resetForm } from './../form/resetForm';

describe('Form page', () => {
  const onFormSubmit = jest.fn();

  it('render form page components', () => {
    render(<FormPage />);
    render(<Form onFormSubmit={onFormSubmit} />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Collection/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Available/i)[0]).toBeInTheDocument();
    expect(screen.queryAllByText(/Category/i)[0]).toBeInTheDocument();
    expect(screen.getByLabelText(/Image/i)).toBeInTheDocument();
  });

  it('return error message when some fields are invalid', () => {
    const formData = {
      name: 'ff',
      price: 0,
      collection: '',
      color: '',
      availableColors: [],
      category: '',
      image: '',
    };

    const { errors, hasError } = validateFormData(formData);

    expect(errors.nameError).toBe('Please enter a name');
    expect(errors.priceError).toBe('Please enter a price');
    expect(errors.collectionError).toBe('Please enter a collection');
    expect(errors.colorError).toBe('Please select a color');
    expect(errors.availableColorsError).toBe('Please select available colors');
    expect(errors.categoryError).toBe('Please select a category');
    expect(errors.imageError).toBe('Please add image');
    expect(hasError).toBe(true);
  });

  it('reset all form inputs', () => {
    const nameInputRef = { current: { value: 'product' } };
    const priceInputRef = { current: { value: '555' } };
    const collectionInputRef = { current: { value: '26-03-2023' } };
    const categoryInputsRef = [
      { current: { checked: true } },
      { current: { checked: false } },
      { current: { checked: true } },
    ];
    const imageInputRef = { current: { value: 'image.jpg' } };

    resetForm(nameInputRef, priceInputRef, collectionInputRef, categoryInputsRef, imageInputRef);

    expect(nameInputRef.current.value).toBe('');
    expect(priceInputRef.current.value).toBe('');
    expect(collectionInputRef.current.value).toBe('');
    categoryInputsRef.forEach((input) => {
      expect(input.current.checked).toBe(false);
    });
    expect(imageInputRef.current.value).toBe('');
  });
});
