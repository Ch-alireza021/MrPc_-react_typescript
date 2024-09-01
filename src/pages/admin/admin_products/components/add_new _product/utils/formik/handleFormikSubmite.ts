import { creatProduct } from "../../../../../../../services";
import { handelCategory, handelsubcategory } from "../helpers_functions";
import { ValuesIF } from "../interface";
export const handleFormikSubmite = async (values: ValuesIF, { resetForm }: { resetForm: () => void }) => {
  const category = await handelCategory(values);
  if (category === "failed") return;
  const subcategory = await handelsubcategory(values);
  if (subcategory === "failed") return;
  const form_Data = new FormData();
  Object.entries(values)?.forEach(([key, value]) =>
    key === "images"
      ? value.forEach((image: File) => {
          form_Data.append(`images`, image);
        })
      : form_Data.append(key?.replace('productName','name'), value)
  );
  for (const [key, value] of form_Data.entries()) {
    console.log(`${key}: ${value}`);
  }
  const response = await creatProduct({ form_Data });
  console.log({response})
  if (response!== 'failed') resetForm();
};
