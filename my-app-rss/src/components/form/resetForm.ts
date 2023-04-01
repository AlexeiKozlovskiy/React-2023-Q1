// export function resetForm(
//   nameInput: React.RefObject<HTMLInputElement> | { current: { value: string } },
//   priceInput: React.RefObject<HTMLInputElement> | { current: { value: string } },
//   collectionInput: React.RefObject<HTMLInputElement> | { current: { value: string } },
//   categoryInputs: React.RefObject<HTMLInputElement>[] | { current: { checked: boolean } }[],
//   imageInput: React.RefObject<HTMLInputElement> | { current: { value: string } }
// ) {
//   if (nameInput.current) {
//     nameInput.current.value = '';
//   }
//   if (priceInput.current) {
//     priceInput.current.value = '';
//   }
//   if (collectionInput.current) {
//     collectionInput.current.value = '';
//   }
//   if (categoryInputs) {
//     categoryInputs.forEach((input) => {
//       if (input.current) {
//         input.current.checked = false;
//       }
//     });
//   }
//   if (imageInput.current) {
//     imageInput.current.value = '';
//   }
// }
