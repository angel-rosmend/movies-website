import { Meta } from "@storybook/react/";
import { Divider } from "./Divider";
import { Box } from "../../foundations/Box/Box";

export default {
  title: "Components/Divider",
  component: Divider
} as Meta;

export const Horizontal = () => (
  <Box width={300} height={300} column>
    <Divider />
  </Box>
);
export const Vertical = () => (
  <Box width={300} height={300}>
    <Divider />
  </Box>
);
export const HorizontalDark = () => (
  <Box
    width={300}
    height={300}
    column
    vAlignContent="center"
    className="bg-neutral-black"
  >
    <Divider dark />
  </Box>
);
export const VerticalDark = () => (
  <Box
    width={300}
    height={300}
    className="bg-neutral-black"
    hAlignContent="center"
  >
    <Divider dark direction="vertical" />
  </Box>
);

export const HorizontalCustom = () => (
  <Box width={300} height={300} column>
    <Divider className="bg-teal-700" />
  </Box>
);
export const VerticalCustom = () => (
  <Box width={300} height={300} hAlignContent="center">
    <Divider className="bg-teal-700" />
  </Box>
);
