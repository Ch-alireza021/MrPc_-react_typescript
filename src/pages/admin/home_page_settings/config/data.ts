import { hPSCPageT } from "../../../../features";

export interface ShowHeaderIF {
    text: string;
    key: hPSCPageT;
  }

export const headerHPSRows: ShowHeaderIF[] = [
    { text: 'نمایش دسته بندی', key: "configCat" },
    { text: 'مدیریت دسته بندی ها' ,key: "manageCat" },
  ];