import { Meta } from "@storybook/react";
import { Display } from "./Display";

export default {
  title: "Foundations/Typography/Display",
  component: Display,
  tags: ["v1.2.0"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Default = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <Display size="xl">Display XL</Display>
      <Display size="l">Display L</Display>
      <Display size="m">Display M</Display>

      <Display size="l" gradientColor>
        Gradient L tooo much text text
      </Display>
    </div>
  );
};
