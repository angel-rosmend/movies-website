import { Lato, Nunito_Sans, Nunito, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular, Medium, Semi Bold, Bold
  variable: "--font-manrope",
  display: "swap",
})

export const lato = Lato({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700", "900"],
  adjustFontFallback: false,
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  adjustFontFallback: false,
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  adjustFontFallback: false,
});

export enum FontWeightVariant {
  Regular = "regular",
  Light = "light",
  Ultralight = "ultralight",
  Bold = "bold",
}
