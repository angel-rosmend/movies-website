import { Meta } from "@storybook/react";
import { Body } from "./Body";
import { FontWeightVariant } from "./_fonts";

export default {
  title: "Foundations/Typography/Body",
  component: Body,
  tags: ["v1.2.0"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Regular = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <Body size="l" weight={FontWeightVariant.Regular}>
        Body L Regular
      </Body>
      <Body size="m" weight={FontWeightVariant.Regular}>
        Body M Regular
      </Body>
      <Body size="s" weight={FontWeightVariant.Regular}>
        Body S Regular
      </Body>
    </div>
  );
};

export const Bold = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <Body size="l" weight={FontWeightVariant.Bold}>
        Body L Bold
      </Body>
      <Body size="m" weight={FontWeightVariant.Bold}>
        Body M Bold
      </Body>
      <Body size="s" weight={FontWeightVariant.Bold}>
        Body S Bold
      </Body>
    </div>
  );
};
