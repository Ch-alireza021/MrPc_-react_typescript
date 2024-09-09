import { ChangeEvent } from "react";
import { FormikHelpers, FormikProps } from "formik";
import { ValuesIF } from "./interface";
import { creatCat, creatSubCat } from "../../../../../../services";
import { ShowSnackbarType } from "../../../../../../hooks";

export const handleImageChange = (
  event: ChangeEvent<HTMLInputElement>,
  formik: FormikHelpers<ValuesIF> & FormikProps<ValuesIF>
) => {
  const fileList = event.target.files;
  if (fileList) {
    const imagesArray = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/")
    );
    if (imagesArray.length > 0) {
      formik.values.images?.forEach((i:File) => imagesArray.push(i));
      formik.setFieldValue("images", imagesArray);
    }
  }
};
export const handleThumbnailChange = (
  event: ChangeEvent<HTMLInputElement>,
  formik: FormikHelpers<ValuesIF>
) => {
  const fileList = event.target.files;
  if (fileList) {
    const imagesArray = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/")
    );
    if (imagesArray.length > 0) {
      formik.setFieldValue("thumbnail", imagesArray?.[0]);
    }
  }
};

export const handelCategory = async (
  values: ValuesIF,
  showSnackbar: ShowSnackbarType
) => {
  if (values?.category === "addNew" && values?.addCategory) {
    const category = await creatCat(values?.addCategory, showSnackbar);
    if (category) values.category = category;
    if (category !== "failed") delete values.addCategory;
    return category;
  } else {
    delete values.addCategory;
    return values?.category;
  }
};

export const handelsubcategory = async (
  values: ValuesIF,
  showSnackbar: ShowSnackbarType
) => {
  if (values?.subcategory === "addNew") {
    const subcategory = await creatSubCat(values, showSnackbar);
    if (subcategory) values.subcategory = subcategory;
    if (subcategory !== "failed") delete values.addCategory;
    delete values.addSubcategory;
    return subcategory;
  } else {
    delete values.addSubcategory;
    return values.subcategory;
  }
};
