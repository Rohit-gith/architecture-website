import { useState } from "react";

// Image na mile ya load na ho to grey placeholder dikhata hai
const ImageBox = ({ src, alt = "", className = "" }) => {
  const [failed, setFailed] = useState(false);

  return src && !failed ? (
    <img src={src} alt={alt} onError={() => setFailed(true)} className={`w-full h-full object-cover ${className}`} />
  ) : (
    <div className={`w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400 text-xs uppercase tracking-widest ${className}`}>
      Image
    </div>
  );
};

export default ImageBox;