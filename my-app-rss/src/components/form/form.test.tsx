// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Form } from './form';
// import { act } from 'react-dom/test-utils';

// describe('Form page', () => {
//   const mockOnFormSubmit = jest.fn();
//   it('empty input errors mesage', async () => {
//     render(<Form onFormSubmit={mockOnFormSubmit} />);
//     const submitButton = screen.getByText(/submit/i);

//     await act(async () => {
//       fireEvent.click(submitButton);
//     });

//     expect(screen.getByText('Please enter name')).toBeInTheDocument();
//     expect(screen.getByText('Please enter price')).toBeInTheDocument();
//     expect(screen.getByText('Please enter collectiond')).toBeInTheDocument();
//     expect(screen.getByText('Please select color')).toBeInTheDocument();
//     expect(screen.getByText('Please select available colors')).toBeInTheDocument();
//     expect(screen.getByText('Please enter category')).toBeInTheDocument();
//     expect(screen.getByText('Please add image')).toBeInTheDocument();
//   });

//   it('input name verification', async () => {
//     render(<Form onFormSubmit={mockOnFormSubmit} />);
//     const nameInput = screen.getByLabelText(/name/i);
//     const submitButton = screen.getByText(/submit/i);

//     await act(async () => {
//       fireEvent.change(nameInput, { target: { value: '4444' } });
//       fireEvent.click(submitButton);
//     });
//     expect(screen.getByText('Name should be letters (A-z, А-я)')).toBeInTheDocument();
//   });

//   it('input price verification', async () => {
//     render(<Form onFormSubmit={mockOnFormSubmit} />);
//     const namePrice = screen.getByLabelText(/price/i);
//     const submitButton = screen.getByText(/submit/i);

//     await act(async () => {
//       fireEvent.change(namePrice, { target: { value: '-1000' } });
//       fireEvent.click(submitButton);
//     });
//     expect(screen.getByText('Price should be >= 0')).toBeInTheDocument();
//   });

//   it('inputs success data, and clearing inputs', async () => {
//     render(<Form onFormSubmit={mockOnFormSubmit} />);
//     const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
//     const namePrice = screen.getByLabelText(/price/i) as HTMLInputElement;
//     const collectionInput = screen.getByLabelText(/collection/i) as HTMLInputElement;
//     const colorSelect = screen.getByLabelText(/color/i);
//     const colorCheckbox = screen.getByLabelText(/black/i) as HTMLInputElement;
//     const categoryRadio = screen.getByLabelText(/Tree/i) as HTMLInputElement;
//     const imageInput = screen.getByLabelText(/image/i) as HTMLInputElement;
//     const submitButton = screen.getByRole('button', { name: 'Submit' });

//     await act(async () => {
//       fireEvent.change(nameInput, { current: { value: 'Rubi Rod' } });
//       fireEvent.change(namePrice, { current: { value: '555' } });
//       fireEvent.change(collectionInput, { current: { value: '31-04-2023' } });
//       fireEvent.change(colorSelect, { current: { value: 'black' } });
//       fireEvent.click(colorCheckbox);
//       fireEvent.click(categoryRadio);
//       fireEvent.change(imageInput, {
//         target: { files: [new File([''], 'image.svg')] },
//       });
//       fireEvent.click(submitButton);
//     });

//     expect(nameInput.value).toBe('');
//     expect(namePrice.value).toBe('');
//     expect(collectionInput.value).toBe('');
//     expect(imageInput.value).toBe('');
//   });
// });
