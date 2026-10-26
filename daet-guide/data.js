/* ============ EDIT YOUR CONTENT HERE ============
   The numbers in the hero (Beaches, Local stories, Travel guides)
   are counted from these lists, so they can never drift out of sync.
   Anything marked sample:true shows a "Sample" badge until you replace it. */

const SPOTS = [
  { name: "Bagasbas Beach", town: "Daet", cat: "beach",
    text: "A long shoreline just outside the town centre, known for surfing and for its lighthouse at the end of the beach." },
  { name: "Calaguas Islands", town: "Vinzons", cat: "beach",
    text: "A group of islands off the coast of Vinzons with wide, pale sand. Plan a boat trip and stay overnight if you can." },
  { name: "Apuao Grande Island", town: "Mercedes", cat: "beach",
    text: "An island day trip from the fishing town of Mercedes. Good for a quiet swim away from the town." },
  { name: "Rizal Monument", town: "Daet", cat: "heritage",
    text: "A white obelisk in the town centre with two gold stars, often described as the first monument to Jose Rizal in the country." }
];

const EVENTS = [
  { name: "Add your first event", when: "Date to be announced", where: "Daet",
    text: "Edit the EVENTS list in data.js with real dates and places.", sample: true }
];

const BLOGS = [
  { title: "A slow morning at Bagasbas", by: "Your name", mins: 4, sample: true,
    text: "Placeholder story. Write about the first surf class, the sound of the shoreline and where to eat after." },
  { title: "Why the Rizal Monument is worth a stop", by: "Your name", mins: 3, sample: true,
    text: "Placeholder story. Add what you learned from the plaques and the people nearby." },
  { title: "Boat day to the Calaguas Islands", by: "Your name", mins: 6, sample: true,
    text: "Placeholder story. Cover the boat ride, costs and what to pack." }
];

const GUIDES = [
  { title: "Getting to Daet", text: "Routes, travel times and where the terminals are." },
  { title: "Beach day checklist", text: "What to bring, when the tide is friendly and where to rinse off." },
  { title: "Where to eat", text: "Local places and what to order. Fill in your favourites." }
];

const FORUMS = [
  { title: "Best time of year to surf Bagasbas?", replies: 0, sample: true },
  { title: "Looking for a boat to the Calaguas Islands", replies: 0, sample: true }
];
