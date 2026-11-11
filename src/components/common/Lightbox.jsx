import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { toWebp } from "./ImageBox";

// Photo full screen me. Esc = band, ← → = pichli/agli photo, bahar click = band.
const Lightbox = ({ images, index, onClose, onChange, title = "" }) => {
  const count = images.length;
  const go = (step) => onChange((index + step + count) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (count > 1 && e.key === "ArrowRight") onChange((index + 1) % count);
      if (count > 1 && e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    // Lightbox khula ho to peeche ka page scroll na ho
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, count, onClose, onChange]);

  const btn = "absolute z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} photos` : "Photo viewer"}
      className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-[#0b0b0b] p-4 md:p-12"
      onClick={onClose}
    >
      <button type="button" aria-label="Close" className={`${btn} right-4 top-4`} onClick={onClose}>
        <X size={22} />
      </button>

      <img
        src={toWebp(images[index])}
        alt={title ? `${title} – photo ${index + 1}` : `Photo ${index + 1}`}
        className="max-h-full max-w-full object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {count > 1 && (
        <>
          <button type="button" aria-label="Previous photo" className={`${btn} left-3 top-1/2 -translate-y-1/2 md:left-6`} onClick={(e) => { e.stopPropagation(); go(-1); }}>
            <ChevronLeft size={24} />
          </button>
          <button type="button" aria-label="Next photo" className={`${btn} right-3 top-1/2 -translate-y-1/2 md:right-6`} onClick={(e) => { e.stopPropagation(); go(1); }}>
            <ChevronRight size={24} />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/70">
            {index + 1} / {count}
          </p>
        </>
      )}
    </div>,
    document.body
  );
};

export default Lightbox;
