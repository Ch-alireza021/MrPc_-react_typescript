import { ChangeEvent } from "react";
import { FormikHelpers } from "formik";
import { ValuesIF } from "./interface";

export const handleImageChange = (
  event: ChangeEvent<HTMLInputElement>,
  formik: FormikHelpers<ValuesIF>
) => {
  const fileList = event.target.files;
  if (fileList) {
    const imagesArray = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/")
    );
    if (imagesArray.length > 0) {
      formik.setFieldValue("images", imagesArray);
    }
  }
};