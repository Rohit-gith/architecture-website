import { useState } from "react";
import { Check } from "lucide-react";
import Button from "../../components/common/Button";

const projectTypes = ["Residential", "Commercial", "Interior Design", "Landscape", "Other"];
const initial = { name: "", email: "", phone: "", type: "", message: "" };

// 3D glass card: bade gol kinare, upar halki chamak, neeche andar ki shadow, gehri bahari shadow
const glass =
  "relative rounded-[2rem] border border-white/80 bg-gradient-to-br from-white/80 via-white/50 to-white/30 backdrop-blur-xl " +
  "shadow-[0_2px_4px_rgba(0,0,0,0.04),0_14px_28px_rgba(0,0,0,0.08),0_44px_90px_rgba(120,90,40,0.22),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-3px_8px_rgba(0,0,0,0.06)]";
// Fields andar dabe hue (inset) dikhte hain
const field =
  "w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm shadow-[inset_0_2px_5px_rgba(0,0,0,0.07)] transition focus:border-accent focus:bg-white focus:outline-none focus:ring-1 focus:ring-accent";
const label = "mb-2 block text-[11px] uppercase tracking-widest text-neutral-500";

// Mouse ke saath card halka sa tilt hota hai (max 5 degree). Tilt hatana ho to <Tilt> hata do.
const Tilt = ({ children }) => {
  const [style, setStyle] = useState({});
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setStyle({ transform: `perspective(1400px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)` });
  };
  const onLeave = () => setStyle({ transform: "perspective(1400px) rotateX(0deg) rotateY(0deg)" });

  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} style={style} className="relative transition-transform duration-200 ease-out">
      {children}
    </div>
  );
};

// Card ke peeche halki gold glow, jisse glass effect dikhe
const Glow = ({ children }) => (
  <div className="relative">
    <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/40 blur-3xl" />
    <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />
    <Tilt>{children}</Tilt>
  </div>
);

const ContactForm = () => {
  const [values, setValues] = useState(initial);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: yahan API / email service connect karo
    console.log(values);
    setSent(true);
    setValues(initial);
  };

  if (sent) {
    return (
      <Glow>
        <div className={`${glass} p-10 text-center`}>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
            <Check size={28} />
          </span>
          <h3 className="mt-6 text-2xl font-medium">Thank you!</h3>
          <p className="mt-2 text-neutral-600">We have received your message and will contact you within 24 hours.</p>
          <button onClick={() => setSent(false)} className="mt-6 text-sm text-accent underline">
            Send another message
          </button>
        </div>
      </Glow>
    );
  }

  return (
    <Glow>
      <form onSubmit={handleSubmit} className={`${glass} p-8 md:p-10`}>
        <h3 className="text-2xl font-medium">Send Us a Message</h3>
        <p className="mt-1 mb-8 text-sm text-neutral-500">Fields marked * are required.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className={label} htmlFor="name">Full Name *</label>
            <input id="name" className={field} name="name" value={values.name} onChange={handleChange} required />
          </div>
          <div>
            <label className={label} htmlFor="email">Email *</label>
            <input id="email" className={field} type="email" name="email" value={values.email} onChange={handleChange} required />
          </div>
          <div>
            <label className={label} htmlFor="phone">Phone</label>
            <input id="phone" className={field} name="phone" value={values.phone} onChange={handleChange} />
          </div>
          <div>
            <label className={label} htmlFor="type">Project Type</label>
            <select id="type" className={field} name="type" value={values.type} onChange={handleChange}>
              <option value="">Select type</option>
              {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="message">Message *</label>
            <textarea id="message" className={field} rows="5" name="message" value={values.message} onChange={handleChange} required />
          </div>
        </div>

        <div className="mt-8">
          <Button
            type="submit"
            arrow
            className="rounded-full bg-gradient-to-b from-[#c9a15c] to-[#a6803f] shadow-[0_8px_20px_rgba(166,128,63,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-0.5"
          >
            Send Message
          </Button>
        </div>
      </form>
    </Glow>
  );
};

export default ContactForm;