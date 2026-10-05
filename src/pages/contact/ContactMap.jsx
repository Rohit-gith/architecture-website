import siteConfig from "../../config/siteConfig";

// Map siteConfig.address se aata hai. Address badlo to map apne aap badal jayega.
const ContactMap = () => (
  <section className="h-[400px] w-full">
    <iframe
      title="Our location"
      src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
      className="h-full w-full border-0 grayscale transition duration-500 hover:grayscale-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </section>
);

export default ContactMap;