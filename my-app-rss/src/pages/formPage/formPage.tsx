import React, { useState, useRef } from 'react';
import { CarListForm } from '../../components/cardForm/cardListForm';
import { Form } from '../../components/form/form';
import { StateReducerProps } from '../../components/types';
import { useSelector } from 'react-redux';

export function FormPage() {
  const forms = useSelector((state: StateReducerProps) => state.form);
  const [formSuccessMessage, setFormSuccessMessage] = useState(false);
  const timeoutId = useRef<number>();
  const handleFormSubmit = () => {
    setFormSuccessMessage(true);
    if (timeoutId) {
      window.clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(() => {
      setFormSuccessMessage(false);
    }, 5000);
  };

  return (
    <main className="form-main wrapper">
      <aside>
        <Form onFormSubmit={handleFormSubmit} />
        {formSuccessMessage && <div className="success-message">Data has been saved</div>}
      </aside>
      <section className="form-main__section">
        <CarListForm formSubmissions={forms} />
      </section>
    </main>
  );
}
