"use client";
import { Transition, Disclosure } from "@headlessui/react";
import cx from "classnames";
import React, { JSX, useState } from "react";
import { Body } from "../../foundations/Typography";
import { Box } from "../../foundations/Box/Box";
import { Icons, IconSetType } from "../../foundations/Icons";
import { FontWeightVariant } from "../../foundations/Typography/_fonts";

export interface AccordionItem {
  title: JSX.Element | string;
  content: JSX.Element | string;
  open?: boolean;
  disabled?: boolean;
}

interface AccordionProps {
  "data-test-id"?: string;
  /**
   * The id of the Accordion.
   * @type string
   * @required
   */
  id: string;
  /**
   * optional toggle labels pair.
   * @type { open: string; close: string }
   */
  toggleLabels?: { open: string; close: string };
  /**
   * accordion items.
   * @type AccordionItem[]
   * @required
   */
  items?: AccordionItem[];
  /**
   * optional disclosure class name.
   * @type string
   */
  className?: string;
  /**
   * optional wrapper class name.
   * @type string
   */
  classNameWrapper?: string;
  /**
   * optional disclosure button class name.
   * @type string
   */
  classNameButton?: string;
  /**
   * optional disclosure panel class name.
   * @type string
   */
  classNamePanel?: string;
  /**
   * accordion variant
   * @type "small" | "big"
   */
  variant: "small" | "big";
  /**
   * accordion theme
   * @type "dark" | "light";
   * @default "light"
   */
  theme?: "light" | "dark";
  /**
   * accordion cutom icon
   * @type "dark" | "light";
   * @default "light"
   */
  customIcon?: {
    open: keyof IconSetType;
    closed: keyof IconSetType;
    color?: string;
  };
}

export const Accordion = (props: AccordionProps) => {
  const [lastDisclosureClose, setLastDisclosureClose] = useState<() => void>();

  const handleDisclosureChange = (close: () => void) => {
    if (lastDisclosureClose && close !== lastDisclosureClose) {
      lastDisclosureClose();
    }
    setLastDisclosureClose(() => close);
  };

  return (
    <Box
      column
      grow
      vAlignContent="center"
      data-test-id={props["data-test-id"]}
      className={props.classNameWrapper}
    >
      {props.items?.map((item, index) => (
        <Disclosure key={`${item.title}-${index}`} defaultOpen={item.open}>
          {({ open, close }) => (
            <Box
              id={`item-${index}`}
              data-test-id={`${props["data-test-id"]}-item`}
              className={cx(
                "border-t first:border-transparent",
                props.className,
                {
                  "border-neutral-200": props.theme === "light",
                  "border-white": props.theme === "dark"
                },
                { "!block": open },
                { "!min-h-fit": close }
              )}
              column
              vAlignContent="top"
            >
              <Box
                className={cx("group", {
                  "hover:bg-interactive-100": !item.disabled && !open
                })}
              >
                <Disclosure.Button
                  className={cx(
                    "outline-none flex items-center w-full justify-between gap-2 p-2 focus-visible:outline-[1.5px] focus-visible:outline-offset-0 focus-visible:outline-interactive-700 focus-visible:disabled:outline-none z-50 h-fit",
                    {
                      "text-neutral-200 cursor-not-allowed": item.disabled
                    },
                    props.classNameButton
                  )}
                  data-test-id={`${props["data-test-id"]}-${index}-button`}
                  disabled={item.disabled}
                  onClick={() => handleDisclosureChange(close)}
                >
                  {typeof item.title !== "string" ? (
                    item.title
                  ) : (
                    <Body
                      size="m"
                      color={cx({
                        "text-neutral-black":
                          props.theme === "light" ||
                          (!props.theme && !item.disabled),
                        "text-white":
                          props.theme === "dark" && !item.disabled
                      })}
                      className="text-left w-fit"
                      data-test-id={`${props["data-test-id"]}-title`}
                      weight={FontWeightVariant.Bold}
                    >
                      {item.title}
                    </Body>
                  )}
                  <Box vAlignContent="center" hAlignContent="center">
                    {Icons[
                      open
                        ? props.customIcon?.open ?? "ArrowUp"
                        : props.customIcon?.closed ?? "ArrowDown"
                    ]({
                      id: "chevron-open",
                      size: props.variant === "small" ? "s" : "m",
                      className: cx("", {
                        "fill-neutral-200": props.theme === "light",
                        "fill-white": props.theme === "dark",
                        "h-2 w-2": props.variant === "small",
                        "h-4 w-3": props.variant === "big",
                        [props.customIcon?.color || ""]:
                          !!props.customIcon?.color
                      }),
                      "aria-hidden": true
                    })}
                  </Box>
                </Disclosure.Button>
              </Box>

              <Transition
                unmount={false}
                enter="transition-all ease-in duration-200"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-[10000px]"
                leave="transition-all ease-in duration-200"
                leaveFrom="opacity-100 max-h-[10000px]"
                leaveTo="opacity-0 max-h-0"
              >
                <Disclosure.Panel
                  unmount={false}
                  className={cx(
                    "flex flex-col w-full pb-2 px-2",
                    props.classNamePanel
                  )}
                  data-test-id={`${props["data-test-id"]}-panel-${index}`}
                >
                  {typeof item.content !== "string" ? (
                    item.content
                  ) : (
                    <Body
                      weight={FontWeightVariant.Regular}
                      size="m"
                      className={cx({
                        "text-neutral-200": item.disabled,
                        "text-neutral-black":
                          props.theme === "light" ||
                          (!props.theme && !item.disabled),
                        "text-white":
                          props.theme === "dark" && !item.disabled
                      })}
                    >
                      {item.content}
                    </Body>
                  )}
                </Disclosure.Panel>
              </Transition>
            </Box>
          )}
        </Disclosure>
      ))}
    </Box>
  );
};
