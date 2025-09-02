import { AriaRole, createElement, forwardRef, JSX } from "react";
import cx from "classnames";
import type { Filter } from "@/client/utils/typeOperations";

export interface BaseProps {
  /**
   * The text content of the element.
   * @default 'Base'
   * @type string
   * @required
   */
  children: string | number | JSX.Element;
  /**
   * The component type.
   * @type 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'label' | 'p' | 'q'
   * @required
   */
  component: keyof Pick<
    JSX.IntrinsicElements,
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "label"
    | "p"
    | "time"
    | "a"
    | "q"
  >;
  /**
   * The component custom className.
   * @type string
   */
  className?: string;
  /**
   * Unique id to test the element.
   * @type string
   */
  "data-test-id"?: string;
  /**
   * The text color
   * @type string
   */
  color?: string;
  /**
   * The text custom styles
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * The text  role
   * @type | 'button' | 'link' | 'label' | 'heading' | 'article' | 'caption' | 'listitem' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'presentation' | 'none'
   * @required
   */
  role: Filter<
    AriaRole,
    | "button"
    | "link"
    | "inputlabel"
    | "heading"
    | "article"
    | "caption"
    | "listitem"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "presentation"
    | "none"
  >;
  /**
   * The label for if associated with an input.
   * @type string
   * @optional
   */
  htmlFor?: string;
  /**
   * The title of the element.
   * @type string
   * @optional
   */
  title?: string;
  /**
   * The alignment of the heading.
   * @type "left" | "center" | "right"
   */
  hAlignContent?: "left" | "center" | "right";
}

export const BaseTypography = forwardRef<HTMLElement, BaseProps>((props, ref) =>
  createElement(props.component, {
    ref: ref,
    role: props.role,
    "data-test-id": props["data-test-id"],
    className: cx(props.color, props.className, "z-10"),
    dangerouslySetInnerHTML: { __html: props.children },
    style: {
      textAlign: props.hAlignContent,
      color: props.color,
      ...props.style,
    },
    htmlFor: props.htmlFor,
    title: props.title,
  }),
);
