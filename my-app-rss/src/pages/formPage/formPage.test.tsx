// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { Form } from './../../components/form/form';
// import { FormPage } from '../../pages/formPage/formPage';

// describe('Form page', () => {
//   const mockOnFormSubmit = jest.fn();
//   it('render form page components', () => {
//     render(<FormPage />);
//     render(<Form onFormSubmit={mockOnFormSubmit} />);
//     expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Collection/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();
//     expect(screen.queryAllByText(/Available/i)[0]).toBeInTheDocument();
//     expect(screen.queryAllByText(/Category/i)[0]).toBeInTheDocument();
//     expect(screen.getByLabelText(/Image/i)).toBeInTheDocument();
//   });
// });
