import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
  primary: "bg-accent text-white hover:bg-ink",
  light: "border border-white text-white hover:bg-white hover:text-ink",
  dark: "border border-ink text-ink hover:bg-ink hover:text-white",
};

const Button = ({ to, variant = "primary", arrow = false, children, className = "", ...props }) => {
  const cls = `inline-flex items-center gap-2 px-7 py-3 text-xs font-medium tracking-wider transition ${variants[variant]} ${className}`;
  const content = (<>{children}{arrow && <ArrowRight size={14} />}</>);
  return to ? (
    <Link to={to} className={cls} {...props}>{content}</Link>
  ) : (
    <button className={cls} {...props}>{content}</button>
  );
};

export default Button;