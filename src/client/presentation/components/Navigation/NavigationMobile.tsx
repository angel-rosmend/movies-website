"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMobile } from "@/client/hooks/use-mobile";
import { LogoDesktop } from "./LogoDesktop";
import Link from "next/link";
import { ROUTES_PATH } from "@/lib/routes";
import { Box } from "../../foundations/Box/Box";
import { Menu } from "lucide-react";
import { navLinks } from "./links";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Menu className="h-5 w-5 stroke-absolute-white" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full stroke-absolute-white text-white bg-black-08"
        >
          <SheetHeader>
            <SheetTitle className="sr-only">MOVIE WEBSITE</SheetTitle>
            <Link href={ROUTES_PATH.home}>
              <Box className="w-[116px] h-20">
                <LogoDesktop />
              </Box>
            </Link>
          </SheetHeader>

          <nav className="flex bg-black-08 flex-col gap-4 mt-6">
            {navLinks.map((item) => {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
