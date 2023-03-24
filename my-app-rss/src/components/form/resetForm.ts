export function resetForm(
  nameInput: React.RefObject<HTMLInputElement>,
  priceInput: React.RefObject<HTMLInputElement>,
  collectionInput: React.RefObject<HTMLInputElement>,
  categoryInputs: React.RefObject<HTMLInputElement>[],
  imageInput: React.RefObject<HTMLInputElement>
) {
  if (nameInput.current) {
    nameInput.current.value = '';
  }
  if (priceInput.current) {
    priceInput.current.value = '';
  }
  if (collectionInput.current) {
    collectionInput.current.value = '';
  }
  if (categoryInputs) {
    categoryInputs.forEach((input) => {
      if (input.current) {
        input.current.checked = false;
      }
    });
  }
  if (imageInput.current) {
    imageInput.current.value = '';
  }
}
