import { Container } from "../../foundations/Container/Container";
import { Box } from "../../foundations/Box/Box";
import Image from "next/image";
import cx from "classnames";
import { Display } from "../../foundations/Typography/Display";
import { Body } from "../../foundations/Typography";
import { Button } from "@/components/ui/button";
import { Plus, ThumbsUp, Volume2 } from "lucide-react";
import { HeroType } from "@/lib/models";
import { PlayBtn } from "../Buttons/PlayBtn";

export function Hero(props: HeroType) {
  console.log(props.image.url)
  return (
    <Container
      component="section"
      className="bg-black-08 relative h-fit"
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
            <Body
              component="p"
              size="m"
              className="text-grey-65 hidden sm:block !line-clamp-3 text-center"
            >
              {props.overview}
            </Body>
            <Box className="gap-2">
              <PlayBtn id={props.id} />
              <Button
                variant="secondary"
                className="bg-black-06 border-black-30 cursor-pointer"
                size="sm"
              >
                <Plus fill="#ffffff" size={24} color="#ffffff" />
              </Button>
              <Button
                variant="secondary"
                className="bg-black-06 border-black-30 cursor-pointer"
                size="sm"
              >
                <ThumbsUp size={24} color="#ffffff" />
              </Button>
              <Button
                variant="secondary"
                className="bg-black-06 border-black-30 cursor-pointer"
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
