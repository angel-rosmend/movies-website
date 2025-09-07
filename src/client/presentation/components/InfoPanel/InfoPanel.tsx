import { Calendar, Globe, Star, Film } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Block } from "../Block/Block";
import { Body } from "../../foundations/Typography";
import { Box } from "../../foundations/Box/Box";
import { Ratings } from "./Ratings";
import { CrewMemberType } from "@/lib/models";
import Image from "next/image";
import { getImageUrl } from "@/server/utils/getImageUrl";

interface InfoPanelProps {
  release_date: string;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  genres: Array<{
    id: number;
    name: string;
  }>;
  vote_average: number;
  director: CrewMemberType;
}

export function InfoPanel(props: InfoPanelProps) {
  const releaseYear = new Date(props.release_date).getFullYear();
  console.log(props.director)
  return (
    <Block className="w-full gap-5">
      <Box column className="gap-2">
        <div className="flex items-center gap-2 ">
          <Calendar className="w-4 h-4 stroke-grey-60" />
          <Body size="s" className="text-grey-60">
            Released Year
          </Body>
        </div>
        <Body size="s" className="text-white">
          {releaseYear.toString()}
        </Body>
      </Box>
      <Box column className="gap-2">
        <div className="flex items-center gap-2 text-grey-60">
          <Globe className="w-4 h-4" />
          <Body size="s" className="text-grey-60">
            Available Languages
          </Body>
        </div>
        <div className="flex flex-wrap gap-2">
          {props.spoken_languages.map((language) => (
            <Badge
              key={language.iso_639_1}
              variant="secondary"
              className="bg-black-08 border border-black-15 rounded-[6px] text-white py-1 px-2"
            >
              {language.english_name}
            </Badge>
          ))}
        </div>
      </Box>

      <Box column className="gap-2">
        <div className="flex items-center gap-2 text-sm">
          <Star className="w-4 h-4 stroke-grey-60" />
          <Body size="s" className="text-grey-60">
            Ratings
          </Body>
        </div>
        <Box className="gap-3">
          <Ratings label="IMDb" vote_average={props.vote_average} />
          <Ratings label="Streamvibe" vote_average={props.vote_average} />
        </Box>
      </Box>

      <Box column className="gap-3">
        <div className="flex items-center gap-2 text-sm">
          <Film className="w-4 h-4 stroke-grey-60" />
          <Body size="s" className="text-grey-60">
            Genres
          </Body>
        </div>
        <div className="flex gap-2">
          {props.genres.map((genre) => (
            <Badge
              key={genre.id}
              className="bg-black-08 border border-black-15 rounded-[6px] text-white py-1 px-2"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
      </Box>
      <Box column className="gap-3">
        <Body size="s" className="text-grey-60">
          Director
        </Body>
        <Box className="gap-3 bg-black-08 w-fit p-3 border border-black-15 rounded-[6px]">
          <Avatar className="w-10 h-10 rounded-[6px]">
            {!!props.director ? (
              <Image
                 alt={props.director.name}
                 fill
                src={
                   getImageUrl(`${props.director.profile_path}`, "w185")
                    
                }
              />
            ) : (
              <AvatarFallback className="bg-gray-700 text-white" />
            )}
          </Avatar>
          <Box column>
            <Body size="s" className="text-absolute-white">
              {props.director?.name ?? "Unknown"}
            </Body>
            <Body size="s" className="text-grey-60">
              {props.director?.department || ""}
            </Body>
          </Box>
        </Box>
      </Box>
    </Block>
  );
}
