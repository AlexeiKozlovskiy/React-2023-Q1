import './form.scss';
import React, { useState } from 'react';
import { FormInputData } from '../types';
import { Color } from '../types';
import { Category } from '../types';
import { ErrorMessage } from './formErrorMessage';
import { useForm } from 'react-hook-form';

interface FormSubmitProps {
  onFormSubmit: (formData: FormInputData) => void;
}

export function Form(props: FormSubmitProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputData>();
  const [imageData, setImageData] = useState('');

  const onSubmit = (data: FormInputData) => {
    const idDate = Date.now();
    props.onFormSubmit({ ...data, id: idDate, image: imageData });
    reset();
    setImageData('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageData(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const colorOptions = Object.values(Color);
  const categoryOptions = Object.values(Category);

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input__container input__name-container">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            id="nameInput"
            {...register('name', { required: true, pattern: /^[a-zA-Zа-яА-Я\s]+$/i })}
          />
          {errors.name?.type === 'required' && <ErrorMessage message="Please enter name" />}
          {errors.name?.type === 'pattern' && (
            <ErrorMessage message="Name should be letters (A-z)" />
          )}
        </div>

        <div className="input__container input__price-container">
          <label htmlFor="priceInput">Price</label>
          <input type="number" id="priceInput" {...register('price', { required: true, min: 0 })} />
          {errors.price?.type === 'required' && <ErrorMessage message="Please enter price" />}
          {errors.price?.type === 'min' && (
            <ErrorMessage message="Price should be greater than or equal to 0" />
          )}
        </div>

        <div className="input__container input__collection-container">
          <label htmlFor="dateInput">Collection</label>
          <input type="date" id="dateInput" {...register('collection', { required: true })} />
          {errors.collection && <ErrorMessage message="Please enter collectiond" />}
        </div>

        <div className="input__container input__color-container">
          <label htmlFor="colorSelect">Color</label>
          <select id="colorSelect" {...register('color', { required: true })}>
            <option value="">Select color</option>
            {colorOptions.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
          {errors.color && <ErrorMessage message="Please select color" />}
        </div>

        <div className="input__container input__allColors-container">
          <div>All available colors:</div>
          {colorOptions.map((availableColors, index) => (
            <div key={index}>
              <input
                {...register('availableColors', { required: true })}
                type="checkbox"
                id={`colorCheckbox-${availableColors}`}
                name="availableColors"
                value={availableColors}
              />
              <label className="input__label-checkbox" htmlFor={`colorCheckbox-${availableColors}`}>
                {availableColors}
              </label>
            </div>
          ))}
          {errors.availableColors && <ErrorMessage message="Please select available colors" />}
        </div>

        <div className="input__container input__category-container">
          <div>Category:</div>
          {categoryOptions.map((category) => (
            <div key={category}>
              <input
                {...register('category', { required: true })}
                type="radio"
                id={`category-${category.toLowerCase().replace(' ', '-')}`}
                data-testid={`${category.toLowerCase().replace(' ', '-')}`}
                name="category"
                value={category}
              />
              <label
                className="input__label-radio"
                htmlFor={`category-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </label>
            </div>
          ))}
          {errors.category && <ErrorMessage message="Please enter category" />}
        </div>

        <div className="input__container input__image-container">
          <label htmlFor="imageInput">Image</label>
          <input
            {...register('image', { required: true, onChange: handleImageChange })}
            className="input__file"
            type="file"
            id="imageInput"
            accept="image/*"
          />
          {errors.image && <ErrorMessage message="Please add image" />}
        </div>
        <button className="input__btn">Submit</button>
      </form>
    </div>
  );
}
