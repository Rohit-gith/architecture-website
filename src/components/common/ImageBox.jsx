import { useState } from "react";

// Data files me .jpg / .png likha ho to bhi chalega: yahan apne aap .webp me badal jata hai
// (npm run optimize sab images ko .webp bana deta hai). Image na mile to grey placeholder dikhta hai.
export const toWebp = (src) => (src ? src.replace(/\.(jpe?g|png)$/i, ".webp") : src);

const ImageBox = ({ src, alt = "", className = "" }) => {
  const [failed, setFailed] = useState(false);
  const finalSrc = toWebp(src);

  return finalSrc && !failed ? (
    <img
      src={finalSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  ) : (
    <div className={`w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400 text-xs uppercase tracking-widest ${className}`}>
      Image
    </div>
  );
};

export default ImageBox;