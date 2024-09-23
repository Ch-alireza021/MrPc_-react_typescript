import { URL_BACKEND_CATEGORIES_ICONS, URL_PRODUCT } from "../../../../config";
import { TableDetailsIF } from "../../admin_products/utils";
import { downloadImages } from "../../../../features";
import { ShowSnackbarType } from "../../../../hooks";
import { generalGet } from "../../../../services";
import { SetStateAction } from "react";
import {
  CategoryIF,
  CategoryOrderBy,
  DCASSuccessIF,
  ECOnErrorIF,
  ECOnSuccessIF,
  HDDComponentIF,
  SbcategoryDataIF,
  SubategoryDataIF,
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
  queryKey,
}: ECOnSuccessIF) => {
  queryClient.invalidateQueries({
    queryKey: [queryKey],
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
// handleSubmitEditSubcategory
// ----------------------
export const handleSubmitEditSubcategory = ({
  formValues,
  row,
  mutation,
}: {
  formValues: SbcategoryDataIF;
  row?: SbcategoryDataIF;
  mutation: {
    mutate: ({ data, id }: { data: SubategoryDataIF; id: string }) => void;
  };
}) => {
  const dataArr: (keyof SbcategoryDataIF)[] = ["name", "category"];
  const data: SubategoryDataIF = Object.fromEntries(
    dataArr.map((i) => [[i], formValues[i]])
  );
  const id = row ? (row as any)._id : null;
  mutation.mutate({ data, id });
};

// ------------------------------------------------
// DeleteComp ==> delete component
// ------------------------------------------------
// dCASSuccess
// ------------
export const dCASSuccess = ({
  showSnackbar,
  setOpen,
  queryClient,
  queryKey,
}: DCASSuccessIF) => {
  queryClient.invalidateQueries({
    queryKey: [queryKey],
  });
  setOpen(false);
  showSnackbar({
    message: ` با موفقیت حذف شد`,
    severity: "success",
    key: Math.random(),
  });
};

// eCOnError
// ------------
export const dCASError = ({
  showSnackbar,
}: {
  showSnackbar: ShowSnackbarType;
}) => {
  const errorMessage = `خطا در حذف`;

  showSnackbar({
    message: errorMessage,
    severity: "error",
    key: Math.random(),
  });
};

// eCOnError
// ------------
// hDDComponent ==> handle delete DeleteComp

export const hDDComponent = async ({
  type,
  row,
  mutation,
  showSnackbar,
  setOpen,
}: HDDComponentIF) => {
  try {
    const res = await generalGet(`${URL_PRODUCT}?${type}=${row._id}`);
    const total = res.total;
    if (total === 0) {
      mutation.mutate({ id: row._id });
    } else {
      showSnackbar({
        message: `این ${
          type === "category" ? " دسته بندی" : "زیرمجموعه"
        } در محصولات استفاده شده است.`,
        severity: "error",
        key: Math.random(),
      });
      setOpen(false);
    }
  } catch (error) {}
};
