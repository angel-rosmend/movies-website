import { Meta } from "@storybook/react";
import { DesignLibraryVersion } from "@/constants/storybook";
import { Container } from "./Container";
import { Box } from "@fastlooptech/layout-components";

export default {
  title: "Foundations/Container",
  component: Container,
  tags: ["v1.4.0"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Default = () => (
  <Container classNameWrapper="border">
    <Box className="bg-interactive-300 w-full" height={500} grow />
  </Container>
);

export const Large = () => (
  <Container variant="large" classNameWrapper="border">
    <Box className="bg-interactive-300 w-full" height={500} grow />
  </Container>
);

export const Full = () => (
  <Container variant="full" classNameWrapper="border">
    <Box className="bg-interactive-300 w-full" height={500} grow />
  </Container>
);
