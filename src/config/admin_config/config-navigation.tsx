import {
  TrendingUp,
  PermContactCalendar,
  ProductionQuantityLimits,
  LocalMall,
  SubdirectoryArrowRight,
  Category
} from "@mui/icons-material";
import { PATH } from "../router";
interface NavItem {
  title: string;
  path: string;
  icon: JSX.Element;
}
// ----------------------------------------------------------------------

export const navConfig: NavItem[] = [
  {
    title: "داشتبرد",
    path: `/admin/${PATH.DASHBOARD}`,
    icon: <TrendingUp />,
  },
  {
    title: "محصولات",
    path: `/admin/${PATH.ADMINPRODUCTS}`,
    icon: <ProductionQuantityLimits />,
  },
  {
    title: "یوزرها",
    path: `/admin/${PATH.USERVIWE}`,
    icon: <PermContactCalendar />,
  },
  {
    title: "سفارش ها",
    path: `/admin/${PATH.ADMINORDERS}`,
    icon: <LocalMall />,
  },
  {
    title: "دسته بندی  ",
    path: `/admin/${PATH.ACATEGORY}`,
    icon: <Category />,
  },
  {
    title: "زیرمجموعه",
    path: `/admin/${PATH.ASUBCATEGORY}`,
    icon: <SubdirectoryArrowRight />,
  },
];
