import { URL_BACKEND_CATEGORIES_ICONS } from "../../../../config";
import { TableDetailsIF } from "../../admin_products/utils";
import { downloadImages } from "../../../../features";
import { SetStateAction } from "react";
import {
  CategoryIF,
  CategoryOrderBy,
  ECOnErrorIF,
  ECOnSuccessIF,
} from "./interface";
// ------------------------------------------------

export const handleRequestSort = (
  _event: React.MouseEvent<unknown>,
  property: CategoryOrderBy,
  orderBy: string,
  order: string,
  setTableDetails: { (value: SetStateAction<TableDetailsIF>): void }
) => {
  const isAsc = orderBy === property && order === "asc";
  setTableDetails((pre) => ({
    ...pre,
    order: isAsc ? "desc" : "asc",
    orderBy: property,
  }));
};
interface GetIconIF {
  formValues: CategoryIF;
  setFormValues: (value: SetStateAction<CategoryIF>) => void;
}

export const getIcon = async ({ formValues, setFormValues }: GetIconIF) => {
  const iconURL = [`${URL_BACKEND_CATEGORIES_ICONS}/${formValues.icon}`];
  try {
    const icon = await downloadImages(iconURL);
    if (icon?.[0]) {
      setFormValues((pre) => ({ ...pre, icon: icon[0] as string | File }));
    }
  } catch (error) {
    console.error("Error downloading images:", error);
  }
};

// ------------------------------------------------
// AECForm ==> admin edit category form
// ------------------------------------------------

export const eCOnSuccess = ({
  showSnackbar,
  setOpen,
  queryClient,
  isEdit,
}: ECOnSuccessIF) => {
  queryClient.invalidateQueries({
    queryKey: ["ACCategory"],
  });
  setOpen(false);
  showSnackbar({
    message: `محصول با موفقیت ${isEdit ? "ویرایش شد" : "اضافه شد"}`,
    severity: "success",
    key: Math.random(),
  });
};

// eCOnError
// ------------
export const eCOnError = ({ error, showSnackbar, isEdit }: ECOnErrorIF) => {
  const errorMessage =
    (error as any)?.response?.status === 409
      ? "این کتگوری تکراری است"
      : `خطا در ${isEdit ? "ویرایش" : "اضافه کردن"}  محصول`;

  showSnackbar({
    message: errorMessage,
    severity: "error",
    key: Math.random(),
  });
};

// handleSubmitEditCat
// ----------------------
export const handleSubmitEditCat = ({
  formValues,
  row,
  mutation,
}: {
  formValues: CategoryIF;
  row?: CategoryIF;
  mutation: {
    mutate: ({ form_Data, id }: { form_Data: any; id: string }) => void;
  };
}) => {
  const dataArr: (keyof CategoryIF)[] = ["name", "icon"];
  const form_Data = new FormData();
  dataArr.forEach((field) => {
    const value = formValues[field];
    if (value instanceof File) {
      form_Data.append(field, value);
    } else if (value !== undefined) {
      form_Data.append(field, String(value));
    }
  });
  const id = row ? (row as any)._id : null;
  mutation.mutate({ form_Data, id });
};
