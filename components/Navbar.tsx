"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Orbitron } from "next/font/google";
import { Button } from "./ui/button";

const orbiton = Orbitron({
  subsets: ["latin"],
});

const menus = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "NEWS", path: "/news" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className=" fixed top-0 left-0 w-full backdrop-blur-lg z-50">
      <div className="flex gap-4 max-w-7xl mx-auto h-[100px] items-center px-4">
        <div
          className={cn(
            orbiton.className,
            "flex flex-col w-[120px] text-yellow-200 text-xl tracking-widest font-semibold"
          )}
        >
          SYNTAX
        </div>
        <div className="flex flex-1 flex-col items-center ">
          <NavigationMenu>
            <NavigationMenuList>
              {menus.map((item) => {
                const active = pathname === item.path;
                return (
                  <NavigationMenuItem key={item.path}>
                    <Link href={item.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        active={active}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent tracking-wider"
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-col items-end w-[120px]">
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
