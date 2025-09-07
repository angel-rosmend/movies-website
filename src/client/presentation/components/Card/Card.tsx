import { formatCount, formatRating } from "@/client/utils/card";
import { MovieCardType } from "@/lib/models";
import { Eye, Star } from "lucide-react";
import { Box } from "../../foundations/Box/Box";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";
import { ROUTES_PATH } from "@/lib/routes";
import { StarsRating } from "../Stars/StarsRating";

export function MovieCard(props: MovieCardType) {
  const formattedViews = formatCount(props.popularity);
  const formattedVoteCount = formatCount(props.vote_count);

  return (
    <Box
      column
      className="min-w-[175px] max-w-[275px] border border-black-15  pt-3 px-3 bg-black-10 rounded-[10px] overflow-hidden "
      component="article"
    >
      <Link href={ROUTES_PATH.details(props.id)}>
        <figure className="w-full !z-10 aspect-[3/4] relative rounded-[12px] overflow-hidden">
          <Image
            src={props.image.url}
            alt={props.image.alt || "alt"}
            fill
            className={cx("object-center object-fill absolute")}
            blurDataURL={props.image.url}
          />
        </figure>
      </Link>
      <Box className="p-4 justify-between">
        {/* Runtime */}
        <Box
          vAlignContent="center"
          className="rounded-[51px] gap-1 p-1 border border-black-15 bg-black-08 "
        >
          <Eye className="w-4 h-4 stroke-grey-65" />
          <span className="text-sm font-medium text-grey-65">
            {formattedViews}
          </span>
        </Box>
        <StarsRating
          vote_average={props.vote_average}
          rating={formattedVoteCount}
        />
      </Box>
    </Box>
  );
}
