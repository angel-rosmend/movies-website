"use client";
import React, { useEffect, useState } from "react";
import { Block } from "../Block/Block";
import { Body } from "../../foundations/Typography";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ReviewType } from "@/lib/models";
import { Box } from "../../foundations/Box/Box";
import { StarsRating } from "../Stars/StarsRating";
import { ControlsButtons } from "../Carousel/Controls";

export interface ReviewsProps {
  items: ReviewType[];
}
export function Reviews(props: ReviewsProps) {
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
    <Block>
      <Body size="s" className="text-grey-65" component="label">
        Reviews
      </Body>
      <div className="gap-2 flex flex-col md:gap-4">
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
                className="basis-full sm:basis-1/2"
              >
                <Box
                  column
                  className="rounded-[12px] h-full p-3 md:p-5 border border-black-15 bg-black-06"
                >
                  <Box className="justify-between">
                    <Body size="l" className="text-absolute-white">
                      {item.author || ""}
                    </Body>
                    <Box className="border p-1.5 border-black-15 bg-black-08 rounded-[51px]">
                      <StarsRating
                        vote_average={item.author_details?.rating || 5}
                        rating={
                          ((item.author_details?.rating || 5) / 2).toString() ||
                          ""
                        }
                      />
                    </Box>
                  </Box>
                  <Body size="m" className="text-grey-60 line-clamp-5">
                    {item.content || ""}
                  </Body>
                </Box>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Box className="w-full" hAlignContent="center">
          <ControlsButtons
            apiControls={api}
            length={props.items.length}
            current={current}
          />
        </Box>
      </div>
    </Block>
  );
}
