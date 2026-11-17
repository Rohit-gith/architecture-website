// Company ki saari basic jaankari (client ke office profile PDF se)
const siteConfig = {
  name: "Urban Crafting",
  tagline: "Architects & Interior Designers",
  slogan: "Crafting Luxury, Defining Spaces",
  email: "info@urbancrafting.in",
  phone: "+91 95998 66947",
  address: "Bhubaneswar, Odisha, India",
  // Contact page ka map. PDF me office ka poora pata nahi hai, isliye abhi map sirf Bhubaneswar shehar dikhata hai.
  // Office ka exact pata milte hi yahan likho, jaise "Urban Crafting, Plot 123, Patia, Bhubaneswar, Odisha 751024".
  // Google Maps par dukaan ka naam (business listing) ho to sirf "Urban Crafting Bhubaneswar" likhna bhi kaafi hai.
  mapQuery: "Bhubaneswar, Odisha, India",
  website: "https://www.urbancrafting.in",
  hours: "Mon – Sat, 10:00 AM – 6:00 PM",
  // Leadership / Team pages: client ne abhi team ki jaankari nahi di, isliye band hain.
  // Asli naam + photo src/data/team.js aur leadership.js me daal kar isse true kar do.
  showTeam: false,
  // Social media ke poore link yahan daalo (jaise "https://www.instagram.com/urbancrafting").
  // Link khaali ho to icon dikhega par click nahi hoga. WhatsApp apne aap whatsapp.js ke number se chalta hai.
  social: {
    instagram: "",
    facebook: "",
    twitter: "", // X (Twitter)
    linkedin: "",
    youtube: "",
  },
};

export default siteConfig;
