import { Meta } from "@storybook/react";
import { Heading } from "./Heading";


export default {
  title: "Foundations/Typography/Heading",
  component: Heading,
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
      <Heading size="xl">Heading XL</Heading>
      <Heading size="l">Heading L</Heading>
      <Heading size="m">Heading M</Heading>
      <Heading size="s">Heading S</Heading>
    </div>
  );
};
