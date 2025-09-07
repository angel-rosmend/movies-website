import Link from "next/link";
import { Box } from "../../foundations/Box/Box";
import { Container } from "../../foundations/Container/Container";
import { Icons } from "../../foundations/Icons";
import { LogoDesktop } from "./LogoDesktop";
import { NavItem } from "./NavItem";
import { MobileNavigation } from "./NavigationMobile";
import { ROUTES_PATH } from "@/lib/routes";
import { navLinks } from "./links";


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
        <Link href={ROUTES_PATH.home}>
          <Box className="w-[116px] cursor-pointer md:w-[165px]">
            <LogoDesktop />
          </Box>
        </Link>
        <Box
          vAlignContent="center"
          className="bg-black-06 !hidden md:!flex h-[60px] px-4 py-1 border-3 gap-3 border-black-12 rounded-[10px]"
        >
          {navLinks.map((item, index) => (
            <NavItem key={index} href={item.href} title={item.title} />
          ))}
        </Box>
        <Box className="gap-3 !hidden md:!flex">
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
        <MobileNavigation/>
      </Box>
    </Container>
  );
}
