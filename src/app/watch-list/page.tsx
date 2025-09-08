"use client";

import { MovieCard } from "@/client/presentation/components/Card/Card";
import { Box } from "@/client/presentation/foundations/Box/Box";
import { Container } from "@/client/presentation/foundations/Container/Container";
import { Display } from "@/client/presentation/foundations/Typography/Display";
import { Button } from "@/components/ui/button";
import { useWatchList } from "@/context/watch-list-context";
import { Trash } from "lucide-react";
export default function WatchList() {
  const { items, clearItems } = useWatchList();
  return (
    <main className="flex flex-col min-h-screen gap-[32px]">
      <Container variant="default" className="py-6 md:py-10 relative">
        <Button
          className="absolute cursor-pointer top-0 right-0 hover:bg-red-45 transition-all"
          onClick={clearItems}
          title="Clear list"
        >
          <Trash size={24} className="stroke-absolute-white" />
        </Button>
        {items.length > 0 ? (
          <Box className="gap-4 w-full" wrap>
            {items.map((item) => (
              <MovieCard key={item.id} {...item} />
            ))}
          </Box>
        ) : (
          <Box
            hAlignContent="center"
            vAlignContent="center"
            className="w-full h-full"
          ><Display size="l" className="text-absolute-white">There are no movies in your watch list</Display></Box>
        )}
      </Container>
    </main>
  );
}
