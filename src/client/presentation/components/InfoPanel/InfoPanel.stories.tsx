import { Meta } from "@storybook/nextjs-vite";
import { InfoPanel } from "./InfoPanel";

export default {
  title: "Blocks/InfoPanel",
  component: InfoPanel,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Default = () => <InfoPanel  release_date={"1999-10-15"} spoken_languages={[
    {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
    }
]}
genres={[
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 53,
        "name": "Thriller"
    }
]}
vote_average={8.4}
title="Fight Club"
/>