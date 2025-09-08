"use client";
import { useWatchList } from "@/context/watch-list-context";
import { MovieCardType } from "@/lib/models";
import { CircleCheckBig, Plus } from "lucide-react";
import cx from "classnames";
import {
  TooltipContent,
  Tooltip,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface WatchListButtonProps {
  movie: MovieCardType;
}

export default function WatchListButton(props: WatchListButtonProps) {
  const context = useWatchList();
  const alreadyAdded = context.hasItem(props.movie.id);
  return (
    <Tooltip>
      <TooltipTrigger 
          className={cx("cursor-pointer rounded-[6px] p-1", {
            "bg-black-06 border-black-30": !alreadyAdded,
            "bg-red-45": alreadyAdded,
          })}
      
          onClick={() => (!alreadyAdded ? context.addItem(props.movie) : null)}>
       
          {alreadyAdded ? (
            <CircleCheckBig size={24} color="#ffffff" />
          ) : (
            <Plus fill="#ffffff" size={24} color="#ffffff" />
          )}
       
      </TooltipTrigger>
      <TooltipContent>
        {!alreadyAdded
          ? "Add Movie to watch list"
          : "Movie added to watch list"}
      </TooltipContent>
    </Tooltip>
  );
}
