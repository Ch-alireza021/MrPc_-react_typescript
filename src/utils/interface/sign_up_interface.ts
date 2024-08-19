import { FormikProps } from "formik";

export interface IInput {
  children: React.ReactNode;
  text: React.ReactNode;
  color: boolean;
}

export interface MyFormsValues {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  address: string;
}
export interface InputIF {
  formik: FormikProps<any>;
  label: string;
  name: string;
  type: string;
}
export interface PasswordSignUpIF {
  formik: FormikProps<any>;
  label: string;
  name: string;
  type: string;
  isShowPassword:{[key:string]:boolean}
  setIsShowPassword:(prev: { name: any; })=>void
}
