// CONTENT: Edit this file to update Community section.

export type CommunityFeaturedItem = {
  id: string;
  dateRange: string;
  org: string;
  role: string;
  bullets: string[];
  linkUrl?: string;
  imageSrc?: string;
};

export type CommunityMoreItem = {
  id: string;
  label: string;
  dateRange: string;
  linkUrl?: string;
};

export const featured: CommunityFeaturedItem[] = [
  {
    id: 'biztech',
    dateRange: 'Apr 2024 - Present',
    org: 'UBC BizTech',
    role: 'Experiences Lead',
    bullets: [
      "Led a team of 7 to run 7 flagship events for UBC's largest tech club (900+ members)",
      'Previously: Hackathon Director (2024-2025).'
    ],
    linkUrl: 'https://www.ubcbiztech.com',
    imageSrc: '/biztech.JPEG'
  },
  {
    id: 'front-row',
    dateRange: 'Apr 2024 - Present',
    org: 'Front Row Ventures',
    role: 'Portfolio Management Associate',
    bullets: [
      'Supported 7 portfolio companies at Canada’s leading student-run, university-focused venture capital ($10M pan-Canadian fund).'
    ],
    linkUrl: 'https://frontrow.ventures',
    imageSrc: '/frv.jpg'
  }
];

export const more: CommunityMoreItem[] = [
  {
    id: 'perplexity',
    label: 'Student Ambassador, Perplexity AI',
    dateRange: 'September 2025 - present',
    linkUrl: 'https://www.perplexity.ai/'
  },
  {
    id: 'wtap',
    label: 'Mentee, RBC Women in Tech Advisory Program (WTAP)',
    dateRange: 'September 2025 - Jan 2026'
  },
   {
    id: 'lovable',
    label: 'SheBuilds Volunteer & Attendee, Lovable',
    dateRange: 'December 2025, March 2026',
    linkUrl: 'https://shebuilds.lovable.app/'
  },
  {
    id: 'pmc',
    label: 'Events Director & First Year Rep, UBC Product Management Club',
    dateRange: 'October 2023 - April 2025',
    linkUrl: 'https://ubcpmc.com/'
  },
  {
    id: 'bucs',
    label: 'External Director, BUCS Community Team',
    dateRange: 'May 2024 - April 2025',
    linkUrl: 'https://bucs.cus.ca/'
  },
  {
    id: '180dc',
    label: 'Analyst, 180 Degrees Consulting UBC',
    dateRange: 'August 2024 - December 2024',
    linkUrl: 'https://www.ubc180dc.org'
  },
  {
    id: 'gdsc',
    label: 'First Year Representative, Google Developer Student Clubs',
    dateRange: 'October 2023 – April 2024',
    linkUrl: "https://www.linkedin.com/company/gdsc-ubc/"
  }
];
