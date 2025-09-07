import Link from "next/link";
import { Box } from "../../foundations/Box/Box";
import { Container } from "../../foundations/Container/Container";
import { Icons } from "../../foundations/Icons";
import { LogoDesktop } from "./LogoDesktop";
import { NavItem } from "./NavItem";
import { Menu, X } from "lucide-react";

const mockLinks = [
  { title: "home", href: "/" },
  { title: "Watch list", href: "/watch-list" },
  { title: "Support", href: "/Support" },
  { title: "Subscriptions", href: "/subscriptions" },
];
export function Navigation() {
  return (
    <Container
      component="header"
      classNameWrapper="md:h-[96px] lg:h-[120px]"
      variant="default"
    >
      <Box
        vAlignContent="center"
        className="w-full justify-between h-full"
        component="nav"
      >
        <Link href={"/"}>
          <Box className="w-[116px] cursor-pointer md:w-[165px]">
            <LogoDesktop />
          </Box>
        </Link>
        <Box
          vAlignContent="center"
          className="bg-black-06 !hidden sm:!flex h-[60px] px-4 py-1 border-3 gap-3 border-black-12 rounded-[10px]"
        >
          {mockLinks.map((item, index) => (
            <NavItem key={index} href={item.href} title={item.title} />
          ))}
        </Box>
        <Box className="gap-3 !hidden sm:!flex">
          <Box className="" width={24} height={24}>
            <Icons.Search
              className="stroke-white fill-none"
              size="m"
              id="search"
            />
          </Box>
          <Box className="" width={30} height={30}>
            <Icons.Bell
              className="stroke-white fill-none"
              size="m"
              id="search"
            />
          </Box>
        </Box>

        {/* Mobile Menu - CSS Only */}
        <div className="md:hidden">
          <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />

          <label
            htmlFor="mobile-menu-toggle"
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent cursor-pointer transition-colors"
          >
            <Menu className="h-6 stroke-absolute-white w-6 peer-checked:hidden" />
            <X className="h-6 w-6 stroke-absolute-white hidden peer-checked:block" />
            <span className="sr-only">Toggle menu</span>
          </label>

          <nav className="fixed z-50 inset-0 bg-background border-b shadow-lg transform -translate-y-full opacity-0 invisible peer-checked:translate-y-0 peer-checked:opacity-100 peer-checked:visible transition-all duration-300 ease-in-out">
            <div className="container py-4">
              <div className="flex flex-col space-y-4">
                {mockLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-foreground/80 transition-colors py-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </Box>
    </Container>
  );
}
