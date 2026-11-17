// WhatsApp number: country code ke saath, bina + aur bina space (91 = India)
const whatsapp = {
  number: "919599866947",
  displayNumber: "+91 95998 66947",
  message: "Hello Urban Crafting, I would like to discuss a project with you.",
};

// Kisi bhi text ke saath WhatsApp chat ka link banata hai
export const buildWhatsappLink = (text) => `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;

// Floating button ke liye (default message)
export const whatsappLink = buildWhatsappLink(whatsapp.message);

export default whatsapp;
