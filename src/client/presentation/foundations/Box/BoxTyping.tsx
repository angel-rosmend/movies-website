
import { Children } from "@/client/utils/children";
import { AriaAttributes, HTMLProps, JSX } from "react";
export type Override<O1, O2> = Pick<O1, Exclude<keyof O1, keyof O2>> & O2;

export interface BoxPropsOverride {
  /** FlexView content */
  children?: Children;
  /** flex-direction: column */
  column?: boolean;
  /** align content vertically */
  vAlignContent?: "top" | "center" | "bottom";
  /** align content horizontally */
  hAlignContent?: "left" | "center" | "right";
  /** margin-left property ("auto" to align self right) */
  marginLeft?: string | number;
  /** margin-top property ("auto" to align self bottom) */
  marginTop?: string | number;
  /** margin-right property ("auto" to align self left) */
  marginRight?: string | number;
  /** margin-bottom property ("auto" to align self top) */
  marginBottom?: string | number;
  /** grow property (for parent primary axis) */
  grow?: boolean | number;
  /** flex-shrink property */
  shrink?: boolean | number;
  /** flex-basis property */
  basis?: string | number;
  /** wrap content */
  wrap?: boolean;
  /** height property (for parent secondary axis) */
  height?: string | number;
  /** width property (for parent secondary axis) */
  width?: string | number;
  /** class to pass to top level element of the component */
  className?: string;
  /** style object to pass to top level element of the component */
  style?: React.CSSProperties;
  /** native dom component to render. Defaults to div */
  component?: keyof JSX.IntrinsicElements;
}

export interface AriaAndDataProps extends AriaAttributes {
  /** data custom properties */
  [key: `data-${string}`]: unknown;
}

export type ElementProps = Omit<HTMLProps<HTMLElement>, "ref">;

export type BoxProps = Override<ElementProps, BoxPropsOverride> &
  AriaAndDataProps;
