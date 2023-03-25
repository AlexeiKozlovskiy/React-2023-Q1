import React from 'react';
import { createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './form';
import { ErrorMessage } from './formErrorMessage';
import { BrowserRouter } from 'react-router-dom';
import { resetForm } from './resetForm';
import { validateFormData } from './validateForm';

describe('Form', () => {
  const onFormSubmit = jest.fn();
  const mockOnFormSubmit = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    render(<Form onFormSubmit={mockOnFormSubmit} />);
  });

  it('render inputs form', () => {
    render(<Form onFormSubmit={onFormSubmit} />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Collection/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/Available/i)).toBeInTheDocument();
    // expect(screen.getByText(/Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Image/i)).toBeInTheDocument();
  });

  it('render error message', () => {
    render(
      <BrowserRouter>
        <ErrorMessage message={'Please select a color'} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Please/i)).toBeInTheDocument();
  });

  it('return error message when some fields are invalid', () => {
    const formData = {
      name: '   ',
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
});
