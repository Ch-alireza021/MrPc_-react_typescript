import { URL_PRODUCT } from "../../../config";
import { ShowSnackbarType } from "../../../hooks";
import { api } from "../../interceptors";

export const creatProduct = async ({
  form_Data,
  showSnackbar,
}: {
  form_Data: FormData;
  showSnackbar: ShowSnackbarType;
}): Promise<string> => {
  try {
    const response = await api.post(URL_PRODUCT, form_Data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response?.status === 201) {
      showSnackbar({
        message: "محصول با موفقیت اضافه شد",
        severity: "success",
        key: Math.random(),
      });
      return "done";
    } else {
      showSnackbar({
        message: "خطا در اضافه کردن محصول",
        severity: "error",
        key: Math.random(),
      });
      return "failed";
    }
  } catch (error) {
    console.error("Error adding product");
    showSnackbar({
      message: "خطا در اضافه کردن محصول",
      severity: "error",
      key: Math.random(),
    });
    return "failed";
  }
};
