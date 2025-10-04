import { TrendingUp, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const trends = [
  { title: 'Human Physiology Research', count: 180, change: '+12%', period: 'last 3 years' },
  { title: 'Plant Biology Studies', count: 145, change: '+8%', period: 'last 3 years' },
  { title: 'Microbiology Focus', count: 125, change: '+15%', period: 'last 3 years' },
];

const gaps = [
  { area: 'Long-Duration Radiation Effects', severity: 'high', publications: 12, needed: 50 },
  { area: 'Mars Soil Microbiology', severity: 'high', publications: 8, needed: 40 },
  { area: 'Deep Space Plant Growth', severity: 'medium', publications: 25, needed: 60 },
  { area: 'Lunar Dust Impact on Biology', severity: 'medium', publications: 18, needed: 45 },
];

const consensus = [
  { topic: 'Bone Density Loss', agreement: 95, studies: 48 },
  { topic: 'Muscle Atrophy Patterns', agreement: 92, studies: 42 },
  { topic: 'Plant Growth Orientation', agreement: 88, studies: 35 },
  { topic: 'Microbial Behavior Changes', agreement: 85, studies: 38 },
];

const actionable = [
  {
    title: 'Critical Countermeasure Gap',
    description: 'Exercise protocols show 60% effectiveness but Mars missions require 90%+. Enhanced countermeasures needed.',
    priority: 'high',
    publications: 32,
  },
  {
    title: 'Radiation Shielding Research',
    description: 'Limited data on biological effects of deep space radiation. Critical for crew safety on Mars missions.',
    priority: 'high',
    publications: 15,
  },
  {
    title: 'Closed-Loop Life Support',
    description: 'Plant growth systems show promise but require optimization for long-duration missions.',
    priority: 'medium',
    publications: 28,
  },
];

export default function Insights() {
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
              <Link to="/insights" className="text-sm font-light text-primary">Insights</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-extralight tracking-tight text-foreground">Research Insights</h1>
          <p className="text-foreground/70 font-light">AI-powered analysis of trends, gaps, and mission-critical findings</p>
        </div>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-extralight tracking-tight text-foreground">Research Trends</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {trends.map((trend, i) => (
              <div key={i} className="glass-strong rounded-2xl p-6">
                <div className="mb-2 text-3xl font-extralight tracking-tight text-foreground">{trend.count}</div>
                <div className="mb-2 font-light text-foreground/80">{trend.title}</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-light text-primary">{trend.change}</span>
                  <span className="text-sm font-light text-foreground/60">{trend.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-extralight tracking-tight text-foreground">Knowledge Gaps</h2>
          </div>
          <div className="glass-strong rounded-2xl p-8">
            <div className="space-y-4">
              {gaps.map((gap, i) => (
                <div key={i} className="glass rounded-xl p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-light text-foreground">{gap.area}</h3>
                    <span className={`glass rounded-lg px-3 py-1 text-xs font-light ${gap.severity === 'high' ? 'text-primary' : 'text-secondary'}`}>
                      {gap.severity === 'high' ? 'High Priority' : 'Medium Priority'}
                    </span>
                  </div>
                  <div className="mb-2 flex items-center gap-4 text-sm font-light text-foreground/60">
                    <span>{gap.publications} current publications</span>
                    <span>·</span>
                    <span>{gap.needed} needed for comprehensive coverage</span>
                  </div>
                  <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(gap.publications / gap.needed) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-secondary" />
            <h2 className="text-2xl font-extralight tracking-tight text-foreground">Areas of Scientific Consensus</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {consensus.map((item, i) => (
              <div key={i} className="glass-strong rounded-2xl p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-light text-foreground">{item.topic}</h3>
                  <span className="text-2xl font-extralight text-secondary">{item.agreement}%</span>
                </div>
                <p className="text-sm font-light text-foreground/60">{item.studies} supporting studies</p>
                <div className="mt-4 relative h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-secondary"
                    style={{ width: `${item.agreement}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-extralight tracking-tight text-foreground">Mission-Critical Insights</h2>
          </div>
          <div className="space-y-6">
            {actionable.map((insight, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-xl font-light text-foreground">{insight.title}</h3>
                  <span className={`glass rounded-lg px-3 py-1 text-xs font-light ${insight.priority === 'high' ? 'text-primary' : 'text-secondary'}`}>
                    {insight.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                  </span>
                </div>
                <p className="mb-4 font-light text-foreground/80">{insight.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-light text-foreground/60">
                    Based on {insight.publications} publications
                  </span>
                  <Link
                    to="/search"
                    className="text-sm font-light text-primary hover:text-primary/80 transition-colors"
                  >
                    View Research →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
