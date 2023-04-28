import { render, screen } from '@testing-library/react';
import { Form } from './../../components/form/form';
import { FormPage } from '../../pages/formPage/formPage';
import { Provider } from 'react-redux';
import { store } from './../../components/store';
import { vi } from 'vitest';

describe('Form page', () => {
  const mockOnFormSubmit = vi.fn();

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
});
