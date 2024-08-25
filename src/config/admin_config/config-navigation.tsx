import {
  TrendingUp,
  PermContactCalendar,
  ProductionQuantityLimits,
  LocalMall
} from "@mui/icons-material";
interface NavItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

// ----------------------------------------------------------------------

export const navConfig: NavItem[] = [
  {
    title: "داشتبرد",
    path: "/admin/dashboard",
    icon: <TrendingUp />,
  },
  {
    title: "محصولات",
    path: "/admin/products",
    icon: <ProductionQuantityLimits />,
  },
  {
    title: "یوزرها",
    path: "/admin/users",
    icon: <PermContactCalendar />,
  },
  {
    title: "سفارش ها",
    path: "/admin/orders",
    icon: <LocalMall />,
  },
 
];
