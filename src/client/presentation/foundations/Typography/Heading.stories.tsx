import { Meta } from "@storybook/react";
import { Heading } from "./Heading";
import { DesignLibraryVersion } from "@/constants/storybook";

export default {
  title: "Foundations/Typography/Heading",
  component: Heading,
  tags: ["v1.2.0"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
    docs: {
      description: {
        component: `The <em>Heading Foundation</em> based on <strong>Ideal Rent - Design Library [${DesignLibraryVersion["v1.1.0"]}]</strong>.`,
      },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <Heading size="xl">Heading XL</Heading>
      <Heading size="l">Heading L</Heading>
      <Heading size="m">Heading M</Heading>
      <Heading size="s">Heading S</Heading>
      <Heading size="xs">Heading XS</Heading>
    </div>
  );
};
