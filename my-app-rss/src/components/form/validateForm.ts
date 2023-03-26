import { FormInputData } from '../types';
import { FormErrorData } from '../types';

export function validateFormData(formData: FormInputData) {
  const errors: FormErrorData = {
    nameError: '',
    priceError: '',
    collectionError: '',
    colorError: '',
    availableColorsError: '',
    categoryError: '',
    imageError: '',
  };
  let hasError = false;

  if (!formData.name?.trim() || !/^[a-zA-Z]{3,}$/.test(formData.name)) {
    errors.nameError = 'Please enter a name';
    hasError = true;
  }
  if (!formData.price || formData.price < 0) {
    errors.priceError = 'Please enter a price';
    hasError = true;
  }
  if (!formData.collection) {
    errors.collectionError = 'Please enter a collection';
    hasError = true;
  }
  if (!formData.color) {
    errors.colorError = 'Please select a color';
    hasError = true;
  }
  if (formData.availableColors) {
    if (formData.availableColors.length === 0) {
      errors.availableColorsError = 'Please select available colors';
      hasError = true;
    }
  }
  if (!formData.category) {
    errors.categoryError = 'Please select a category';
    hasError = true;
  }
  if (!formData.image) {
    errors.imageError = 'Please add image';
    hasError = true;
  }

  return { errors, hasError };
}
