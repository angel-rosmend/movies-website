import { Container } from "../../foundations/Container/Container";
import { Box } from "../../foundations/Box/Box";
import Image from "next/image";
import cx from "classnames";
import { Display } from "../../foundations/Typography/Display";
import { Body, TextButton } from "../../foundations/Typography";
import { Button } from "@/components/ui/button";
import { Play, Plus, ThumbsUp, Volume2 } from "lucide-react";

export interface HeroProps {
  title: string;
  description: string;
  ctaUrl: string;
  ctaLabel: string;
  image: { url: string; alt?: string; title?: string };
}
export function Hero(props: HeroProps) {
  return (
    <Container
      component="section"
      className="bg-black-08 relative h-fit px-10 py-6 md:py-10"
      variant="default"
    >
      <figure className="w-full !z-10 aspect-video relative rounded-[12px] overflow-hidden">
        <Image
          src={props.image.url}
          alt="bg-image-hero"
          fill
          className={cx(
            "object-center border border-black-08 -z-0 object-fill absolute"
          )}
          blurDataURL={props.image.url}
          loader={({ src }) => src}
          priority
        />
        <span className="hero-banner-gradient absolute inset-0" />
        <Box
          hAlignContent="center"
          className="absolute bottom-4 md:bottom-10 py-3 z-20 w-full"
        >
          <Box className="max-w-[70%] gap-2" hAlignContent="center" column>
            <Display size="s" component="h1" className="text-white text-center">
              {props.title}
            </Display>
            <Body component="p" size="m" className="text-grey-60 hidden sm:block line-clamp-4 text-center">
              {props.description}
            </Body>
            <Box className="gap-2">
              <Button
                variant="secondary"
                className="bg-red-45 cursor-pointer"
                size="sm"
              >
                <Play fill="#ffffff" size={24} color="#ffffff" />{" "}
                <TextButton className="text-white" size="m">
                  {props.ctaLabel}
                </TextButton>
              </Button>
              <Button
                variant="secondary"
                className="bg-black-06 border-black-15 cursor-pointer"
                size="sm"
              >
                <Plus fill="#ffffff" size={24} color="#ffffff" />
              </Button>
              <Button
                variant="secondary"
                className="bg-black-06 border-black-15 cursor-pointer"
                size="sm"
              >
                <ThumbsUp size={24} color="#ffffff" />
              </Button>
              <Button
                variant="secondary"
                className="bg-black-06 border-black-15 cursor-pointer"
                size="sm"
              >
                <Volume2 size={24} color="#ffffff" />
              </Button>
            </Box>
          </Box>
        </Box>
      </figure>
    </Container>
  );
}
