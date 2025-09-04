import { Meta } from "@storybook/nextjs-vite";
import { TextButton } from "./TextButton";


export default {
  title: "Foundations/Typography/TextButton",
  component: TextButton,
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
      <TextButton size="m">Button M</TextButton>
      <TextButton size="s">Button S</TextButton>
    </div>
  );
};
