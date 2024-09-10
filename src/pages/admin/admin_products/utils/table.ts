import {  HeadCellIF } from "./interface";
  
 export  const header: readonly HeadCellIF[] = [
    {
      id: "thumbnail",
      numeric: false,
      disablePadding: true,
      label: " تصویر کالا",
    },
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: " نام کالا",
    },
    {
      id: "category",
      numeric: false,
      disablePadding: false,
      label: " دسته بندی",
    },
    {
      id: "subcategory",
      numeric: false,
      disablePadding: false,
      label: " زیر مجموعه ",
    },
    {
      id: "price",
      numeric: false,
      disablePadding: false,
      label: "  قیمت",
    },
    {
      id: "updatedAt",
      numeric: true,
      disablePadding: false,
      label: " به روز رسانی ",
    },
    {
      id: "quantity",
      numeric: false,
      disablePadding: false,
      label: " موجودی  ",
    },
    {
      id: "edit",
      numeric: false,
      disablePadding: false,
      label: " ویرایش  ",
    },
  ];