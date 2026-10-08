// WhatsApp number: country code ke saath, bina + aur bina space (91 = India)
const whatsapp = {
  number: "919692398458",
  displayNumber: "+91 9692398458",
  message: "Hello, I would like to discuss a project with you.",
};

// Kisi bhi text ke saath WhatsApp chat ka link banata hai
export const buildWhatsappLink = (text) => `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;

// Floating button ke liye (default message)
export const whatsappLink = buildWhatsappLink(whatsapp.message);

export default whatsapp;




