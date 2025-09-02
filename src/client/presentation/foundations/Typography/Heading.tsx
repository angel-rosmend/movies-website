import cx from "classnames";
import * as classes from "./Heading.css";
import { ComponentProps, JSX } from "react";
import { BaseTypography } from "./BaseTypography";

export interface HeadingProps {
  "data-test-id"?: string;
  /**
   * Define the content of the Heading.
   * @type string
   * @required
   */
  children: string;
  /**
   * Define the color of the Heading.
   * @type ComponentProps<typeof BaseTypography>['color']
   * @optional
   */
  color?: ComponentProps<typeof BaseTypography>["color"];
  /**
   * Define the custom className.
   * @type string
   * @optional
   */
  className?: string;
  /**
   * Define the font size of the Heading.
   * @type "xs" | "s" | "m" | "l" | "xl" | "lp"
   * @required
   */
  size: "xs" | "s" | "m" | "l" | "xl" | "lp";
  /**
   * Define the component type.
   * @type "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
   * @optional
   */
  component?: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  /**
   * Define the title of the Heading.
   * @type string
   * @optional
   */
  title?: string;
  /**
   * Define the horizontal alignment of the Heading.
   * @type "left" | "center" | "right"
   * @optional
   */
  hAlignContent?: "left" | "center" | "right";
  /**
   * Define the Label weightiness.
   * @type FontWeightVariant
   * @optional
   * @default FontWeightVariant.Light
   */
}

export function Heading(props: HeadingProps) {
  return (
    <BaseTypography
      data-test-id={props["data-test-id"]}
      title={props.title}
      role="heading"
      component={props.component ?? "span"}
      hAlignContent={props.hAlignContent}
      color={props.color}
      className={cx(classes.base, classes.sizes[props.size], props.className)}
    >
      {props.children}
    </BaseTypography>
  );
}
