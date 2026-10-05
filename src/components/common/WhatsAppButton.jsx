import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "../../config/whatsapp";

// Sab pages par neeche right me floating button
const WhatsAppButton = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="group fixed bottom-6 right-6 z-40 flex items-center"
  >
    <span className="mr-3 hidden whitespace-nowrap bg-white px-4 py-2 text-xs font-medium text-ink shadow-lg group-hover:block">
      Chat with us
    </span>
    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition group-hover:scale-105">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </span>
  </a>
);

export default WhatsAppButton;