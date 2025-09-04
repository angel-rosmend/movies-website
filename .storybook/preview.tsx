import "../src/styles/globals.css";
import cx from "classnames";
import type { Preview } from "@storybook/react";
import { lato, nunito, nunitoSans } from "../src/client/presentation/foundations/Typography/_fonts";

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  Story => (
    <>
      <style>{`#storybook-root {padding: 0 !important; width: 100%;}`}</style>
      <main className={cx( lato.variable,
          nunitoSans.variable,
          nunito.variable)}>
        <Story />
      </main>
    </>
  )
];

