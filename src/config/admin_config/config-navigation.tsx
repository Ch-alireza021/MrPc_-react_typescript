import {
  TrendingUp,
  PermContactCalendar,
  ProductionQuantityLimits,
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
    title: "یوزرها",
    path: "/admin/users",
    icon: <PermContactCalendar />,
  },
  {
    title: "محصولات",
    path: "/admin/products",
    icon: <ProductionQuantityLimits />,
  },
];
