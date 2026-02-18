// CONTENT: Edit this file to change site text/data without touching components.

export type ProjectLinkSet = {
  github?: string;
  demo?: string;
  devpost?: string;
  figma?: string;
};

export type Project = {
  slug: string;
  title: string;
  overview: string;
  context: string;
  approach: string;
  learned: string;
  images?: string[];
  tech: string[];
  links: ProjectLinkSet;
};

export const projects: Project[] = [
  {
    slug: 'northstar',
    title: 'Northstar Planner',
    overview:
      'TODO: Short overview of the problem and the outcome in 2-3 sentences.',
    context:
      'TODO: What prompted the work? Team, timeframe, and constraints.',
    approach:
      'TODO: How did you break down the work? Research, prototyping, and builds.',
    learned:
      'TODO: What did you learn? Product lessons, technical wins, or tradeoffs.',
    images: [
      '/projects/northstar-1.jpg'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    links: {
      github: 'https://github.com/pauline/northstar',
      demo: 'https://northstar.example.com',
      figma: 'https://figma.com/file/placeholder'
    }
  },
  {
    slug: 'signal',
    title: 'Signal City',
    overview:
      'TODO: Short overview of the problem and the outcome in 2-3 sentences.',
    context:
      'TODO: What prompted the work? Team, timeframe, and constraints.',
    approach:
      'TODO: How did you break down the work? Research, prototyping, and builds.',
    learned:
      'TODO: What did you learn? Product lessons, technical wins, or tradeoffs.',
    images: [],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Mapbox'],
    links: {
      github: 'https://github.com/pauline/signal-city',
      demo: 'https://signal.example.com',
      devpost: 'https://devpost.com/software/placeholder'
    }
  },
  {
    slug: 'studio',
    title: 'Studio Scheduler',
    overview:
      'TODO: Short overview of the problem and the outcome in 2-3 sentences.',
    context:
      'TODO: What prompted the work? Team, timeframe, and constraints.',
    approach:
      'TODO: How did you break down the work? Research, prototyping, and builds.',
    learned:
      'TODO: What did you learn? Product lessons, technical wins, or tradeoffs.',
    images: [],
    tech: ['Next.js', 'Prisma', 'Tailwind', 'Stripe'],
    links: {
      github: 'https://github.com/pauline/studio-scheduler'
    }
  }
];
