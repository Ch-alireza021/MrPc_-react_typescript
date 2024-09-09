import { URL_PRODUCT } from "../../../config";
import { ShowSnackbarType } from "../../../hooks";
import { api } from "../../interceptors";

export const editProduct = async ({
  form_Data,
  showSnackbar,
  id
}: {
  form_Data: FormData;
  id:string
  showSnackbar: ShowSnackbarType;
}): Promise<string> => {
  try {
    const response = await api.patch(`${URL_PRODUCT}/${id}`,form_Data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          console.log({response})
    if (response?.statusText === "OK") {
      showSnackbar({
        message: "محصول با موفقیت ویرایش شد",
        severity: "success",
        key: Math.random(),
      });
      return "done";
    } else {
      showSnackbar({
        message: "خطا در ویرایش  محصول",
        severity: "error",
        key: Math.random(),
      });
      return "failed";
    }
  } catch (error) {
    console.error("Error adding product");
    showSnackbar({
      message: "خطا در ویرایش  محصول",
      severity: "error",
      key: Math.random(),
    });
    return "failed";
  }
};

