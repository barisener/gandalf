import React from "react";
import { Button } from "@/components/ui/button"; // Shadcn button
import { Settings } from 'lucide-react';
import { cn } from "@/lib/utils"; // Shadcn'nin className utility'si için

const Sidebar = () => {
  return (
    <div
      className={cn(
        "w-64 h-screen bg-black text-white p-4",
        "lg:w-56 sm:w-48 w-40" // Responsive genişlik
      )}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">GANDALF</h2>
        <ul>
          <li className="mb-2">
            <h2 className="flex items-center justify-start gap-2.5 text-xl font-semibold mb-4">
              <Settings size={18} />
              Gandalf Settings
            </h2>
          </li>
          <li className="mb-2">
            <Button
              variant="ghost"
              className="w-full justify-start  pl-10 text-left"
            >
              Organization
            </Button>
          </li>
          <li className="mb-2">
            <Button
              variant="ghost"
              className="w-full justify-start  pl-10 text-left"
            >
              Organization User
            </Button>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="flex items-center justify-start gap-2.5 text-xl font-semibold mb-4">
          Settings
          <Settings size={18} />

        </h2>
        <ul>
          <li className="mb-2">
            <Button
              variant="ghost"
              className="w-full justify-start  pl-10 text-left"
            >
              Admin accounts
            </Button>
          </li>
          <li className="mb-2">
            <Button
              variant="ghost"
              className="w-full justify-start  pl-10 text-left"
            >
              Manage Constants
            </Button>
          </li>
          <li className="mb-2">
            <Button
              variant="ghost"
              className="w-full justify-start  pl-10 text-left"
            >
              Sign out
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
