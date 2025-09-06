import { formatRating, formatRuntime } from "@/client/utils/card";
import { MovieCardType } from "@/lib/models";
import { Clock, Star } from "lucide-react";
import { Box } from "../../foundations/Box/Box";
import Image from "next/image";
import cx from "classnames";

export function MovieCard(props: MovieCardType) {
  const formattedRuntime = formatRuntime(props.runtime);
  const { filledStars } = formatRating(props.vote_average);
  const formattedVoteCount =
    props.vote_count >= 1000
      ? `${Math.floor(props.vote_count / 1000)}K`
      : props.vote_count.toString();

  return (
    <Box
      column
      className="min-w-[175px] max-w-[275px] border border-black-15  pt-3 px-3 bg-black-10 rounded-[10px] overflow-hidden "
      component="article"
    >
      {/* Movie Poster */}
      <figure className="w-full !z-10 aspect-[3/4] relative rounded-[12px] overflow-hidden">
        <Image
          src={props.image.url}
          alt={props.image.alt || "alt"}
          fill
          className={cx("object-center object-fill absolute")}
          blurDataURL={props.image.url}
        />
      </figure>
      <Box className="p-4 justify-between">
        {/* Runtime */}
        <Box
          vAlignContent="center"
          className="rounded-[51px] gap-1 p-1 border border-black-15 bg-black-08 "
        >
          <Clock className="w-4 h-4 stroke-grey-65" />
          <span className="text-sm font-medium text-grey-65">
            {formattedRuntime}
          </span>
        </Box>
        <Box className="items-center gap-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= filledStars
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm font-medium">
            {formattedVoteCount}
          </span>
        </Box>
      </Box>
    </Box>
  );
}
