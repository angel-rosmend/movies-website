import { HeroSSR } from "@/server/components/Hero/HeroSSR";


export default function Home() {
  return (
      <main className="flex flex-col gap-[32px]">
        <HeroSSR movieId={550}/>
       
      </main>
  );
}
