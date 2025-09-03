import { Body } from "@/client/presentation/foundations/Typography";
import { Icon } from "./Icon";
import IconSet from "./IconSet";
import { IconProps } from "./_iconTypes";

export function IconPackage({
  size,
  className
}: {
  size: IconProps["size"];
  className: string;
}) {
  return (
    <div className="flex flex-col gap-2 flex-wrap p-4">
      {Object.entries(IconSet).map(([key, value]) => {
        return (
          <div key={key} className="flex gap-2 items-center">
            <Icon id={`${key}-icon`} size={size} className={className}>
              {value}
            </Icon>
            <Body size="s" className="text-base-900">
              {key}
            </Body>
          </div>
        );
      })}
    </div>
  );
}
