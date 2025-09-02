import { Meta } from "@storybook/react";

import { Container } from "./Container";

export default {
  title: "Foundations/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Default = () => (
  <Container classNameWrapper="border">
    <div className="bg-interactive-300 w-full h-[500px]" />
  </Container>
);

export const Large = () => (
  <Container variant="large" classNameWrapper="border">
    <div className="bg-red-45 w-full h-[500px]" />
  </Container>
);

export const Full = () => (
  <Container variant="full" classNameWrapper="border">
    <div className="bg-red-45 w-full h-[500px]" />
  </Container>
);
