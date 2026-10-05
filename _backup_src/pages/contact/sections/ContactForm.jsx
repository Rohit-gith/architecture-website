import { useState } from "react";
import Button from "../../../components/common/Button";

const initial = { name: "", email: "", phone: "", message: "" };
const field = "w-full border border-neutral-300 px-4 py-3 focus:outline-none focus:border-accent";

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
      <div className="border border-accent p-8">
        <h3 className="text-2xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-neutral-600">We have received your message and will contact you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input className={field} name="name" placeholder="Your Name" value={values.name} onChange={handleChange} required />
      <input className={field} type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} required />
      <input className={field} name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} />
      <textarea className={field} rows="5" name="message" placeholder="Tell us about your project" value={values.message} onChange={handleChange} required />
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
