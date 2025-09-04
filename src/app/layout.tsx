import type { Metadata } from "next";
import "@/styles/globals.css"
import { Navigation } from "@/client/presentation/components/Navigation/Navigation";
import cx from "classnames"
import { manrope } from "@/client/presentation/foundations/Typography/_fonts";
import FooterSSR from "@/server/components/Footer/FooterSSR";

export const metadata: Metadata = {
  title: "Movies Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(manrope.variable, "!bg-black-08")}
      >
        <Navigation/>
        {children}
        <FooterSSR/>
      </body>
    </html>
  );
}
