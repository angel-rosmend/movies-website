import { Meta } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

export default {
  title: "Blocks/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Default = () => <div className="h-screen bg-black-08">
     <Navigation/>
</div>
