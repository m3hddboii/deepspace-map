import { Link } from 'react-router-dom';
import { BookOpen, Target, TrendingUp } from 'lucide-react';
import ShaderHero from '../components/ShaderHero';

export default function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <ShaderHero
        title="Unlock NASA's Space Biology Knowledge"
        description="Explore 608 bioscience publications with AI-powered analysis. Discover insights for Moon and Mars missions through intelligent search, knowledge graphs, and gap analysis."
        ctaButtons={[
          { text: 'Explore Dashboard', href: '/dashboard', primary: true },
          { text: 'Search Publications', href: '/search' }
        ]}
        microDetails={['608 Publications', 'Space Biology', 'AI-Powered Analysis']}
      />

      {/* Features Section */}
      <section className="relative py-24 px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extralight tracking-tight text-foreground sm:text-4xl">
              Comprehensive Research Tools
            </h2>
            <p className="text-foreground/70 font-light">
              Everything you need to explore NASA's bioscience research
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="glass-strong rounded-2xl p-8 transition-all hover:bg-white/10">
              <BookOpen className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-light text-foreground">Smart Search</h3>
              <p className="text-sm font-light text-foreground/70">
                Semantic search across 608 publications with AI-powered relevance scoring and intelligent filters.
              </p>
            </div>

            <div className="glass-strong rounded-2xl p-8 transition-all hover:bg-white/10">
              <Target className="mb-4 h-8 w-8 text-secondary" />
              <h3 className="mb-2 text-xl font-light text-foreground">Knowledge Graph</h3>
              <p className="text-sm font-light text-foreground/70">
                Interactive visualization of research connections, topics, and organisms across the entire database.
              </p>
            </div>

            <div className="glass-strong rounded-2xl p-8 transition-all hover:bg-white/10">
              <TrendingUp className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-xl font-light text-foreground">Gap Analysis</h3>
              <p className="text-sm font-light text-foreground/70">
                Identify under-researched areas and mission-critical insights for Moon and Mars exploration.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/dashboard"
              className="inline-block glass-strong rounded-2xl px-8 py-4 text-base font-light tracking-tight text-foreground transition-all duration-300 hover:bg-white/15"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
