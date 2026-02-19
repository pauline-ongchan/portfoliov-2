// CONTENT: Edit this file to change site text/data without touching components.

export type LatelyItem = {
  date: string;
  title: string;
  caption: string;
  image?: string;
};

export const lately: LatelyItem[] = [
  {
    date: 'January 2026',
    title: 'Visited Harbin, China',
    caption: 'Ice sculptures, dumplings, and -25°C.',
    image: '/harbin2.JPG'
  },
  {
    date: 'December 2025',
    title: 'Tried Skiing for the First Time',
    caption: 'Spent more time falling than skiing. Still fun.',
    image: '/ski.JPG'
  },
  {
    date: 'November 2025',
    title: 'Pottery Painted',
    caption: "Slightly uneven and asymmetrical. Still cute!",
    image: '/pottery.jpeg'
  },
  {
    date: 'September 2025',
    title: 'Hiked Bridal Falls',
    caption: "Steeper than expected, but worth it.",
    image: '/bridal-falls.jpeg'
  },
  {
    date: 'August 2025',
    title: 'Walked the Seawall',
    caption: "15km of water, wind, and good company.",
    image: '/stanley-park.jpeg'
  },
  {
    date: 'July 2025',
    title: 'Visited Athabasca Glacier',
    caption: "Should have tried the glacier water.",
    image: '/glacier.jpeg'
  },
  {
    date: 'August 2025',
    title: 'Did Grouse Grind',
    caption: "Only mildly regretted it halfway through.",
    image: '/grouse-grind.jpeg'
  },

];
