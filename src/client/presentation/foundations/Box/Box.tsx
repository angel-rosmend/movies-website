/* eslint-disable react/display-name */

import { createElement, CSSProperties, forwardRef } from "react";
import { BoxProps, BoxPropsOverride } from "./BoxTyping";

const alignPropToFlex = (
  align: BoxProps["vAlignContent"] | BoxProps["hAlignContent"]
) => {
  switch (align) {
    case "top":
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
    case "right":
      return "flex-end";
  }
};

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const style: () => CSSProperties = () => {
    const size = {
      width: props.width,
      height: props.height,
      marginLeft: props.marginLeft,
      marginTop: props.marginTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
    };

    return {
      boxSizing: "border-box",

      // some browsers don't set these by default on flex
      minWidth: 0,
      minHeight: 0,

      // flex properties
      display: "flex",
      flexDirection: props.column ? "column" : "row",
      flexWrap: props.wrap ? "wrap" : "nowrap",
      justifyContent: alignPropToFlex(
        props.column ? props.vAlignContent : props.hAlignContent
      ),
      alignItems: alignPropToFlex(
        props.column ? props.hAlignContent : props.vAlignContent
      ),
      cursor: props.onClick ? "pointer" : undefined,
      ...size,
      ...props.style,
    };
  };

  const HTMLElementProps = (): BoxProps & {
    [k in keyof BoxPropsOverride]?: never;
  } => {
    const {
      children,
      className,
      style,
      column,
      grow,
      shrink,
      basis,
      wrap,
      vAlignContent,
      hAlignContent,
      width,
      height,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      component,
      "data-test-id": dataTestId,
      ...rest
    } = props;

    return rest;
  };
  const component =
    typeof props.component === "string" ? props.component : "div";

  return createElement(
    component,
    {
      ref,
      className: props.className,
      style: style(),
      autoComplete:
        props.component === "form" && !props.autoComplete
          ? "off"
          : props.autoComplete,
      "data-test-id": props["data-test-id"],
      ...HTMLElementProps(),
    },
    props.children
  );
});
