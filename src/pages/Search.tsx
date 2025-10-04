import { useState } from 'react';
import { Search as SearchIcon, Filter, Download, SortAsc } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockPublications = [
  {
    id: 1,
    title: 'Effects of Microgravity on Bone Density in Long-Duration Spaceflight',
    authors: 'Smith, J., Anderson, K., Martinez, R.',
    year: 2022,
    abstract: 'This study examines the effects of prolonged exposure to microgravity on bone mineral density in astronauts during extended missions aboard the International Space Station...',
    tags: ['Human Physiology', 'Bone Health', 'ISS', 'Long-Duration'],
    relevance: 98,
  },
  {
    id: 2,
    title: 'Plant Growth Responses to Reduced Gravity Environments: Arabidopsis Studies',
    authors: 'Chen, L., Wilson, P., Thompson, M.',
    year: 2022,
    abstract: 'Investigation of plant morphology, gene expression, and growth patterns in Arabidopsis thaliana under simulated and actual microgravity conditions...',
    tags: ['Plant Biology', 'Arabidopsis', 'Gene Expression', 'Microgravity'],
    relevance: 95,
  },
  {
    id: 3,
    title: 'Microbial Behavior and Biofilm Formation in Space Station Environments',
    authors: 'Johnson, R., Davis, A., Kumar, S.',
    year: 2021,
    abstract: 'Analysis of bacterial growth patterns, antibiotic resistance, and biofilm formation in the ISS environment, with implications for crew health and hardware maintenance...',
    tags: ['Microbiology', 'Biofilm', 'ISS', 'Crew Health'],
    relevance: 92,
  },
  {
    id: 4,
    title: 'Cardiovascular Adaptations During Spaceflight: A Longitudinal Study',
    authors: 'Lee, H., Brown, T., Garcia, F.',
    year: 2021,
    abstract: 'Comprehensive examination of cardiovascular system changes including cardiac output, blood pressure regulation, and vascular remodeling during and after spaceflight...',
    tags: ['Human Physiology', 'Cardiovascular', 'Adaptation', 'ISS'],
    relevance: 89,
  },
  {
    id: 5,
    title: 'Circadian Rhythm Disruption in Space: Molecular Mechanisms',
    authors: 'Wang, X., Rodriguez, M., Taylor, S.',
    year: 2020,
    abstract: 'Study of molecular clock gene expression and melatonin production in astronauts, examining the effects of altered light-dark cycles on sleep patterns...',
    tags: ['Human Physiology', 'Circadian Rhythm', 'Gene Expression', 'Sleep'],
    relevance: 87,
  },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

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
              <Link to="/search" className="text-sm font-light text-primary">Search</Link>
              <Link to="/knowledge-graph" className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors">Knowledge Graph</Link>
              <Link to="/insights" className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors">Insights</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-extralight tracking-tight text-foreground">Search Publications</h1>
          <p className="text-foreground/70 font-light">Explore 608 publications with intelligent semantic search</p>
        </div>

        <div className="mb-8 glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
              <input
                type="text"
                placeholder="Search by keywords, topics, organisms, experiments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-background/50 py-3 pl-12 pr-4 text-sm font-light text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="glass flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-light transition-all hover:bg-white/10"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <button className="glass flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-light transition-all hover:bg-white/10">
              <SortAsc className="h-4 w-4" />
              Sort
            </button>
          </div>

          {showFilters && (
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-light text-foreground/70">Research Focus</label>
                <select className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm font-light text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>All Areas</option>
                  <option>Human Physiology</option>
                  <option>Plant Biology</option>
                  <option>Microbiology</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-light text-foreground/70">Year Range</label>
                <select className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm font-light text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>All Years</option>
                  <option>2020-2023</option>
                  <option>2015-2019</option>
                  <option>Before 2015</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-light text-foreground/70">Location</label>
                <select className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm font-light text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>All Locations</option>
                  <option>ISS</option>
                  <option>Space Shuttle</option>
                  <option>Ground-Based</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-light text-foreground/60">
            Found <span className="text-primary">{mockPublications.length}</span> publications
          </p>
          <button className="flex items-center gap-2 text-sm font-light text-foreground/70 transition-colors hover:text-foreground">
            <Download className="h-4 w-4" />
            Export Results
          </button>
        </div>

        <div className="space-y-4">
          {mockPublications.map((pub) => (
            <Link
              key={pub.id}
              to={`/publications/${pub.id}`}
              className="glass-strong block rounded-2xl p-6 transition-all hover:bg-white/10"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-light text-foreground">{pub.title}</h3>
                  <p className="text-sm text-foreground/60 font-light">
                    {pub.authors} · {pub.year}
                  </p>
                </div>
                <div className="ml-4 flex flex-col items-end">
                  <div className="glass rounded-lg px-3 py-1 text-xs font-light text-primary">
                    {pub.relevance}% match
                  </div>
                </div>
              </div>
              <p className="mb-4 text-sm font-light text-foreground/70 line-clamp-2">{pub.abstract}</p>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag, i) => (
                  <span key={i} className="glass rounded-lg px-2 py-1 text-xs font-light text-foreground/60">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
