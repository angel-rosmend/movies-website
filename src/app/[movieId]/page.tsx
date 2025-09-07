import { Block } from "@/client/presentation/components/Block/Block";
import { Cast } from "@/client/presentation/components/Cast/Cast";
import { InfoPanel } from "@/client/presentation/components/InfoPanel/InfoPanel";
import { Box } from "@/client/presentation/foundations/Box/Box";
import { Container } from "@/client/presentation/foundations/Container/Container";
import { Body } from "@/client/presentation/foundations/Typography";
import { HeroSSR } from "@/server/components/Hero/HeroSSR";
import { getCompleteMovieDetails } from "@/server/lib/actions/getMoviesData";

type PageProps = {
  params: {
    movieId: string;
  };
};

export default async function MovieDetails({ params }: PageProps) {
  const { movieId } = await params;
  const data = await getCompleteMovieDetails(Number(movieId));

  console.log(data)

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
            <Cast items={data.credits.cast}/>
          </Box>
          <Box className="w-[30%]">
            <InfoPanel
              release_date={data.release_date}
              spoken_languages={data.spoken_languages}
              vote_average={data.vote_average}
              genres={data.genres}
              director={data.credits.director!}
            />
          </Box>
        </Box>
      </Container>
    </main>
  );
}
