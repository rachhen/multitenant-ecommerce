"use client";

import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-4xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isOpen}
        onOpenChange={setIsOpen}
      />

      <div className="items-center gap-4 hidden md:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden md:flex">
        <Button
          asChild
          variant="noShadow"
          className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg cursor-pointer"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button
          asChild
          variant="noShadow"
          className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg cursor-pointer"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="noShadow"
          className="h-full border-transparent bg-white"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon size={32} />
        </Button>
      </div>
    </nav>
  );
}

type NavbarItemProps = {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
};
const NavbarItem = ({ href, isActive, children }: NavbarItemProps) => {
  return (
    <Button variant={isActive ? "default" : "reverse"} asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
