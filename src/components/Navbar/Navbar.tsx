import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeSwitch } from "@/components/common/ThemeSwitch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="sm:hidden rounded-full"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[200px] text-gray-500 dark:text-gray-400"
      >
        {navItems.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href} className="w-full cursor-pointer">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="https://github.com/LUISPINTO90/PersonalPortfolio"
            target="_blank"
            rel="noreferrer noopener"
            className="w-full cursor-pointer"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function Navbar() {
  return (
    <Card className="w-full max-w-7xl shadow-sm text-sm border-neutral-300 dark:border-neutral-800">
      <nav className="flex h-12 w-full flex-row items-center gap-6 px-4">
        {/* Name Section */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-semibold"
        >
          <Button variant="outline" className="rounded-full">
            <span className="text-base font-semibold dark:text-white text-blue-600">
              {"LP"}
            </span>
          </Button>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="relative hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList className="text-neutral-500 dark:text-neutral-400 flex flex-row items-center gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Button variant="ghost">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 p-2 text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-accent-foreground data-[active=true]:text-primary"
                    >
                      {item.label}
                    </Link>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions - Desktop */}
        <div className="hidden sm:flex flex-1 flex-row items-center justify-end gap-1.5">
          <div className="rounded-full">
            <ThemeSwitch />
          </div>
          <Link
            href="https://github.com/LUISPINTO90/PersonalPortfolio"
            target="_blank"
            rel="noreferrer noopener"
            className="list-none"
          >
            <Button variant="outline" size="icon" className="rounded-full">
              <FaGithub className="size-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex sm:hidden flex-1 flex-row items-center justify-end gap-1.5">
          <div className="rounded-full">
            <ThemeSwitch />
          </div>
          <MobileNav />
        </div>
      </nav>
    </Card>
  );
}
