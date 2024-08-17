import { PATH } from "../../router";

const creatId = () => {
    return Date.now();
  };
  export const footerInfoData = [
    {
      text: "اطلاعات",
      id: creatId(),
      subText: [
        { id: creatId(), to: PATH.ABOUT_US, text: "درباره مستر پی سی " },
        { id: creatId(), to: PATH.TERMS, text: " قوانین مستر پی سی" },
      ],
    },
    {
      text: "امکانات اضافی",
      id: creatId(),
      subText: [
        { id: creatId(), to: PATH.COMMON_QUESTION, text: " شیوه ثبت سفارش " },
        { id: creatId(), to: PATH.COMMON_QUESTION, text: " شیوه پرداخت" },
        { id: creatId(), to: PATH.COMMON_QUESTION, text: " شیوه ارسال" },
      ],
    },
    {
      text: "پرسش‌های متداول",
      id: creatId(),
      subText: [{ id: creatId(), to: "", text: "اسمبل هوشمند" }],
    },
    {
      text: "پرسش‌های متداول",
      id: creatId(),
      subText: [
        { id: creatId(), to: PATH.LOGIN, text: " حساب کاربری من " },
        { id: creatId(), to: PATH.LOGIN, text: " تاریخچه سفارش‌ها" },
        { id: creatId(), to: PATH.LOGIN, text: " لیست دلخواه" },
      ],
    },
  ];