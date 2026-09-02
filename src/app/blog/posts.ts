export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "leaving-more-room",
    date: "May 14, 2026",
    title: "A case for leaving more room",
    category: "Process",
    excerpt: "Why restraint can make an idea feel larger, clearer, and more generous.",
    body: [
      "Good design does not have to fill every available space. Sometimes the most useful thing a layout can do is step back and let an idea breathe.",
      "Room gives the eye a place to land. It also gives people time to notice what matters, make a connection, and bring a little of themselves to the experience.",
    ],
  },
  {
    slug: "making-things-feel-inevitable",
    date: "April 02, 2026",
    title: "Notes on making things feel inevitable",
    category: "Perspective",
    excerpt: "A few observations on the quiet craft behind work that feels obvious in hindsight.",
    body: [
      "The most satisfying solutions often arrive with a sense of recognition. They feel less like a clever trick and more like the answer was waiting there all along.",
      "That feeling comes from patient questions, clear constraints, and enough attention to remove everything that does not belong.",
    ],
  },
  {
    slug: "well-placed-pause",
    date: "February 19, 2026",
    title: "The quiet power of a well-placed pause",
    category: "Process",
    excerpt: "What pauses can teach us about rhythm, attention, and making digital work feel human.",
    body: [
      "A pause is not an absence of communication. It is a way of giving the next thought more weight.",
      "In interfaces, a pause might be a margin, a transition, or a moment where an interaction does not rush to explain itself. Small decisions like these can change the tone of an entire product.",
    ],
  },
];
