
import { CategoryIF } from "./interface";
export interface HeadCellIF {
    disablePadding: boolean;
    id: keyof CategoryIF;
    label: string;
    numeric: boolean;
  }
  
 export  const header: readonly HeadCellIF[] = [
    {
      id: "icon",
      numeric: false,
      disablePadding: true,
      label: " آیکون",
    },
    {
      id: "name",
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
  ];