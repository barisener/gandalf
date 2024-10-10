import React from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";


const Sidebar = () => {
  const menuItems = [
    {
      title: "GANDALF",
      links: [
        { name: "Organization", href: "/organization" },
        { name: "Organization User", href: "/organization-user" },
      ],
    },
    {
      title: "Settings",
      icon: <Settings size={18} />,
      links: [
        { name: "Admin accounts", href: "/accounts" },
        { name: "Manage Constants", href: "/constants" },
        { name: "Sign out", href: "/sign-out" },
      ],
    },
  ];

  return (
    <div className={cn("w-64 h-screen bg-black text-white p-4", "lg:w-56 sm:w-48 w-40")}>
      {menuItems.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="flex items-center justify-start gap-2.5 text-xl font-semibold mb-4">
            {section.icon && section.icon}
            {section.title}
          </h2>
          <ul>
            {section.links.map((link, idx) => (
              <li key={idx} className="mb-2">
                <Button asChild variant="ghost" className="w-full justify-start pl-10 text-left">
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
