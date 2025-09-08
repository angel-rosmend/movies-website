import { MoviesCarousel } from "@/client/presentation/components/Carousel/Carousel";
import { Container } from "@/client/presentation/foundations/Container/Container";
import { Badge } from "@/components/ui/badge";
import { MovieCategoryEnum } from "@/lib/models";
import { HeroSSR } from "@/server/components/Hero/HeroSSR";
import { getMoviesByCategory } from "@/server/lib/actions/getMoviesData";

export default async function Home() {
    const topRatedMovieItems = await getMoviesByCategory(
    MovieCategoryEnum.TopRated
  );
  const nowPlayingMovieItems = await getMoviesByCategory(
    MovieCategoryEnum.NowPlaying
  );
  const upcomingMovieItems = await getMoviesByCategory(
    MovieCategoryEnum.Upcoming
  );

  return (
    <main className="flex flex-col w-full gap-[32px]">
      <HeroSSR movieId={550} />
      <Container
        classNameWrapper="py-8"
        className="rounded-[12px] relative flex flex-col gap-8 md:gap-15 px-2 sm:px-3 md:px-6 lg:px-8 border border-black-15"
      >
        <Badge variant="destructive" className="bg-red-45 rounded-[8px] p-2.5 absolute left-8 top-[-16px]">Categories</Badge>
        <MoviesCarousel category="Top Rated" items={topRatedMovieItems} />
        <MoviesCarousel category="Now Playing" items={nowPlayingMovieItems} />
        <MoviesCarousel category="Upcomming" items={upcomingMovieItems} />
      </Container>
    </main>
  );
}
