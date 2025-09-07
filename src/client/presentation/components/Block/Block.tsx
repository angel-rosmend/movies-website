import React from "react";
import { Box } from "../../foundations/Box/Box";
import { Children } from "@/client/utils/children";
import cx from "classnames"

export function Block({ children, className }: { children: Children, className?: string }) {
  return (
    <Box
      className={cx("rounded-[10px] gap-1 border p-3  md:p-5 border-black-15 bg-black-10", className)}
      column
      component="section"
    >
      {children}
    </Box>
  );
}
