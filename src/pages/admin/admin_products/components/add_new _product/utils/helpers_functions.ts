import { creatCat, creatSubCat } from "../../../../../../services";
import { URL_BACKEND_IMAGES } from "../../../../../../config";
import { downloadImages } from "../../../../../../features";
import { ShowSnackbarType } from "../../../../../../hooks";
import { FormikHelpers, FormikProps } from "formik";
import { ValuesIF } from "./interface";
import { ChangeEvent } from "react";

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
      formik.values.images?.forEach((i: File) => imagesArray.push(i));
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

export const getImage = async ({
  formik,
  data,
}: {
  formik: FormikHelpers<ValuesIF>;
  data: ValuesIF;
}) => {
  const imageUrls = data.addImages?.map(
    (image) => `${URL_BACKEND_IMAGES}/images/${image}`
  );
  const ThumbnailUrl = [
    `${URL_BACKEND_IMAGES}/thumbnails/${data.addThumbnail}`,
  ];
  try {
    const files = imageUrls ? await downloadImages(imageUrls) : [];
    const thumbnail = await downloadImages(ThumbnailUrl);
    formik.setFieldValue("images", files);
    formik.setFieldValue("thumbnail", thumbnail[0]);
  } catch (error) {
    console.error("Error downloading images:", error);
  }
};
