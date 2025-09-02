import { Meta } from "@storybook/react";
import { TextLink } from "./TextLink";


export default {
  title: "Foundations/Typography/TextLink",
  component: TextLink,
  tags: ["v1.1.0"],
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
      <TextLink size="m">Link M</TextLink>
      <TextLink size="s">Link S</TextLink>
    </div>
  );
};
