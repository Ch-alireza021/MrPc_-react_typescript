
export interface HeadCellIF {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

export const header = (
  headerData: "category" | "subcategory"
): HeadCellIF[] => {
  const data: HeadCellIF[] = [
    headerData!== "subcategory" &&   {
      id: "icon",
      numeric: false,
      disablePadding: true,
      label: " آیکون",
    },
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: headerData === "subcategory" ? "نام زیر مجموعه" : " نام دسته بندی",
    },
    headerData === "subcategory" && {
      id: "category",
      numeric: false,
      disablePadding: true,
      label: " نام دسته بندی",
    },
    {
      id: "createdAt",
      numeric: true,
      disablePadding: false,
      label: " تاریخ ایجاد",
    },
    {
      id: "edit",
      numeric: false,
      disablePadding: false,
      label: " ویرایش",
    },
  ].filter((i) => typeof i !== "boolean");
  return data;
};
