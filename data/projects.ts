// CONTENT: Edit this file to change site text/data without touching components.
// CONTENT: Add project images with `images: ['/projects/example.jpg']`.
// CONTENT: Edit title/subtitle/isWinner here. Left list only shows WINNER if isWinner=true.

export type ProjectLinkSet = {
  github?: string;
  demo?: string;
  devpost?: string;
  figma?: string;
  slides?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  isWinner?: boolean;
  overview: string;
  images?: string[];
  tech: string[];
  links: ProjectLinkSet;
};

export const projects: Project[] = [
  {
    slug: 'what-was-that',
    title: 'What Was That',
    subtitle: 'nwHacks • January 2026',
    isWinner: false,
    overview:
      'A safety app designed to help people who are hard of hearing stay aware at home. It turns critical sounds into alerts and includes a simple check-in system for additional support.',
    images: [
      '/what-was-that.png'
    ],
    tech: ['React', 'TypeScript', 'Expo', 'Xcode'],
    links: {
      github: 'https://github.com/jjohngrey/what-was-that',
      devpost: 'https://devpost.com/software/what-was-that',
    }
  },
  {
    slug: 'bond',
    title: 'LinkedBond',
    subtitle: 'WTAP Hackathon • January 2026',
    overview:
      'A LinkedIn-native mentorship feature that enables skill-based matching, structured outreach, and easier scheduling.',
    images: ["/bond.png"],
    tech: ['FigmaMake', 'TypeScript'],
    links: {
      github: 'https://github.com/venniseho/WTAP',
      slides: 'https://www.figma.com/deck/qnyxdGWLfb3gXMEkCONG91',
      demo: 'https://bright-warm-06898597.figma.site/'
    }
  },
  {
    slug: 'kaya',
    title: 'Kaya Learning',
    subtitle: 'SheBuilds Lovable Hackathon • December 2025',
    overview:
      'An offline-first education platform built for shared tablets in low-connectivity communities.',
    images: ["/kaya.png"],
    tech: ['Lovable', 'Supabase', 'TypeScript'],
    links: {
      github: 'https://github.com/pauline-ongchan/kayalearning',
      demo: 'https://kayalearning.lovable.app/'
    }
  },
  {
    slug: 'sudo',
    title: 'Sudo',
    subtitle: '1st Place • Product Challenge • November 2025',
    isWinner: true,
    overview:
      'An AI-powered operating system concept for venture capital workflows.',
    images: ["/sudo.png"],
    tech: ['Figma'],
    links: {
      figma: 'https://www.figma.com/design/1X5GpOGdX8me6b2H2iyMJd/Product-Heist-DUCS-TEAM6?node-id=160-7420&t=c1KqDHNASxABopr5-1',
      demo: 'https://www.figma.com/proto/1X5GpOGdX8me6b2H2iyMJd/Product-Heist-DUCS-TEAM6?node-id=19-2&t=PKibWEU6110Bbhhu-1',
      slides: 'https://www.figma.com/deck/EfzuqEHHGbwiaqkyE9de8P'
    }
  },
];

// 1st Place • Best Use of Livepeer • nwHacks 2025