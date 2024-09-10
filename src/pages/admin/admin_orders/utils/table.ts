import {  HeadCellIF } from "./interface";
  
 export  const header: readonly HeadCellIF[] = [
    {
      id: "user",
      numeric: false,
      disablePadding: true,
      label: " نام کاربر",
    },
    {
      id: "totalPrice",
      numeric: false,
      disablePadding: false,
      label: " مبلغ فکتور",
    },
    {
      id: "createdAt",
      numeric: true,
      disablePadding: false,
      label: " تاریخ سفارش",
    },
    {
      id: "order",
      numeric: false,
      disablePadding: false,
      label: "برسی سفارشات انجام شده",
    },
  ];