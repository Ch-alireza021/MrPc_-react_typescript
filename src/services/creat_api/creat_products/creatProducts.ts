import { URL_PRODUCT } from "../../../config";
import { api } from "../../interceptors";

export const creatProduct = async ({
  form_Data,
}: {
  form_Data: FormData;
}): Promise<string> => {
  try {
    const response = await api.post(URL_PRODUCT, form_Data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response?.status === 201) {
      console.log("Product added successfully!", response);
      return "done";
    } else {
        console.log({response})
        return "failed"};
  } catch (error) {
    console.error("Error adding product");
    return "failed";
  }
};
