"use client";
import Link from "next/link";
import React from "react";
import { TextButton } from "../../foundations/Typography";
import cx from "classnames";
import { Box } from "../../foundations/Box/Box";
import { usePathname } from "next/navigation";

export interface NavItemProps {
  href: string;
  title: string;
}
export function NavItem(props: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === props.href;
  return (
    <Link href={props.href}>
      <Box
        className={cx("px-4 rounded-[10px] py-3 bg-transparent", {
          "!bg-black-10": active,
        })}
        role="menuitem"
      >
        <TextButton
          
          className={cx({
            "text-grey-75": !active,
            "text-white font-medium": active,
          })}
          size="s"
        >
          {props.title}
        </TextButton>
      </Box>
    </Link>
  );
}
