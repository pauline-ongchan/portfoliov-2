// CONTENT: Edit this file to change Places stamps + text + optional photos.

export type PlaceCategory = 'lived' | 'traveled';

export type Place = {
  id: string;
  label: string;
  category: PlaceCategory;
  date?: string;
  code?: string;
  blurb?: string;
  note: string;
  photo?: string;
};

export const places: Place[] = [
  {
    id: 'vancouver',
    label: 'Vancouver, Canada',
    category: 'lived',
    date: '2022 - 2026',
    code: 'YVR',
    blurb: 'Coastal calm, lots of rain walks.',
    note: 'TODO: A short reflection about living and learning here.',
    photo: ''
  },
  {
    id: 'manila',
    label: 'Manila, Philippines',
    category: 'lived',
    date: '2018 - 2022',
    code: 'MNL',
    blurb: 'Family roots and early curiosity.',
    note: 'TODO: A short reflection about growing up and community here.',
    photo: ''
  },
  {
    id: 'tokyo',
    label: 'Tokyo, Japan',
    category: 'traveled',
    date: 'Apr 2025',
    code: 'TYO',
    blurb: 'Quiet systems and small delights.',
    note: 'TODO: A short reflection about the visit and what stood out.',
    photo: '/photos/tokyo.jpg'
  },
  {
    id: 'london',
    label: 'London, UK',
    category: 'traveled',
    date: 'Sep 2024',
    code: 'LHR',
    blurb: 'Museums, long walks, new ideas.',
    note: 'TODO: A short reflection about the visit and people met.',
    photo: '/photos/london.jpg'
  },
  {
    id: 'singapore',
    label: 'Singapore',
    category: 'traveled',
    date: '2024',
    code: 'SIN',
    blurb: 'Prototype sprint with peers.',
    note: 'TODO: A short reflection about the collaboration.',
    photo: '/photos/singapore.jpg'
  }
];
