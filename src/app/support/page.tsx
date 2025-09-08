import { Container } from "@/client/presentation/foundations/Container/Container";
import { Display } from "@/client/presentation/foundations/Typography/Display";

export default function Support() {
  return (
    <main className="flex flex-col min-h-screen gap-[32px]">
      <Container variant="default" className="py-6 md:py-10 relative">
        <Display size="l" className="text-absolute-white">
          Support Page
        </Display>
      </Container>
    </main>
  );
}
