import React from 'react';
import { CarListForm } from '../components/cardListForm';
import { Form } from '../components/form/form';
import { FormInputData } from './../components/types';

interface FormState {
  formSubmissions: FormInputData[];
  showMessage: boolean;
}

export class FormPage extends React.Component<object, FormState> {
  constructor(props: object = {}) {
    super(props);
    this.state = {
      formSubmissions: [],
      showMessage: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.hideMessage = this.hideMessage.bind(this);
  }

  handleFormSubmit(formData: FormInputData) {
    this.setState({
      formSubmissions: [...this.state.formSubmissions, formData],
      showMessage: true,
    });

    window.setTimeout(() => {
      this.hideMessage();
    }, 5000);
  }

  hideMessage() {
    this.setState({
      showMessage: false,
    });
  }

  render() {
    return (
      <main className="form-main wrapper">
        <aside>
          <Form onFormSubmit={this.handleFormSubmit} />
          {this.state.showMessage && <div className="success-message">Data has been saved</div>}
        </aside>
        <section className="form-main__section">
          <CarListForm formSubmissions={this.state.formSubmissions} />
        </section>
      </main>
    );
  }
}
