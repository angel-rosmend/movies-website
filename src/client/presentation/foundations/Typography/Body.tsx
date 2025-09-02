import cx from "classnames";
import * as classes from "./Body.css";
import { AriaRole, ComponentProps } from "react";
import type { Filter } from "../../utils/typeOperations";
import { BaseTypography } from "./BaseTypography";
import { FontWeightVariant } from "@/client/presentation/utils/fonts";

export interface BodyProps {
  "data-test-id"?: string;
  /**
   * Define the content of the Body.
   * @type string
   * @required
   */
  children: string;
  /**
   * Define the color of the Body.
   * @type ComponentProps<typeof BaseTypography>['color'];
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
   * Define the font size of the Body.
   * @type "xs" | "s" | "m" | "l" | "xl" | "lp"
   * @required
   */
  size: "xs" | "s" | "m" | "l" | "xl" | "lp" | "lp-l";
  /**
   * Define the component type.
   * @type "span" | "p" | "label" | "h4" | "h5"
   * @optional
   */
  component?: keyof Pick<
    JSX.IntrinsicElements,
    "span" | "p" | "label" | "h4" | "h5"
  >;
  /**
   * Define the text role.
   * @type  "article" | "caption" | "listitem" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "link" | "none"
   * @optional
   */
  role?: Filter<
    AriaRole,
    | "article"
    | "caption"
    | "listitem"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "link"
    | "none"
  >;
  /**
   * Define the label for if associated with an input.
   * @type string
   * @optional
   */
  htmlFor?: string;
  /**
   * Define the title of the Body.
   * @type string
   * @optional
   */
  title?: string;
  /**
   * Define the horizontal alignment of the Body.
   * @type "left" | "center" | "right"
   * @optional
   */
  hAlignContent?: "left" | "center" | "right";
  /**
   * Define the Body weightiness.
   * @type FontWeightVariant.Regular | FontWeightVariant.Bold
   * @optional
   * @default FontWeightVariant.Regular
   */
  weight?:
    | FontWeightVariant.Regular
    | FontWeightVariant.Bold
    | FontWeightVariant.Ultralight;
}

export function Body(props: BodyProps) {
  return (
    <BaseTypography
      data-test-id={props["data-test-id"]}
      title={props.title}
      role={props.role ?? "none"}
      component={props.component ?? "span"}
      htmlFor={props.htmlFor}
      hAlignContent={props.hAlignContent}
      color={props.color}
      className={cx(
        classes.base,
        classes.variant(props.weight || FontWeightVariant.Regular)[props.size],
        props.className,
      )}
    >
      {props.children}
    </BaseTypography>
  );
}
