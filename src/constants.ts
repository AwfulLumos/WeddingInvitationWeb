// Wedding Event Constants

// Wedding Date & Time
export const WEDDING_DATE = new Date("2026-10-15T16:00:00");
export const WEDDING_DATE_STRING = "October 15, 2026";
export const WEDDING_DAY = "Saturday";
export const CEREMONY_TIME = "4:00 PM";

// Venue Information
export const VENUE_NAME = "Garden Estate";
export const VENUE_ADDRESS = "1234 Rose Garden Lane";
export const VENUE_IMAGE = "https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600";

// Color Palette
export const COLORS = {
  sage: "#BABF94",
  taupe: "#A98B76",
  taupeLight: "#BFA28C",
  cream: "#F3E4C9",
  brownDark: "#4a3f35",
  brownMedium: "#6b6456",
  white: "#ffffff",
} as const;

// RSVP Configuration
export const MAX_GUESTS_PER_RSVP = 5;

// Event Timeline
export const TIMELINE = [
  {
    time: "4:00 PM",
    event: "Ceremony",
    description: "Join us as we exchange our vows in the garden",
  },
  {
    time: "5:00 PM",
    event: "Cocktail Hour",
    description: "Enjoy drinks and hors d'oeuvres on the terrace",
  },
  {
    time: "6:00 PM",
    event: "Reception & Dinner",
    description: "Celebrate with dinner and toasts",
  },
  {
    time: "8:00 PM",
    event: "Dancing",
    description: "Dance the night away under the stars",
  },
  {
    time: "11:00 PM",
    event: "Send-Off",
    description: "Sparkler exit",
  },
] as const;

// Accommodations
export const HOTELS = [
  {
    name: "Garden View Hotel",
    address: "123 Main Street",
    phone: "(555) 123-4567",
    distance: "0.5 miles from venue",
    website: "https://example.com",
    specialRate: "Mention 'Smith-Johnson Wedding' for special rate",
  },
  {
    name: "The Rose Inn",
    address: "456 Oak Avenue",
    phone: "(555) 987-6543",
    distance: "1 mile from venue",
    website: "https://example.com",
    specialRate: "Use code WEDDING2026 for 15% off",
  },
  {
    name: "Downtown Suites",
    address: "789 Elm Street",
    phone: "(555) 456-7890",
    distance: "3 miles from venue",
    website: "https://example.com",
    specialRate: "Group rate available until September 1, 2026",
  },
] as const;

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: "What is the dress code?",
    answer: "Semi-formal attire. We suggest cocktail dresses and suits. The ceremony and reception will be outdoors, so please plan accordingly.",
  },
  {
    question: "Can I bring a plus-one?",
    answer: "Due to venue capacity, we are only able to accommodate guests formally invited on your invitation. If you have any questions, please reach out to us directly.",
  },
  {
    question: "Will the event be indoors or outdoors?",
    answer: "Both the ceremony and reception will be held outdoors in the beautiful garden setting. We have a covered backup plan in case of inclement weather.",
  },
  {
    question: "Are children welcome?",
    answer: "We love your little ones, but we've decided to make this an adults-only celebration. We hope this gives you a chance to enjoy a night off!",
  },
  {
    question: "What dietary restrictions can you accommodate?",
    answer: "Please let us know about any dietary restrictions or allergies in your RSVP. We can accommodate vegetarian, vegan, gluten-free, and other dietary needs.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes! There is complimentary parking at the venue. Valet service will also be available.",
  },
  {
    question: "Will transportation be provided?",
    answer: "We recommend using ride-sharing services or arranging designated drivers. A list of local taxi services is available upon request.",
  },
  {
    question: "What time should I arrive?",
    answer: "Please arrive by 3:45 PM to find your seat before the ceremony begins at 4:00 PM sharp.",
  },
  {
    question: "Is there a gift registry?",
    answer: "Your presence is the greatest gift! If you wish to give something, we have registered at [Registry Name]. Details can be found on this website.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer: "We've hired a professional photographer to capture our special day. We kindly ask that you enjoy the ceremony unplugged and view photos afterward.",
  },
] as const;
