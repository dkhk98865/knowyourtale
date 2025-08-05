import HeroSection from "@/components/herosection";
import CharacterPreview from "@/components/characterpreview";
import CTAButton from "@/components/ctabutton";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CharacterPreview />
      <div className="flex justify-center py-10">
        <CTAButton href="/quiz" label="Reveal My Character" />
      </div>
    </main>
  );
}
