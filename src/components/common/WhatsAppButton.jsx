import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Building2, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import siteConfig from "../../config/siteConfig";
import { whatsappLink } from "../../config/whatsapp";

// Bubble kitni der baad aaye, aur kaunse page par na aaye
const BUBBLE_DELAY = 8000;
const BUBBLE_HIDDEN_ON = ["/contact"];
const STORAGE_KEY = "wa-bubble-done"; // ek session me sirf ek baar

const alreadyDone = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};
const markDone = () => {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // private mode me storage band ho sakta hai: koi baat nahi
  }
};

// Neeche right me WhatsApp ka green button. Desktop par hover karne par pill ban ke "Chat on WhatsApp" dikhata hai.
// Page khulne ke 8 sec baad ek chhota chat bubble aata hai (✕ se band, ek session me ek hi baar).
const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    if (alreadyDone()) return undefined;
    const t = setTimeout(() => setBubble(true), BUBBLE_DELAY);
    return () => clearTimeout(t);
  }, []);

  const showBubble = bubble && !BUBBLE_HIDDEN_ON.includes(pathname);

  const closeBubble = () => {
    setBubble(false);
    markDone();
  };

  return (
    <>
      {showBubble && (
        <div
          role="dialog"
          aria-label="Chat with us on WhatsApp"
          className="wa-bubble-in fixed bottom-4 right-[76px] z-40 w-[260px] max-w-[calc(100vw-96px)] md:bottom-6 md:right-[96px] md:w-[280px]"
        >
          <div className="relative rounded-2xl rounded-br-md border border-neutral-100 bg-white p-4 pr-9 text-ink shadow-2xl">
            <button
              type="button"
              onClick={closeBubble}
              aria-label="Close chat message"
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-ink"
            >
              <X size={15} />
            </button>

            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-accent">
                <Building2 size={20} strokeWidth={1.4} />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#25D366]" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{siteConfig.name}</span>
                <span className="block text-[11px] text-[#1da851]">Online</span>
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Hi 👋 Planning a project? Chat with us.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={markDone}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1da851]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Start Chat
            </a>
          </div>
        </div>
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={markDone}
        className="group fixed bottom-4 right-4 z-40 flex h-12 items-center rounded-full bg-[#25D366] text-white shadow-xl transition-colors duration-300 hover:bg-[#1da851] md:bottom-6 md:right-6 md:h-14"
      >
        {/* Hover par khulne wala text (bubble khula ho to nahi khulta, taaki dono na takrayein) */}
        <span
          className={`max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 ease-out ${
            showBubble ? "" : "md:group-hover:max-w-[12rem] md:group-hover:pl-5 md:group-hover:opacity-100 md:group-focus-visible:max-w-[12rem] md:group-focus-visible:pl-5 md:group-focus-visible:opacity-100"
          }`}
        >
          Chat on WhatsApp
        </span>

        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14">
          {/* Sirf 2 baar halka pulse */}
          <span className="wa-pulse absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
          <WhatsAppIcon className="relative h-6 w-6 md:h-7 md:w-7" />
          {/* Online dot */}
          <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-[#7CFFA8]" aria-hidden="true" />
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;
