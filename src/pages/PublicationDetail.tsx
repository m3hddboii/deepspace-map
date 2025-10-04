import { ArrowLeft, Download, Share2, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PublicationDetail() {
  const publication = {
    id: 1,
    title: 'Effects of Microgravity on Bone Density in Long-Duration Spaceflight',
    authors: 'Smith, J., Anderson, K., Martinez, R.',
    year: 2022,
    journal: 'Journal of Space Medicine',
    doi: '10.1234/jsm.2022.001',
    abstract: 'This comprehensive study examines the effects of prolonged exposure to microgravity on bone mineral density in astronauts during extended missions aboard the International Space Station. We analyzed bone density measurements from 45 astronauts over missions ranging from 6 to 12 months.',
    tags: ['Human Physiology', 'Bone Health', 'ISS', 'Long-Duration'],
    organism: 'Humans',
    location: 'International Space Station',
    duration: '12 months',
  };

  const aiSummary = {
    objective: 'To quantify bone mineral density loss in astronauts during extended microgravity exposure and identify potential countermeasures.',
    findings: [
      'Average bone density loss of 1.5% per month in weight-bearing bones',
      'Hip and spine showed greatest susceptibility to bone loss',
      'Exercise countermeasures reduced bone loss by approximately 40%',
      'Recovery period post-flight averaged 18-24 months',
    ],
    implications: 'Critical for Mars missions: Extended exposure requires enhanced countermeasures. Current exercise protocols insufficient for multi-year missions. Pharmacological interventions may be necessary.',
  };

  const relatedPublications = [
    { id: 2, title: 'Muscle Atrophy in Microgravity Environments', year: 2021 },
    { id: 3, title: 'Calcium Metabolism During Spaceflight', year: 2020 },
    { id: 4, title: 'Exercise Countermeasures for Bone Loss', year: 2022 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="glass-strong sticky top-0 z-50 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-16">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-extralight tracking-tight text-foreground">
              NASA <span className="text-gradient-primary">BioScience</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link to="/dashboard" className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/search" className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors">Search</Link>
              <Link to="/knowledge-graph" className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors">Knowledge Graph</Link>
              <Link to="/insights" className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors">Insights</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 md:px-10 lg:px-16">
        <Link to="/search" className="mb-8 inline-flex items-center gap-2 text-sm font-light text-foreground/70 transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Search
        </Link>

        <article className="mb-12">
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-extralight leading-tight tracking-tight text-foreground">
              {publication.title}
            </h1>
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm font-light text-foreground/60">
              <span>{publication.authors}</span>
              <span>·</span>
              <span>{publication.year}</span>
              <span>·</span>
              <span>{publication.journal}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {publication.tags.map((tag, i) => (
                <span key={i} className="glass rounded-lg px-3 py-1 text-xs font-light text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8 flex gap-3">
            <button className="glass flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-light transition-all hover:bg-white/10">
              <Download className="h-4 w-4" />
              Download PDF
            </button>
            <button className="glass flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-light transition-all hover:bg-white/10">
              <Share2 className="h-4 w-4" />
              Share
            </button>
            <button className="glass flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-light transition-all hover:bg-white/10">
              <ExternalLink className="h-4 w-4" />
              View Original
            </button>
          </div>

          <div className="glass-strong mb-8 rounded-2xl p-8">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-extralight tracking-tight text-foreground">AI Summary</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-light uppercase tracking-wide text-foreground/60">Research Objective</h3>
                <p className="font-light text-foreground/90">{aiSummary.objective}</p>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-light uppercase tracking-wide text-foreground/60">Key Findings</h3>
                <ul className="space-y-2">
                  {aiSummary.findings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-light text-foreground/90">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-light uppercase tracking-wide text-foreground/60">Implications for Space Exploration</h3>
                <p className="font-light text-foreground/90">{aiSummary.implications}</p>
              </div>
            </div>
          </div>

          <div className="glass-strong mb-8 rounded-2xl p-8">
            <h2 className="mb-6 text-2xl font-extralight tracking-tight text-foreground">Publication Details</h2>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="mb-1 text-sm font-light text-foreground/60">Organism Studied</dt>
                <dd className="font-light text-foreground">{publication.organism}</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm font-light text-foreground/60">Experiment Location</dt>
                <dd className="font-light text-foreground">{publication.location}</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm font-light text-foreground/60">Study Duration</dt>
                <dd className="font-light text-foreground">{publication.duration}</dd>
              </div>
              <div>
                <dt className="mb-1 text-sm font-light text-foreground/60">DOI</dt>
                <dd className="font-light text-primary">{publication.doi}</dd>
              </div>
            </dl>
          </div>

          <div className="glass-strong rounded-2xl p-8">
            <h2 className="mb-4 text-2xl font-extralight tracking-tight text-foreground">Abstract</h2>
            <p className="font-light leading-relaxed text-foreground/80">{publication.abstract}</p>
          </div>
        </article>

        <aside className="glass-strong rounded-2xl p-8">
          <h3 className="mb-6 text-xl font-extralight tracking-tight text-foreground">Related Publications</h3>
          <div className="space-y-3">
            {relatedPublications.map((related) => (
              <Link
                key={related.id}
                to={`/publications/${related.id}`}
                className="glass block rounded-xl p-4 transition-all hover:bg-white/10"
              >
                <h4 className="mb-1 font-light text-foreground">{related.title}</h4>
                <p className="text-sm font-light text-foreground/60">{related.year}</p>
              </Link>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
