import { Row } from "../../../../../../components";
import { fDate } from "../../../../../../utils";
interface UserIF {
  firstname: string;
  lastname: string;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  deliveryDate: Date;
}
export const creatOrderData = ({ user, row }: { user: UserIF; row: Row }) => {
  return [
    { label: "نام مشتری :", data: user.firstname + "  " + user.lastname },
    { label: "آدرس : ", data: user.address },
    { label: "تلفن :", data: user?.phoneNumber },
    { label: " زمان سفارش :", data: fDate(row.createdAt) },
    { label: "زمان تحویل :", data: fDate(row.deliveryDate) },
  ];
};
