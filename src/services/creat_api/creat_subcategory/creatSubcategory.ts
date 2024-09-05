import { ShowSnackbarType } from "../../../hooks";
import { ValuesIF } from "../../../pages/admin/admin_products/components";
import { api } from "../../interceptors";

export const creatSubCat = async (
  values: ValuesIF,
  showSnackbar: ShowSnackbarType
): Promise<string> => {
  try {
    const resSubCat = await api.post("subcategories", {
      category: values.category,
      name: values.addSubcategory,
    });

    if (resSubCat.status === 201) {
      showSnackbar({
        message: " زیرمجموعه با موفقیت اضافه شد",
        severity: "success",
        key: Math.random(),
      });
      return resSubCat.data.data.subcategory._id;
    } else {
      showSnackbar({
        message: "خطا در اضافه کردن  زیرمجموعه",
        severity: "error",
        key: Math.random(),
      });
      return "failed";
    }
  } catch (error) {
    showSnackbar({
      message: "خطا در اضافه کردن  زیرمجموعه",
      severity: "error",
      key: Math.random(),
    });
    console.error("Error adding category:", error);
    return "failed";
  }
};
