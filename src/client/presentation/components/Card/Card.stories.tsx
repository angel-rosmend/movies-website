import { Meta } from "@storybook/nextjs-vite";
import { MovieCard } from "./Card";

export default {
  title: "Components/Card",
  component: MovieCard,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Default = () => (
  <MovieCard
    image={{ url: "/public/assets/card/movie-card-poster.webp", alt: "alt" }}
    id={342}
    popularity={139}
    vote_average={8.5}
    vote_count={3678}
  />
);
