import img1 from "../../assets/icons/glass/ic_glass_bag.png";
import img2 from "../../assets/icons/glass/ic_glass_users.png";
import img3 from "../../assets/icons/glass/ic_glass_buy.png";
import img4 from "../../assets/icons/glass/ic_glass_message.png";

interface DashboardWidgetData {
    title: string;
    total: number;
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
    icon: string;
  }

export   const dashboard_widget_summary_Data:DashboardWidgetData[]= [
    { title: "فروش هفتگی", total: 714000, color: "success", icon: img1 },
    { title: "کاربران جدید", total: 1352831, color: "info", icon: img2 },
    { title: "سفارشات", total: 1723315, color: "warning", icon: img3 },
    { title: "گزارشات", total: 234, color: "error", icon: img4 },
  ];