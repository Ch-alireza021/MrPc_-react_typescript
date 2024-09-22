import { useQueryClient, useMutation } from "@tanstack/react-query";
import { URL_CATEGORY, URL_SUBCATEGORY } from "../../../../../config";
import { api } from "../../../../../services";
import { SelectOption } from "../../../admin_products/components";
import { styleTextField } from "../../../admin_products/utils";
import {
  eCOnError,
  eCOnSuccess,
  handleSubmitEditSubcategory,
  SbcategoryDataIF,
  SubategoryDataIF,
} from "../../utils";
import { alpha, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "../../../../../hooks";

export const AESForm = ({
  row,
  setOpen,
}: {
  row: SbcategoryDataIF;
  setOpen: (arg0: boolean) => void;
}) => {
  const [formValues, setFormValues] = useState<SbcategoryDataIF>(row);
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const isEdit = !!row;
  const mutation = useMutation({
    mutationFn: ({ data, id }: { data: SubategoryDataIF; id: string | null }) =>
      // mutationFn: ({ form_Data, id }: { form_Data: any; id: string | null }) =>
      id
        ? api.patch(`${URL_SUBCATEGORY}/${id}`, data)
        : api.post(URL_SUBCATEGORY, formValues),
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
      <Button
        variant="contained"
        color="success"
        sx={{
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
          color: "text.secondary",
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }}
        onClick={() =>
          handleSubmitEditSubcategory({ formValues, row, mutation })
        }
      >
        ذخیره
      </Button>
    </>
  );
};
