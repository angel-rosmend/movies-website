import { Meta } from "@storybook/nextjs-vite";
import { Accordion } from "./Accordion";
export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset"
    },
  }
} as Meta;

export const Small = () => (
  <div className="w-70 p-8">
    <Accordion
      theme="light"
      variant="small"
      id="storybook-accordion"
      items={[
        {
          title: "Accordion Item 1",
          content:
            "Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal."
        }
      ]}
      toggleLabels={{ open: "Show", close: "Hide" }}
    />
  </div>
);

export const Big = () => (
  <div className="w-70 p-8">
    <Accordion
      theme="light"
      variant="big"
      id="storybook-accordion"
      items={[
        {
          title: "Accordion Item 1",
          content:
            "Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal."
        }
      ]}
      toggleLabels={{ open: "Show", close: "Hide" }}
    />
  </div>
);

export const MultipleSmall = () => (
  <div className="w-70 p-8">
    <Accordion
      theme="light"
      variant="small"
      id="storybook-accordion"
      items={Array.from(new Array(5)).map((_, index) => ({
        title: "Accordion Item " + (index + 1),
        content:
          "Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal."
      }))}
      toggleLabels={{ open: "Show", close: "Hide" }}
    />
  </div>
);

export const MultipleBig = () => (
  <div className="w-70 p-8">
    <Accordion
      theme="light"
      variant="big"
      id="storybook-accordion"
      items={Array.from(new Array(5)).map((_, index) => ({
        title: "Accordion Item " + (index + 1),
        content:
          "Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal."
      }))}
      toggleLabels={{ open: "Show", close: "Hide" }}
    />
  </div>
);

export const MultipleSmallWithDisabled = () => (
  <div className="w-70 p-8">
    <Accordion
      theme="light"
      variant="small"
      id="storybook-accordion"
      items={Array.from(new Array(5))
        .map((_, index) => ({
          title: "Accordion Item " + (index + 1),
          content:
            "Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal.",
          disabled: false,
          open: false
        }))
        .concat({
          title: "Accordion Item Disabled",
          content: "Accordion Content",
          disabled: true,
          open: false
        })}
      toggleLabels={{ open: "Show", close: "Hide" }}
    />
  </div>
);

export const MultipleBigWithDisabled = () => (
  <div className="w-70 p-8">
    <Accordion
      theme="light"
      variant="big"
      id="storybook-accordion"
      items={Array.from(new Array(5))
        .map((_, index) => ({
          title: "Accordion Item " + (index + 1),
          content:
            "Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal.",
          disabled: false,
          open: false
        }))
        .concat({
          title: "Accordion Item Disabled",
          content: "Accordion Content",
          disabled: true,
          open: false
        })}
      toggleLabels={{ open: "Show", close: "Hide" }}
    />
  </div>
);

export const Dark = () => (
  <div className="w-70 p-8">
    <Accordion
      theme="dark"
      variant="small"
      classNameWrapper="bg-neutral-black"
      id="storybook-accordion"
      items={Array.from(new Array(5)).map((_, index) => ({
        title: "Accordion Item " + (index + 1),
        content:
          "Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal. Our members are essential to shaping our strategies. Joining as a member provides many benefits, including access to our exclusive members' portal."
      }))}
      toggleLabels={{ open: "Show", close: "Hide" }}
    />
  </div>
);
