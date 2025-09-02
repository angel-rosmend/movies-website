import { Meta } from "@storybook/react";
import { TextButton } from "./TextButton";
import { DesignLibraryVersion } from "@/constants/storybook";

export default {
  title: "Foundations/Typography/TextButton",
  component: TextButton,
  tags: ["v1.1.0"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
    docs: {
      description: {
        component: `The <em>TextButton Foundation</em> based on <strong>Ideal Rent - Design Library [${DesignLibraryVersion["v1.1.0"]}]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <TextButton size="m">Button M</TextButton>
      <TextButton size="s">Button S</TextButton>
      <TextButton size="xs">Button XS</TextButton>
    </div>
  );
};
