import React from "react";
import { Body } from "../../foundations/Typography";
import { Block } from "../Block/Block";
import { Box } from "../../foundations/Box/Box";
import { CastMemberType } from "@/lib/models";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getImageUrl } from "@/server/utils/getImageUrl";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export interface CastProps {
  items: CastMemberType[];
}
export function Cast(props: CastProps) {
  return (
    <Block>
      <Body size="s" className="text-grey-65" component="label">
        Cast
      </Body>
      <Box wrap className="gap-2 md:gap-4">
        {props.items.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger>
              <Avatar
                title={item.name}
                className="size-[50px] md:size-[100px] rounded-[6px]"
              >
                <AvatarImage src={getImageUrl(item.profile_path, "w342")} />
              </Avatar>
            </TooltipTrigger>
            <TooltipContent className="">
              <Body size="m" className="text-absolute-white">
                {item.name}
              </Body>
            </TooltipContent>
          </Tooltip>
        ))}
      </Box>
    </Block>
  );
}
