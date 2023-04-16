import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './form';
import { FormPage } from '../../pages/formPage/formPage';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from './../store';

describe('Form page', () => {
  const mockOnFormSubmit = jest.fn();
  it('render form page components', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    render(
      <Provider store={store}>
        <Form onFormSubmit={mockOnFormSubmit} />
      </Provider>
    );
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Collection/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Available/i)[0]).toBeInTheDocument();
    expect(screen.queryAllByText(/Category/i)[0]).toBeInTheDocument();
    expect(screen.getByLabelText(/Image/i)).toBeInTheDocument();
  });

  it('empty input errors mesage', async () => {
    render(
      <Provider store={store}>
        <Form onFormSubmit={mockOnFormSubmit} />
      </Provider>
    );
    const submitButton = screen.getByText(/submit/i);
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(screen.getByText('Please enter name')).toBeInTheDocument();
    expect(screen.getByText('Please enter price')).toBeInTheDocument();
    expect(screen.getByText('Please enter collectiond')).toBeInTheDocument();
    expect(screen.getByText('Please select color')).toBeInTheDocument();
    expect(screen.getByText('Please select available colors')).toBeInTheDocument();
    expect(screen.getByText('Please enter category')).toBeInTheDocument();
  });

  it('input name verification', async () => {
    render(
      <Provider store={store}>
        <Form onFormSubmit={mockOnFormSubmit} />
      </Provider>
    );
    const nameInput = screen.getByLabelText(/name/i);
    const submitButton = screen.getByText(/submit/i);

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: '4444' } });
      fireEvent.click(submitButton);
    });
    expect(screen.getByText('Name should be letters (A-z, А-я)')).toBeInTheDocument();
  });

  it('input price verification', async () => {
    render(
      <Provider store={store}>
        <Form onFormSubmit={mockOnFormSubmit} />
      </Provider>
    );
    const namePrice = screen.getByLabelText(/price/i);
    const submitButton = screen.getByText(/submit/i);

    await act(async () => {
      fireEvent.change(namePrice, { target: { value: '-1000' } });
      fireEvent.click(submitButton);
    });
    expect(screen.getByText('Price should be >= 0')).toBeInTheDocument();
  });

  it('inputs success data, and clearing inputs', async () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const nameInput = screen.getByTestId('name-input');
    const namePrice = screen.getByTestId('price-input');
    const collectionInput = screen.getByTestId('collection-input');
    const colorSelect = screen.getByTestId('color-select-input');
    const colorCheckbox = screen.getByTestId('color-checkbox-input-red');
    const categoryRadio = screen.getByTestId('category-input-tree-decorations');
    const imageInput = screen.getByTestId('image-input');
    const submitButton = screen.getByTestId('btn-submit');

    global.URL.createObjectURL = jest.fn();
    global.alert = jest.fn();
    const file = new File(['test'], 'test.png', { type: 'image/png' });

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'RubRod' } });
      fireEvent.change(namePrice, { target: { value: 555 } });
      fireEvent.change(collectionInput, { target: { value: '2023-04-04' } });
      fireEvent.change(colorSelect, { target: { value: 'black' } });
      fireEvent.click(colorCheckbox);
      fireEvent.click(categoryRadio);
      userEvent.upload(imageInput, file);
      fireEvent.click(submitButton);
    });

    expect(screen.getByText(/Data has been saved/i)).toBeInTheDocument();
  });
});
