// CONTENT: Edit this file to update Work timeline entries.

export type WorkEntry = {
  id: string;
  company: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const work: WorkEntry[] = [
    {
    id: 'rbc',
    company: 'RBC',
    role: 'Software Engineering Intern',
    dates: 'May 2026 – now',
    location: 'Vancouver',
    summary: 'Internal data products and workflow automation tools for non-technical stakeholders.',
    bullets: [
    ],
    tags: ['SWE']
  },
  {
    id: 'hsone',
    company: 'Henry Schein One Canada',
    role: 'Product Management Intern',
    dates: 'May – Dec 2025',
    location: 'Vancouver',
    summary: 'Product discovery and early feature exploration for academic healthcare software.',
    bullets: [
      
    ],
    tags: ['PM']
  },
  {
    id: 'zetl',
    company: 'Zetl',
    role: 'Product Growth and Marketing Intern',
    dates: 'Apr – Aug 2024',
    location: 'Singapore (remote)',
    summary: 'Partnership positioning, product decks, early marketing.',
    bullets: [
    ],
    tags: ['Growth', 'Design']
  }
];
