import { URL_CATEGORY, URL_SUBCATEGORY } from "../../../../../config";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { SelectOption } from "../../../admin_products/components";
import { styleTextField } from "../../../admin_products/utils";
import { GeneralButton } from "../../../../../theme";
import { useSnackbar } from "../../../../../hooks";
import { api } from "../../../../../services";
import { TextField } from "@mui/material";
import { useState } from "react";
import {
  eCOnError,
  eCOnSuccess,
  handleSubmitEditSubcategory,
  SbcategoryDataIF,
  SubategoryDataIF,
} from "../../utils";
// --------------------------------------------
// AESForm ==> admin edit subcategory form
export const AESForm = ({
  row,
  setOpen,
}: {
  row?: SbcategoryDataIF;
  setOpen: (arg0: boolean) => void;
}) => {
  const [formValues, setFormValues] = useState<SbcategoryDataIF>(
    row || { category: "", name: "", _id: "" }
  );
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const isEdit = !!row;
  const mutation = useMutation({
    mutationFn: ({ data, id }: { data: SubategoryDataIF; id: string | null }) =>
      id
        ? api.patch(`${URL_SUBCATEGORY}/${id}`, data)
        : api.post(URL_SUBCATEGORY, data),
    onSuccess: () =>
      eCOnSuccess({
        showSnackbar,
        setOpen,
        queryClient,
        isEdit,
        queryKey: "ACSubcategory",
      }),
    onError: (error) => eCOnError({ error, showSnackbar, isEdit }),
  });
  return (
    <>
      <TextField
        id={formValues._id as string}
        label="نام زیرمجموعه"
        defaultValue={formValues?.name}
        variant="outlined"
        type="text"
        sx={{ ...styleTextField }}
        onChange={(e) => {
          setFormValues((prev) => ({
            ...prev,
            name: e.target.value,
          }));
        }}
      />
      <SelectOption
        title=" دسته بندی"
        URL={`${URL_CATEGORY}?limit=1000`}
        responseData={URL_CATEGORY}
        showValue={formValues.category}
        addSubcategory={true}
        onChangeSelect={(value) => {
          setFormValues((pre) => ({ ...pre, category: value }));
        }}
      />
      <GeneralButton
        onClick={() =>
          handleSubmitEditSubcategory({ formValues, row, mutation })
        }
        text={"ذخیره"}
      />
    </>
  );
};
