import {  HeadCellIF } from "./interface";
  
 export  const header: readonly HeadCellIF[] = [
    {
      id: "firstname",
      numeric: false,
      disablePadding: true,
      label: "نام",
    },
    {
      id: "lastname",
      numeric: false,
      disablePadding: false,
      label: "نام خانوادگی",
    },
    {
      id: "phoneNumber",
      numeric: false,
      disablePadding: false,
      label: "شماره تماس",
    },
    {
      id: "createdAt",
      numeric: true,
      disablePadding: false,
      label: " تاریخ عضویت",
    },
    {
      id: "username",
      numeric: false,
      disablePadding: false,
      label: " نام کاربری",
    },
    {
      id: "address",
      numeric: false,
      disablePadding: false,
      label: " آدرس",
    },
  ];