import { FontWeightVariant } from "./_fonts";

export const base = "font-manrope";

const boldVariant = {
  xl: "text-body-xl-bold-mobile md:text-body-xl-bold-desktop",
  l: "text-body-l-bold-mobile md:text-body-l-bold-desktop",
  m: "text-body-m-bold-mobile md:text-body-m-bold-desktop",
  s: "text-body-s-bold-mobile md:text-body-s-bold-desktop",
  xs: "text-body-xs-bold-mobile md:text-body-xs-bold-desktop",
  lp: "text-body-lp-mobile md:text-body-lp-desktop !font-nunito",
  "lp-l": "text-body-lp-l-mobile md:text-body-lp-l-desktop !font-nunito",
};

const regularVariant = {
  xl: "text-body-xl-regular-mobile md:text-body-xl-regular-desktop",
  l: "text-body-l-regular-mobile md:text-body-l-regular-desktop",
  m: "text-body-m-regular-mobile md:text-body-m-regular-desktop",
  s: "text-body-s-regular-mobile md:text-body-s-regular-desktop",
  xs: "text-body-xs-regular-mobile md:text-body-xs-regular-desktop",
  lp: "text-body-lp-mobile md:text-body-lp-desktop !font-nunito",
  "lp-l": "text-body-lp-l-mobile md:text-body-lp-l-desktop !font-nunito",
};

export const variant = (
  weight:
    | FontWeightVariant.Regular
    | FontWeightVariant.Bold
    | FontWeightVariant.Ultralight,
) => {
  switch (weight) {
    case FontWeightVariant.Ultralight:
      return regularVariant;
    case FontWeightVariant.Regular:
      return regularVariant;
    case FontWeightVariant.Bold:
      return boldVariant;
  }
};
