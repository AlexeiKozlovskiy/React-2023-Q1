import React from 'react';
import { FormInputData } from '../types';
import { Color } from '../types';
import { Category } from '../types';
import { FormsData } from '../types';
import { validateFormData } from './validateForm';

interface FormSubmitProps {
  onFormSubmit: (formData: FormInputData) => void;
}

export class Form extends React.Component<FormSubmitProps, FormsData> {
  nameInput: React.RefObject<HTMLInputElement>;
  priceInput: React.RefObject<HTMLInputElement>;
  collectionInput: React.RefObject<HTMLInputElement>;
  categoryInputs: React.RefObject<HTMLInputElement>[];
  imageInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormSubmitProps) {
    super(props);
    this.state = {
      availableColors: [],
    };
    this.imageInput = React.createRef();
    this.nameInput = React.createRef();
    this.priceInput = React.createRef();
    this.collectionInput = React.createRef();
    this.categoryInputs = [];
    for (let i = 0; i < Object.values(Category).length; i++) {
      this.categoryInputs[i] = React.createRef();
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleAvailableColorsChange = this.handleAvailableColorsChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      name: this.nameInput.current?.value.trim(),
      price: parseInt(this.priceInput.current?.value || ''),
      collection: this.collectionInput.current?.value,
      color: this.state.color,
      availableColors: this.state.availableColors,
      category: this.state.category,
      image: this.state.image,
    };

    const { errors, hasError } = validateFormData(formData);
    if (hasError) {
      this.setState({
        nameError: errors.nameError,
        priceError: errors.priceError,
        collectionError: errors.collectionError,
        colorError: errors.colorError,
        availableColorsError: errors.availableColorsError,
        categoryError: errors.categoryError,
        imageError: errors.imageError,
      });
      return;
    }

    this.props.onFormSubmit(formData);
  }

  handleColorChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ color: event.target.value });
  }

  handleAvailableColorsChange(event: React.ChangeEvent<HTMLInputElement>) {
    const checkedColor = event.target.value;
    this.setState((prevState) => ({
      availableColors: prevState.availableColors!.includes(checkedColor)
        ? prevState.availableColors!.filter((availableColors) => availableColors !== checkedColor)
        : [...prevState.availableColors!, checkedColor],
    }));
  }

  handleCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ category: event.target.value });
  }

  handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({ image: reader.result as string });
      };
    }
  }

  render() {
    const colorOptions = Object.values(Color);
    const categoryOptions = Object.values(Category);
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="input__container">
            <label htmlFor="nameInput">Name</label>
            <input type="text" id="nameInput" ref={this.nameInput} />
          </div>

          <div className="input__container">
            <label htmlFor="collectionInput">Price</label>
            <input type="number" id="collectionInput" ref={this.priceInput} />
          </div>

          <div className="input__container">
            <label htmlFor="dateInput">Collection</label>
            <input type="date" id="dateInput" ref={this.collectionInput} />
          </div>

          <div className="input__container">
            <label htmlFor="colorSelect">Color</label>
            <select id="colorSelect" value={this.state.color} onChange={this.handleColorChange}>
              <option value="">Select color</option>
              {colorOptions.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="input__container input__allColors">
            <label>All available colors:</label>
            {colorOptions.map((availableColors, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`colorCheckbox-${availableColors}`}
                  name="availableColors"
                  value={availableColors}
                  checked={this.state.availableColors!.includes(availableColors)}
                  onChange={this.handleAvailableColorsChange}
                />
                <label
                  className="input__label-checkbox"
                  htmlFor={`colorCheckbox-${availableColors}`}
                >
                  {availableColors}
                </label>
              </div>
            ))}
          </div>

          <div className="input__container input__category">
            <label>Category:</label>
            {categoryOptions.map((category, index) => (
              <div key={category}>
                <input
                  type="radio"
                  id={`category-${category.toLowerCase().replace(' ', '-')}`}
                  name="category"
                  value={category}
                  onChange={this.handleCategoryChange}
                  ref={this.categoryInputs[index]}
                />
                <label
                  className="input__label-radio"
                  htmlFor={`category-${category.toLowerCase().replace(' ', '-')}`}
                >
                  {category}
                </label>
              </div>
            ))}
          </div>

          <div className="input__container">
            <label htmlFor="imageInput">Image</label>
            <input
              className="input__file"
              type="file"
              id="imageInput"
              onChange={this.handleImageChange}
              ref={this.imageInput}
            />
          </div>
          <input className="input__btn" type="submit" />
        </form>
      </div>
    );
  }
}
