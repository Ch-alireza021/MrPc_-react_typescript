import { ChangeEvent } from "react";
import { FormikValues, FormikHelpers } from "formik";

export const handleImageChange = (
  event: ChangeEvent<HTMLInputElement>,
  formik: FormikHelpers<FormikValues>
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
