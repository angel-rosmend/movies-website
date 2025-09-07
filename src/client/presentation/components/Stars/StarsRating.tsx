import React from "react";
import { Box } from "../../foundations/Box/Box";
import { Star } from "lucide-react";
import { formatRating } from "@/client/utils/card";
import { Body } from "../../foundations/Typography";

export interface StarsRatingProps {
  vote_average: number;
  rating: string;
}

export function StarsRating(props: StarsRatingProps) {
  const { filledStars } = formatRating(props.vote_average);
  return (
    <Box className="items-center gap-2">
      <Box className=" items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= filledStars ? "fill-red-500 text-red-500" : "fill-grey-65 text-grey-65"
            }`}
          />
        ))}
      </Box>
      <Body size="xs" className="text-grey-60">
        {props.rating}
      </Body>
    </Box>
  );
}
