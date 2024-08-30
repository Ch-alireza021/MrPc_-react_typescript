import { FormikProps } from "formik";

export interface ValuesIF {
  images: File[];
  thumbnail: File | null;
  productName: string | null;
  quantity: number | null;
  price: number | null;
  brand: string | null;
}

export type AAPTPropsData = {
  name: keyof ValuesIF;
  label: string;
  type: string;
};
export interface AAPTextfeildPropsIF {
  formik: FormikProps<ValuesIF>;
  data: { name: keyof ValuesIF; label: string; type: string };
}
