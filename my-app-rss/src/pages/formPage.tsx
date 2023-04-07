import React, { useState } from 'react';
import { CarListForm } from '../components/card/cardListForm';
import { Form } from '../components/form/form';
import { FormInputData } from './../components/types';

interface FormState {
  formSubmissions: FormInputData[];
  showMessage: boolean;
}

export function FormPage() {
  const [formState, setFormState] = useState<FormState>({
    formSubmissions: [],
    showMessage: false,
  });

  const handleFormSubmit = (formData: FormInputData) => {
    setFormState({
      formSubmissions: [...formState.formSubmissions, formData],
      showMessage: true,
    });
    window.setTimeout(() => {
      hideMessage();
    }, 5000);
  };

  const hideMessage = () => {
    setFormState((prevState) => ({
      ...prevState,
      showMessage: false,
    }));
  };

  return (
    <main className="form-main wrapper">
      <aside>
        <Form onFormSubmit={handleFormSubmit} />
        {formState.showMessage && <div className="success-message">Data has been saved</div>}
      </aside>
      <section className="form-main__section">
        <CarListForm formSubmissions={formState.formSubmissions} />
      </section>
    </main>
  );
}
