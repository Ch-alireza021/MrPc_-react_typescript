import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  productName: Yup.string().required("پر کردن این فیلد الزامیست"),
});
