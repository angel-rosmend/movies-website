import cx from "classnames";
import * as classes from "./Label.css";
import { AriaRole, ComponentProps } from "react";
import type { Filter } from "../../utils/typeOperations";
import { BaseTypography } from "./BaseTypography";
import { FontWeightVariant } from "@/client/presentation/utils/fonts";

export interface LabelProps {
  "data-test-id"?: string;
  /**
   * Define the content of the Label.
   * @type string
   * @required
   */
  children: string;
  /**
   * Define the color of the Label.
   * @type ComponentProps<typeof BaseTypography>['color'];
   * @optional
   */
  color?: ComponentProps<typeof BaseTypography>["color"];
  /**
   *  Define the custom className.
   * @type string
   * @optional
   */
  className?: string;
  /**
   * Define the font size of the Label.
   * @type "m" | "s"
   * @required
   */
  size: "m" | "s";
  /**
   * Define the Label role.
   * @type "presentation" | "none"
   * @optional
   */
  role?: Filter<AriaRole, "presentation" | "none">;
  /**
   *  Define the component type.
   * @type "h1" | "h2" | "h3" | "h4"| "h5" | "label" | "time" | "p" | "span"
   * @optional
   */
  component?: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "label" | "time" | "p" | "span"
  >;
  /**
   * Define the Label weightiness.
   * @type FontWeightVariant
   * @optional
   * @default FontWeightVariant.Light
   */
  weight?: FontWeightVariant;
  htmlFor?: string;
}

export function Label(props: LabelProps) {
  return (
    <BaseTypography
      htmlFor={props.htmlFor}
      data-test-id={props["data-test-id"]}
      role={props.role ?? "presentation"}
      component={props.component ?? "label"}
      color={props.color}
      className={cx(
        classes.base,
        classes.sizes[props.size],
        props.className,
        "uppercase",
      )}
    >
      {props.children}
    </BaseTypography>
  );
}
