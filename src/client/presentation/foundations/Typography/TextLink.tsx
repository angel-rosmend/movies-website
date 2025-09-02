import cx from "classnames";
import * as classes from "./TextLink.css";
import { AriaRole, ComponentProps } from "react";
import type { Filter } from "../../utils/typeOperations";
import { BaseTypography } from "./BaseTypography";

export interface TextLinkProps {
  "data-test-id"?: string;
  /**
   * Define the content of the TextLink.
   * @type string
   * @required
   */
  children: string;
  /**
   * Define the color of the TextLink.
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
   * Define the font size of the TextLink.
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
   * Define the TextLink role.
   * @type "link" | "presentation" | "none"
   * @optional
   */
  role?: Filter<AriaRole, "link" | "presentation" | "none">;
  /**
   * Define the TextLink variant.
   * @type "default" | "link"
   * @optional
   * @default "default"
   */
  variant?: "default" | "link";
}

export function TextLink(props: TextLinkProps) {
  return (
    <BaseTypography
      data-test-id={props["data-test-id"]}
      role={props.role ?? "presentation"}
      component={props.component ?? "span"}
      color={props.color}
      className={cx(
        classes.base,
        classes.sizes[props.size],
        props.className,
        "underline",
      )}
    >
      {props.children}
    </BaseTypography>
  );
}
