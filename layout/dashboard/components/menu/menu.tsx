"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "layout/dashboard/components/menu/menu-items";

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        {menuItems.map(({ link, icon, label }) => (
          <Link
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ${pathname === link && "text-gray-900 bg-gray-100"}`}
            href={link}
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
