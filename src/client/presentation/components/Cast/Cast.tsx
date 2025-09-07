import React from "react";
import { Body } from "../../foundations/Typography";
import { Block } from "../Block/Block";
import { Box } from "../../foundations/Box/Box";
import { CastMemberType } from "@/lib/models";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getImageUrl } from "@/server/utils/getImageUrl";
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
          <Avatar key={item.id} className="size-[50px] md:size-[100px] rounded-[6px]">
            <AvatarImage src={getImageUrl(item.profile_path, "w342")} />
          </Avatar>
        ))}
      </Box>
    </Block>
  );
}
