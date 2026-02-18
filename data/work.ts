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
    id: 'acme-security-intern',
    company: 'Acme Systems',
    role: 'Security Engineering Intern',
    dates: 'May 2025 - Aug 2025',
    location: 'Vancouver, BC',
    summary: 'Built internal tools to reduce investigation time and improve alert quality.',
    bullets: [
      'Implemented triage automation that reduced duplicate alerts in weekly reviews.',
      'Partnered with product and infra to document incident response runbooks.'
    ],
    tags: ['Security', 'Automation']
  },
  {
    id: 'ubc-product-assistant',
    company: 'UBC Student Team',
    role: 'Product Assistant',
    dates: 'Sep 2024 - Apr 2025',
    location: 'Vancouver, BC',
    summary: 'Supported roadmap planning and shipped improvements to onboarding flows.',
    bullets: [
      'Ran user interviews and translated findings into scoped sprint tickets.',
      'Worked with engineers on launch QA and post-release issue triage.'
    ],
    tags: ['PM', 'UX']
  },
  {
    id: 'freelance-builder',
    company: 'Independent',
    role: 'Freelance Builder',
    dates: '2023 - 2024',
    summary: 'Delivered small web products for student groups and early founders.',
    bullets: [
      'Built and deployed MVP dashboards with analytics and auth.',
      'Set up maintainable component systems and handoff docs.'
    ],
    tags: ['SWE', 'Product']
  }
];
