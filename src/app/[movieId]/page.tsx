import { HeroSSR } from "@/server/components/Hero/HeroSSR";

type PageProps = {
  params: {
    movieId: string;
  };
};

export default function MovieDetails({ params }: PageProps) {
  return (
      <main className="flex flex-col gap-[32px]">
        <HeroSSR movieId={Number(params.movieId)}/>
      </main>
  );
}
