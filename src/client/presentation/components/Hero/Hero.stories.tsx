import { Meta } from "@storybook/nextjs-vite";
import { Hero } from "./Hero";

export default {
  title: "Blocks/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "reset",
    },
  },
} as Meta;

export const Default = () => (
  <Hero
    image={{ url: "/public/assets/hero/hero-bg.webp" }}
    title="The Best Streaming Experience"
    ctaLabel="Play Now"
    ctaUrl="/"
    description="StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch."
  />
);
