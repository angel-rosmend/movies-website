import { createElement, forwardRef } from "react";
import { Children } from "../../utils/children";
import { tailwindClassnames } from "../../utils/tailwindClassnames";

export interface ContainerProps {
  /**
   * The Container column flex direction
   * @type boolean
   * @optional
   */
  column?: boolean;
  /**
   * The classNames
   * @type string
   * @optional
   */
  className?: string;
  /**
   * The wrapper className
   * @type string
   * @optional
   */
  classNameWrapper?: string;
  /**
   * The Container childrem item
   * @type Children nodes
   * @required
   */
  children: Children;
  /**
   * The Container variant max content width
   * @type "default" => 1440px | "large" => 1920px | "full" => 100%
   * @optional
   * @default "default"
   */
  variant?: "default" | "large" | "full" | "full-right" | "full-left";
  component?: keyof JSX.IntrinsicElements;
  background?: string;
  style?: React.CSSProperties;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    return (
      <Wrapper
        ref={ref}
        className={tailwindClassnames(
          "w-full flex flex-1 justify-center px-2",
          props.classNameWrapper,
        )}
        style={{ backgroundColor: props.background, ...props.style }}
        component={props.component}
      >
        <div
          className={tailwindClassnames(
            "w-full h-fit",
            {
              "py-4 sm:py-6 lg:py-10 max-w-[1200px]":
                !props.variant || props.variant === "default",
              "py-4 sm:py-6 lg:py-10 max-w-[1920px]": props.variant === "large",
              "px-0": props.variant === "full",
              "pl-2 xs:pl-4 sm:pl-6 lg:pl-10 pr-0 xs:pr-0 sm:pr-0 lg:pr-0  max-w-[1200px]":
                props.variant === "full-right",
              "pl-0 xs:pl-0 sm:pl-0 lg:pl-0  pr-2 xs:pr-4 sm:pr-6 lg:pr-10  max-w-[1200px]":
                props.variant === "full-left",
            },
            props.className,
          )}
        >
          {props.children}
        </div>
      </Wrapper>
    );
  },
);

export const Wrapper = forwardRef<
  HTMLDivElement,
  {
    component?: keyof JSX.IntrinsicElements;
    className?: string;
    style?: React.CSSProperties;
    children: Children;
  }
>(({ component, className, style, children }, ref) => {
  return createElement(
    component || "div",
    {
      className,
      style,
      ref,
    },
    children,
  );
});

Container.displayName = "Container";
Wrapper.displayName = "Wrapper";
