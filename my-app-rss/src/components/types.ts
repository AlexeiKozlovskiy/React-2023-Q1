export interface FormsData extends FormInputData, Partial<FormErrorData> {}

export interface FormErrorData {
  nameError: string;
  priceError: string;
  collectionError: string;
  colorError: string;
  availableColorsError: string;
  categoryError: string;
  imageError: string;
}

export interface FormInputData {
  id?: number | undefined;
  name?: string | undefined;
  price?: number | undefined;
  collection?: string | undefined;
  color?: string;
  availableColors?: string[];
  category?: string | undefined;
  image?: string | undefined;
}

export interface FormProps {
  formData?: FormInputData | null;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  collection: number | string;
  color: string;
  availableColors: string[];
  category: string;
  image: string;
}

export enum Color {
  BLACK = 'black',
  WHITE = 'white',
  GREEN = 'green',
  SILVER = 'silver',
  RED = 'red',
  GRAY = 'gray',
  ORANGE = 'orange',
}

export enum Category {
  TREE_DECORATIONS = 'Tree decorations',
  GARLAND_AND_WREATH = 'Garland & Wreath',
  DO_IT_YOURSELF = 'Do It Yourself',
}
