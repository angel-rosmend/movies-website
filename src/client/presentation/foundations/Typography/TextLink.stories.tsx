import { Meta } from "@storybook/react";
import { TextLink } from "./TextLink";
import { DesignLibraryVersion } from "@/constants/storybook";

export default {
  title: "Foundations/Typography/TextLink",
  component: TextLink,
  tags: ["v1.1.0"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
    docs: {
      description: {
        component: `The <em>TextLink Foundation</em> based on <strong>Ideal Rent - Design Library [${DesignLibraryVersion["v1.1.0"]}]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <TextLink size="m">Link M</TextLink>
      <TextLink size="s">Link S</TextLink>
      <TextLink size="xs">Link XS</TextLink>
    </div>
  );
};
