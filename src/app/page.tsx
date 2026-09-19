import { Hero } from "@/components/Hero";
import { Portrait } from "@/components/Portrait";
import { Wordmark } from "@/components/Wordmark";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-svh bg-paper pb-24">
      <Hero />
      <Portrait />
      <Wordmark />
      <Footer />
    </main>
  );
}
