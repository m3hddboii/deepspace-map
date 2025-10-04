import ShaderHero from '@/components/ShaderHero';

export default function Landing() {
  return (
    <main>
      <ShaderHero
        title="Unlock NASA's Space Biology Knowledge"
        description="Explore 608 bioscience publications with AI-powered analysis. Discover insights for Moon and Mars missions through intelligent search, knowledge graphs, and gap analysis."
        badgeText="NASA Bioscience"
        badgeLabel="Research"
        ctaButtons={[
          { text: "Explore Dashboard", href: "/dashboard", primary: true },
          { text: "Search Publications", href: "/search" }
        ]}
        microDetails={["608 Publications", "Space Biology", "AI-Powered Analysis"]}
      />
    </main>
  );
}
