import { ShowSnackbarType } from "../../../../../../../hooks";
import { creatProduct, editProduct } from "../../../../../../../services";
import { SelectHeader } from "../../../../utils";
import { handelCategory, handelsubcategory } from "../helpers_functions";
import { ValuesIF } from "../interface";
export const handleFormikSubmite = async (
  values: ValuesIF,
  { resetForm }: { resetForm: () => void },
  showSnackbar: ShowSnackbarType,
  doneEditing: () => void,
  setSelectComp: (arg0: SelectHeader) => void
) => {
  console.log({ values });
  const category = await handelCategory(values, showSnackbar);
  if (category === "failed") return;
  const subcategory = await handelsubcategory(values, showSnackbar);
  if (subcategory === "failed") return;
  const id = values._id;
  if (id) delete values._id;
  delete values.addImages;
  delete values.addThumbnail;

  const form_Data = new FormData();
  Object.entries(values)?.forEach(([key, value]) =>
    key === "images"
      ? value.forEach((image: File) => {
          form_Data.append(`images`, image);
        })
      : form_Data.append(key?.replace("productName", "name"), value)
  );
  if (id) {
    const response = await editProduct({ form_Data, showSnackbar, id });
    if (response !== "failed") {
      resetForm();
      doneEditing();
      setSelectComp("table");
    }
  } else {
    const response = await creatProduct({ form_Data, showSnackbar });
    if (response !== "failed") resetForm();
  }
};
