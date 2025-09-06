import { Meta } from "@storybook/nextjs-vite";
import { MoviesCarousel } from "./Carousel";

export default {
  title: "Components/Carousel",
  component: MoviesCarousel,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Default = () => (
  <div className="p-5 bg-black-10">
    <MoviesCarousel
      items={Array(20).fill({
        title: "Peaky Blinders",
        image: {
          url: "/public/assets/card/movie-card-poster.webp",
          alt: "alt",
        },
        id: 342,
        runtime: 139,
        vote_average: 8.5,
        vote_count: 3678,
      })}
      category="Trneding Now"
    />
  </div>
);
