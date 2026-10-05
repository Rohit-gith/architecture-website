// WhatsApp number: country code ke saath, bina + aur bina space (91 = India)
const whatsapp = {
  number: "916372569846",
  displayNumber: "+91 63725 69846",
  message: "Hello, I would like to discuss a project with you.",
};

export const whatsappLink = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`;

export default whatsapp;