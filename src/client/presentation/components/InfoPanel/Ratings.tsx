import React from "react";
import { Box } from "../../foundations/Box/Box";
import { Body } from "../../foundations/Typography";
import { StarsRating } from "../Stars/StarsRating";

interface RatingsProps {
  label: string;
  vote_average: number;
}

export function Ratings(props: RatingsProps) {
  const rating = (props.vote_average / 2).toFixed(1);
  return (
    <Box
      column
      className="bg-black-08 border py-1 px-2 border-black-15 rounded-[6px]"
    >
      <Body size="s" className="text-absolute-white">
        {props.label}
      </Body>
      <StarsRating vote_average={props.vote_average} rating={rating} />
    </Box>
  );
}
