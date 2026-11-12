// Blog ke articles. Naya article jodna ho to is list me ek object aur daal do (sabse naya sabse upar).
// slug = URL me dikhne wala naam (/blog/<slug>), chhote akshar aur "-" ke saath, har article ka alag.
// content me blocks: { type: "p", text } paragraph, { type: "h2", text } heading, { type: "list", items: [] } bullet list,
// { type: "quote", text } highlight wali line.
// NOTE: Abhi ye sample articles hain. Client ke asli articles aane par inhe badal dena.
const blog = [
  {
    slug: "planning-your-dream-home",
    title: "Planning Your Dream Home: 7 Things to Decide Before You Meet an Architect",
    category: "Residential",
    date: "2026-10-28",
    readTime: "6 min read",
    author: "ArcStudio Design Team",
    image: "/images/projects/luxury-villa.webp",
    excerpt:
      "A clear brief saves months of revisions. Here are the decisions that make your first meeting with an architect productive.",
    content: [
      { type: "p", text: "Building a home is one of the biggest decisions a family makes. The more clarity you bring to the first meeting, the faster your architect can turn ideas into a design that fits your life and your budget." },
      { type: "h2", text: "1. Your budget, honestly" },
      { type: "p", text: "Share a realistic range that includes construction, interiors and a 10–15% contingency. It shapes every choice, from structure to finishes." },
      { type: "h2", text: "2. How your family lives" },
      { type: "p", text: "Do you host often? Work from home? Live with elders? Daily routines decide room sizes and layout more than any trend." },
      { type: "h2", text: "3. Must-haves and nice-to-haves" },
      { type: "list", items: ["Number of bedrooms and bathrooms", "Puja room, study or home office", "Parking for cars and two-wheelers", "Space for future expansion"] },
      { type: "h2", text: "4. Plot details and documents" },
      { type: "p", text: "Keep the site plan, ownership papers and local bye-laws handy. Setbacks and height limits decide what can be built." },
      { type: "quote", text: "A good brief is not a list of rooms. It is a picture of how you want to live." },
      { type: "h2", text: "5. Timeline" },
      { type: "p", text: "Design and approvals usually take 2–4 months before construction starts. Plan around festivals and the monsoon." },
      { type: "h2", text: "6. Style references" },
      { type: "p", text: "Save photos of homes you like and, just as useful, homes you don't. They help us understand your taste quickly." },
      { type: "h2", text: "7. Who decides" },
      { type: "p", text: "Agree within the family on who signs off on the design. One clear decision-maker keeps the project moving." },
    ],
  },
  {
    slug: "sustainable-design-for-hot-humid-climate",
    title: "Sustainable Design for Odisha's Hot and Humid Climate",
    category: "Sustainability",
    date: "2026-10-14",
    readTime: "5 min read",
    author: "ArcStudio Design Team",
    image: "/images/projects/sustainable-home.webp",
    excerpt:
      "Simple design choices like orientation, shading and cross-ventilation can keep homes cooler and cut electricity bills.",
    content: [
      { type: "p", text: "In a coastal climate, comfort comes from working with the sun, wind and rain, not against them. Most of it costs little when planned early." },
      { type: "h2", text: "Orient the building right" },
      { type: "p", text: "Keep long walls facing north and south, and limit openings on the west where the afternoon sun is harshest." },
      { type: "h2", text: "Shade before you cool" },
      { type: "list", items: ["Deep chajjas and verandahs over windows", "Jaali screens for light without glare", "Trees on the south-west side"] },
      { type: "h2", text: "Let the house breathe" },
      { type: "p", text: "Windows on opposite walls and a ventilator near the ceiling create cross-ventilation that pushes hot air out naturally." },
      { type: "quote", text: "The cheapest air-conditioner is a well-designed window." },
      { type: "h2", text: "Plan for the monsoon" },
      { type: "p", text: "Sloped roofs, proper drainage and rainwater harvesting protect the building and recharge groundwater." },
    ],
  },
  {
    slug: "interior-trends-2026",
    title: "Interior Design Trends That Will Still Look Good in Ten Years",
    category: "Interior",
    date: "2026-09-30",
    readTime: "4 min read",
    author: "ArcStudio Design Team",
    image: "/images/projects/residential-interior.webp",
    excerpt:
      "Skip short-lived fads. These materials and ideas age well and keep a home feeling fresh for years.",
    content: [
      { type: "p", text: "Trends come and go quickly. A timeless interior relies on good proportions, natural materials and light, then adds personality through things that are easy to change." },
      { type: "h2", text: "Natural materials" },
      { type: "p", text: "Wood, stone, lime plaster and cane get better with age and pair well with almost any style." },
      { type: "h2", text: "Warm, neutral base" },
      { type: "p", text: "Keep walls and large surfaces calm. Bring in colour through cushions, art and plants that can change with the seasons." },
      { type: "h2", text: "Layered lighting" },
      { type: "list", items: ["Ambient light for the whole room", "Task lights for kitchen and study", "Accent lights for art and textures"] },
      { type: "h2", text: "Built-in storage" },
      { type: "p", text: "Planned storage keeps rooms clutter-free, which matters more than any decorative trend." },
    ],
  },
  {
    slug: "designing-workspaces-people-enjoy",
    title: "Designing Workspaces People Actually Enjoy Coming To",
    category: "Commercial",
    date: "2026-09-12",
    readTime: "5 min read",
    author: "ArcStudio Design Team",
    image: "/images/projects/work-hub.webp",
    excerpt:
      "Natural light, flexible zones and good acoustics make offices more productive. Here is how we approach them.",
    content: [
      { type: "p", text: "An office is no longer just rows of desks. Teams need spaces to focus, meet, and take a break, all under one roof." },
      { type: "h2", text: "Daylight first" },
      { type: "p", text: "Place workstations near windows and keep cabins towards the core, so most people get natural light." },
      { type: "h2", text: "Mix of zones" },
      { type: "list", items: ["Quiet focus areas", "Small meeting pods", "An informal café or lounge", "One large room for events"] },
      { type: "h2", text: "Sound matters" },
      { type: "p", text: "Acoustic ceilings, soft furnishings and glass partitions keep open offices from getting noisy." },
      { type: "quote", text: "People do their best work in spaces that respect how they work." },
    ],
  },
];

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default blog;
