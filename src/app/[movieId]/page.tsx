import { Block } from "@/client/presentation/components/Block/Block";
import { MoviesCarousel } from "@/client/presentation/components/Carousel/Carousel";
import { Cast } from "@/client/presentation/components/Cast/Cast";
import { InfoPanel } from "@/client/presentation/components/InfoPanel/InfoPanel";
import { Reviews } from "@/client/presentation/components/Reviews/Reviews";
import { Box } from "@/client/presentation/foundations/Box/Box";
import { Container } from "@/client/presentation/foundations/Container/Container";
import { Body } from "@/client/presentation/foundations/Typography";
import { MovieCategoryEnum } from "@/lib/models";
import { HeroSSR } from "@/server/components/Hero/HeroSSR";
import {
  getCompleteMovieDetails,
  getMoviesByCategory,
} from "@/server/lib/actions/getMoviesData";

type PageProps = {
  params: {
    movieId: string;
  };
};

export default async function MovieDetails({ params }: PageProps) {
  const { movieId } = await params;
  const data = await getCompleteMovieDetails(Number(movieId));
  const relatedFilms = await getMoviesByCategory(MovieCategoryEnum.Popular);

  console.log(data);

  return (
    <main className="flex flex-col gap-[32px]">
      <HeroSSR movieId={Number(movieId)} />
      <Container>
        <Box grow className="w-full gap-6">
          <Box column className="w-full md:w-[70%] gap-[20px] ">
            <Block>
              <Body size="s" className="text-grey-65" component="label">
                Description
              </Body>
              <Body size="s" className="text-absolute-white italic">
                {data.tagline}
              </Body>
              <Body size="s" className="text-absolute-white" component="p">
                {data.overview}
              </Body>
            </Block>
            <InfoPanel
              className="md:!hidden"
              release_date={data.release_date}
              spoken_languages={data.spoken_languages}
              vote_average={data.vote_average}
              genres={data.genres}
              director={data.credits.director!}
            />
            <Cast items={data.credits.cast} />
            <Reviews items={data.reviews} />
          </Box>
          <Box className="w-[30%] !hidden md:!flex">
            <InfoPanel
              release_date={data.release_date}
              spoken_languages={data.spoken_languages}
              vote_average={data.vote_average}
              genres={data.genres}
              director={data.credits.director!}
            />
          </Box>
        </Box>

        <MoviesCarousel
          className="pt-10"
          category="Related films"
          items={relatedFilms}
        />
      </Container>
    </main>
  );
}
