import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "../../config/whatsapp";

// Sab pages par neeche right me floating button
const WhatsAppButton = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="group fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-center"
  >
    <span className="mr-3 hidden whitespace-nowrap bg-white px-4 py-2 text-xs font-medium text-ink shadow-lg group-hover:block">
      Chat with us
    </span>
    <span className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition group-hover:scale-105">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative h-6 w-6 md:h-7 md:w-7" />
    </span>
  </a>
);

export default WhatsAppButton;