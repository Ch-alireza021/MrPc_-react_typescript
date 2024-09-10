import { ShowSnackbarType } from "../../../hooks";
import { api } from "../../interceptors";

export const creatCat = async (
  categoryName: string,
  showSnackbar: ShowSnackbarType
) => {
  try {
    const resCat = await api.post("/categories", {
      name: categoryName,
    });
    if (resCat.status === 201) {
      showSnackbar({
        message: "دسته بندی با موفقیت اضافه شد",
        severity: "success",
        key: Math.random(),
      });

      return resCat?.data?.data?.category?._id;
    } else {
      showSnackbar({
        message: "خطا در اضافه کردن دسته بندی",
        severity: "error",
        key: Math.random(),
      });
      return "failed";
    }
  } catch (error) {
    console.error("Error adding category:", error);
    showSnackbar({
      message: "خطا در اضافه کردن دسته بندی",
      severity: "error",
      key: Math.random(),
    });

    return "failed";
  }
};
