import siteConfig from "../../config/siteConfig";

// Map siteConfig.mapQuery se aata hai (na ho to address se). Wahan pata badlo, map apne aap badal jayega.
const ContactMap = () => (
  <section className="h-[400px] w-full">
    <iframe
      title="Our location"
      src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery || siteConfig.address)}&output=embed`}
      className="h-full w-full border-0 grayscale transition duration-500 hover:grayscale-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </section>
);

export default ContactMap;