import { ButtonProps } from "@/stories/Button";
import { IconProps, IconSetType } from ".";
import { Icon } from "./Icon";
import IconSet from "./IconSet";

export const Icons: IconSetType = Object.fromEntries(
  Object.entries(IconSet).map(([key, value]) => [
    [key],
    (props: IconProps) => <Icon {...props}>{value}</Icon>
  ])
);


