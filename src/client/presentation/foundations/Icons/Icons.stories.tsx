import { Meta } from "@storybook/react";
import { Icon } from "./Icon";
import { IconPackage } from "./IconPackage";


export default {
  title: "Components/Icons",
  component: Icon,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset"
    },
  }
} as Meta;

export const SizeS = () => <IconPackage size="s" className="fill-base-900" />;

export const SizeM = () => <IconPackage size="m" className="fill-base-900" />;

export const SizeL = () => <IconPackage size="l" className="fill-base-900" />;
