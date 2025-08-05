// types/archetypes.ts

export type Archetype = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const archetypes: Archetype[] = [
  {
    id: "dreamer",
    name: "The Dreamer",
    description: "A gentle soul who longs for more than what the eye can see, often found lost in thought and hope.",
    image: "/images/dreamer.jpg",
  },
  {
    id: "trickster",
    name: "The Trickster",
    description: "Quick-witted and mischievous, you shape your world with cleverness, not force.",
    image: "/images/trickster.jpg",
  },
  {
    id: "royal",
    name: "The Lost Royal",
    description: "Destined for greatness yet unaware of their true power, often walking paths of hardship before rising.",
    image: "/images/royal.jpg",
  },
  {
    id: "witch",
    name: "The Witch-in-Training",
    description: "Drawn to secrets, symbols, and unseen truths, always learning and becoming.",
    image: "/images/witch.jpg",
  },
  {
    id: "hunter",
    name: "The Woodsman",
    description: "Grounded and brave, you protect others and live with a strong sense of duty and quiet honor.",
    image: "/images/hunter.jpg",
  },
  {
    id: "beast",
    name: "The Cursed Beast",
    description: "Misunderstood, feared, or forgotten, you hide your tenderness beneath layers of defense.",
    image: "/images/beast.jpg",
  },
  {
    id: "helper",
    name: "The Faithful Helper",
    description: "Not the hero of the tale—but the reason the hero survives. You lift others toward their destinies.",
    image: "/images/helper.jpg",
  },
];
