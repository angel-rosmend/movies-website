"use client";
import cx from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "../../foundations/Box/Box";

interface DividerProps {
  "data-test-id"?: string;
  className?: string;
  style?: React.CSSProperties;
  direction?: "horizontal" | "vertical";
  width?: number;
  height?: number;
  thickness?: number;
  maxLength?: number;
  dark?: boolean;
}

export function Divider(props: DividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);

  const [parentDirection, setParentDirection] = useState<"column" | "row">(
    "row"
  );

  useEffect(() => {
    if (props.direction) {
      switch (props.direction) {
        case "horizontal":
          setParentDirection("column");
          break;
        case "vertical":
          setParentDirection("row");
          break;
      }
    } else if (dividerRef.current?.parentElement) {
      const direction = getComputedStyle(dividerRef.current.parentElement)
        .flexDirection as "column" | "row";
      setParentDirection(direction);
    } else {
      console.warn("Divider: parent element has an invalid flex direction");
      setParentDirection("row");
    }
  }, [props.direction, dividerRef]);

  const boxProps = useMemo(() => {
    switch (parentDirection) {
      case "row":
        return {
          width: props.thickness || 1,
          basis: props.thickness ?? 1,
          height: props.maxLength ?? "100%"
        };
      case "column":
        return {
          width: props.maxLength ?? "100%",
          height: props.thickness ?? 1,
          basis: props.thickness || 1
        };
    }
  }, [parentDirection, props.maxLength, props.thickness]);

  return (
    <Box
      ref={dividerRef}
      data-test-id={props["data-test-id"]}
      className={cx(
        { "bg-neutral-100": !props.dark, "bg-neutral-300": props.dark },
        props.className
      )}
      style={props.style}
      {...boxProps}
    />
  );
}
