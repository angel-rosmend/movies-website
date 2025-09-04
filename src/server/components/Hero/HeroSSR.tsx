import { Hero } from "@/client/presentation/components/Hero/Hero";
import { getMovieDetails } from "@/server/lib/actions/getMoviesData";
import { getImageUrl } from "@/server/utils/getImageUrl";

interface HeroSSRProps {
  movieId: number;
}

export async function HeroSSR(props: HeroSSRProps) {
  const response = await getMovieDetails(props.movieId);

  const data = {
    title: response.title,
    overview: response.overview,
    id: response.id,
    image: {
      url: getImageUrl(response.backdrop_path, "original"),
      alt: response.title,
      title: response.title,
    },
  };
  return <Hero {...data} />;
}
