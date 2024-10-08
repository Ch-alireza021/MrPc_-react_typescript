import { FormikHelpers, FormikProps } from "formik";

export interface ValuesIF {
  images: File[];
  _id?: string;
  thumbnail: File | null;
  productName: string;
  quantity: number | "";
  price: number | "";
  brand: string;
  category: string;
  subcategory: string;
  addSubcategory?: string;
  addCategory?: string;
  description: string;
  addImages?: string[];
  addThumbnail?: string | null;
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

export interface AddSelectOptionDatasIF {
  title: string;
  URL: (category?: string) => string;
  responseData: string;
  showValue: "category" | "subcategory";
  onChange: (value: string, formik: FormikHelpers<ValuesIF>) => void;
  id: "addSubcategory" | "addCategory";
}
