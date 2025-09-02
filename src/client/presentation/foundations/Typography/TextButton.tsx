import cx from "classnames";
import * as classes from "./TextButton.css";
import { AriaRole, ComponentProps, JSX } from "react";
import { BaseTypography } from "./BaseTypography";
import { Filter } from "@/client/utils/typeOperations";

export interface TextButtonProps {
  "data-test-id"?: string;
  /**
   * Define the content of the TextButton.
   * @type string
   * @required
   */
  children: string;
  /**
   * Define the color of the TextButton.
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
   * Define the font size of the TextButton.
   * @type "xs" | "s" | "m"
   * @optional
   * @default "m"
   */
  size: "xs" | "s" | "m";
  /**
   * Define the component type.
   * @type "span" | "p"
   * @optional
   */
  component?: keyof Pick<JSX.IntrinsicElements, "span" | "p">;
  /**
   * Define the TextButton role.
   * @type "link" | "presentation" | "none"
   * @optional
   */
  role?: Filter<AriaRole, "link" | "presentation" | "none">;
  /**
   * Define the TextButton variant.
   * @type "default" | "link"
   * @optional
   * @default "default"
   */
  variant?: "default" | "link";
}

export function TextButton(props: TextButtonProps) {
  return (
    <BaseTypography
      data-test-id={props["data-test-id"]}
      role={props.role ?? "presentation"}
      component={props.component ?? "span"}
      color={props.color}
      className={cx(classes.base, classes.sizes[props.size], props.className)}
    >
      {props.children}
    </BaseTypography>
  );
}
