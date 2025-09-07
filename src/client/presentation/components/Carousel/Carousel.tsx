"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Heading } from "../../foundations/Typography";
import { MovieCardType } from "@/lib/models";
import { MovieCard } from "../Card/Card";
import { Box } from "../../foundations/Box/Box";
import { ControlsButtons } from "./Controls";
import cx from "classnames";

export interface MoviesCarouselProps {
  category: string;
  items: MovieCardType[];
  className?: string;
}

export function MoviesCarousel(props: MoviesCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={cx("w-full", props.className)}>
      <Box vAlignContent="center" className="flex justify-between mb-8">
        <Heading className="text-white" size="xl">
          {props.category}
        </Heading>
        <ControlsButtons
          apiControls={api}
          current={current}
          length={props.items.length}
        />
      </Box>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {props.items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <MovieCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
