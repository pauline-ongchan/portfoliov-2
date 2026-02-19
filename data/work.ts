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
    role: 'Incoming Software Engineering Intern',
    dates: 'Summer 2026',
    location: 'Vancouver, BC',
    summary: '',
    bullets: [
    ],
    tags: ['SWE']
  },
  {
    id: 'hsone',
    company: 'Henry Schein One Canada',
    role: 'Product Management Intern',
    dates: 'May 2025 - December 2025',
    location: 'Vancouver, BC',
    summary: 'Worked on product discovery and early feature exploration for academic healthcare software.',
    bullets: [
      
    ],
    tags: ['PM']
  },
  {
    id: 'zetl',
    company: 'Zetl',
    role: 'Product Growth and Marketing Intern',
    dates: 'April 2024 - August 2024',
    location: 'Singapore (remote)',
    summary: 'Worked on partnership positioning, product decks, and early marketing initiatives.',
    bullets: [
    ],
    tags: ['Growth', 'Design']
  }
];
