import { ShowSnackbarType, SnackbarData } from "../../../../../../../hooks";
import { creatProduct } from "../../../../../../../services";
import { handelCategory, handelsubcategory } from "../helpers_functions";
import { ValuesIF } from "../interface";
export const handleFormikSubmite = async (
  values: ValuesIF,
  { resetForm }: { resetForm: () => void },
  showSnackbar:ShowSnackbarType
) => {
  const category = await handelCategory(values,showSnackbar);
  if (category === "failed") return;
  const subcategory = await handelsubcategory(values,showSnackbar);
  if (subcategory === "failed") return;
  const form_Data = new FormData();
  Object.entries(values)?.forEach(([key, value]) =>
    key === "images"
      ? value.forEach((image: File) => {
          form_Data.append(`images`, image);
        })
      : form_Data.append(key?.replace("productName", "name"), value)
  );
  const response = await creatProduct({ form_Data, showSnackbar });
  if (response !== "failed") resetForm();
};
