import { useMutation, useQueryClient } from "@tanstack/react-query";
import { styleTextField } from "../../../admin_products/utils";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { alpha, Button, TextField } from "@mui/material";
import { URL_CATEGORY } from "../../../../../config";
import { useSnackbar } from "../../../../../hooks";
import { api } from "../../../../../services";
import { AddIcon } from "./add_icon/AddIcon";
import { useState } from "react";
import {
  AECFormIF,
  CategoryIF,
  eCOnError,
  eCOnSuccess,
  handleSubmitEditCat,
} from "../../utils";

const defaultRow: CategoryIF = {
  icon: "",
  name: "",
  _id: "",
  createdAt: "",
};
// ------------------------------------------
// AECForm ==> admin edit category form
export const AECForm = ({ data, row, setOpen }: AECFormIF) => {
  const { showSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState<CategoryIF>(row || defaultRow);
  const queryClient = useQueryClient();
  const isEdit = !!row;
  const mutation = useMutation({
    mutationFn: ({ form_Data, id }: { form_Data: any; id: string | null }) =>
      id
        ? api.patch(`${URL_CATEGORY}/${id}`, form_Data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        : api.post(URL_CATEGORY, form_Data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }),
    onSuccess: () => eCOnSuccess({ showSnackbar, setOpen, queryClient, isEdit }),
    onError: (error) => eCOnError({ error, showSnackbar, isEdit }),
  });

  return (
    <>
      {data?.map((field) => {
        return (
          <TextField
            key={field.id as string}
            id={field.id as string}
            label={field.label}
            defaultValue={String(formValues[field.id])}
            variant="outlined"
            type="text"
            sx={{ ...styleTextField }}
            onChange={(e) => {
              setFormValues((prev) => ({
                ...prev,
                [field.id]: e.target.value,
              }));
            }}
          />
        );
      })}
      <AddIcon {...{ formValues, setFormValues }} />
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
        onClick={() => handleSubmitEditCat({ formValues, row, mutation })}
        endIcon={<VisibilityIcon />}
      >
        ذخیره
      </Button>
    </>
  );
};
