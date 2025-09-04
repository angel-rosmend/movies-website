import Link from "next/link";
import { Box } from "../../foundations/Box/Box";
import { Container } from "../../foundations/Container/Container";
import { Icons } from "../../foundations/Icons";
import { LogoDesktop } from "./LogoDesktop";
import { NavItem } from "./NavItem";

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
      className="h-full"
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
          className="bg-black-06 h-[60px] px-4 py-1 border-3 gap-3 border-black-12 rounded-[10px]"
        >
          {mockLinks.map((item, index) => (
            <NavItem key={index} href={item.href} title={item.title} />
          ))}
        </Box>
        <Box className="gap-3">
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
      </Box>
    </Container>
  );
}
