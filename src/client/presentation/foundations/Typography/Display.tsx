import cx from "classnames";
import * as classes from "./Display.css";
import { AriaRole, ComponentProps, JSX } from "react";
import { BaseTypography } from "./BaseTypography";
import { FontWeightVariant } from "./_fonts";
import { Filter } from "@/client/utils/typeOperations";

export interface DisplayProps {
  "data-test-id"?: string;
  /**
   * Define the content of the Display.
   * @type string
   * @required
   */
  children: string;
  /**
   * Define the color of the Display.
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
   * Define the font size of the Display.
   * @type "m" | "l" | "xl"
   * @required
   */
  size: "m" | "l" | "xl";
  /**
   * Define the component type.
   * @type "span" | "p" | "label" | "h4" | "h5" | "h6"
   * @optional
   */
  component?: keyof Pick<
    JSX.IntrinsicElements,
    "span" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
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
   * Define the title of the Display.
   * @type string
   * @optional
   */
  title?: string;
  /**
   * Define the horizontal alignment of the Display.
   * @type "left" | "center" | "right"
   * @optional
   */
  hAlignContent?: "left" | "center" | "right";
  /**
   * Define the Display weightiness.
   * @type FontWeightVariant.Regular | FontWeightVariant.Ultralight
   * @optional
   * @default FontWeightVariant.Regular
   */
  weight?: FontWeightVariant.Regular | FontWeightVariant.Ultralight;
  /**
   * Define the Display text with gradient color.
   * @type boolean
   * @optional
   * @default false
   */
  gradientColor?: boolean;
}

export function Display(props: DisplayProps) {
  return (
    <BaseTypography
      data-test-id={props["data-test-id"]}
      title={props.title}
      role={props.role ?? "none"}
      component={props.component ?? "span"}
      htmlFor={props.htmlFor}
      hAlignContent={props.hAlignContent}
      color={props.color || "text-neutral-black"}
      className={cx(classes.base, classes.sizes[props.size], props.className, {
        "text-transparent bg-gradient-to-r from-blue-800  via-teal-750 to-teal-700  bg-clip-text":
          !!props.gradientColor,
      })}
    >
      {props.children}
    </BaseTypography>
  );
}
