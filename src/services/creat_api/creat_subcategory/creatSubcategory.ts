

import { ValuesIF } from "../../../pages/admin/admin_products/components";
import { api } from "../../interceptors";

export const creatSubCat = async (values: ValuesIF): Promise<string> => {
  try {
    const resSubCat = await api.post("subcategories", {
      category: values.category,
      name: values.addSubcategory,
    });

    if (resSubCat.status === 201) {
      console.log("SubCategory added successfully!");
      return resSubCat.data.data.subcategory._id; 
    } else {
      console.log("Failed to add Subcategory");
      return 'failed';
    }
  } catch (error) {
    console.error("Error adding category:", error);
    return 'failed';
  }
};
