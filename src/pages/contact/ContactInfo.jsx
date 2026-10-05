import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionTitle from "../../components/common/SectionTitle";
import siteConfig from "../../config/siteConfig";

const workingHours = "Mon – Sat, 10:00 AM – 6:00 PM";

const ContactInfo = () => {
  const items = [
    { icon: MapPin, label: "Visit Us", value: siteConfig.address },
    { icon: Phone, label: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
    { icon: Mail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Clock, label: "Working Hours", value: workingHours },
  ];

  return (
    <div>
      <SectionTitle align="left" eyebrow="Get In Touch" title="Let's Talk About Your Project" />
      <p className="-mt-6 mb-10 max-w-md leading-relaxed text-neutral-600">
        Share your idea with us and our team will get back to you within 24 hours to discuss the next steps.
      </p>

      <ul className="space-y-7">
        {items.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/40 text-accent">
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">{label}</p>
              {href ? (
                <a href={href} className="mt-1 block text-lg transition hover:text-accent">{value}</a>
              ) : (
                <p className="mt-1 text-lg">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;