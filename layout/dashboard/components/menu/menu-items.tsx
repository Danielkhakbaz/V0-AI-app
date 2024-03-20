import {
  HomeIcon,
  LandmarkIcon,
  LineChartIcon,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "layout/dashboard/components/icons";

export const menuItems = [
  {
    label: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    label: "Analytics",
    link: "/analytics",
    icon: <LineChartIcon className="h-4 w-4" />,
  },
  {
    label: "Orders",
    link: "/orders",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
  },
  {
    label: "Products",
    link: "/products",
    icon: <PackageIcon className="h-4 w-4" />,
  },
  {
    label: "Customers",
    link: "/customers",
    icon: <UsersIcon className="h-4 w-4" />,
  },
  {
    label: "Ask AI",
    link: "/ask-ai",
    icon: <LandmarkIcon className="h-4 w-4" />,
  },
];
