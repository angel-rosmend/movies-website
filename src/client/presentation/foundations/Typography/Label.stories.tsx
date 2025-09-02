import { Meta } from "@storybook/react";
import { DesignLibraryVersion } from "@/constants/storybook";
import { Label } from "./Label";

export default {
  title: "Foundations/Typography/Label",
  component: Label,
  tags: ["v1.1.0"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
    docs: {
      description: {
        component: `The <em>Label Foundation</em> based on <strong>Ideal Rent - Design Library [${DesignLibraryVersion["v1.1.0"]}]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <Label size="m">Label M</Label>
      <Label size="s">Label S</Label>
    </div>
  );
};
