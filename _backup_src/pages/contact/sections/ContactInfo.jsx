import siteConfig from "../../../config/siteConfig";

const ContactInfo = () => {
  const items = [
    ["Address", siteConfig.address],
    ["Phone", siteConfig.phone],
    ["Email", siteConfig.email],
  ];

  return (
    <div>
      <ul className="space-y-6">
        {items.map(([k, v]) => (
          <li key={k}>
            <p className="text-xs uppercase tracking-widest text-accent">{k}</p>
            <p className="mt-1 text-lg">{v}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 h-56 bg-neutral-200 flex items-center justify-center text-neutral-400 text-xs uppercase tracking-widest">
        Map
      </div>
    </div>
  );
};

export default ContactInfo;
