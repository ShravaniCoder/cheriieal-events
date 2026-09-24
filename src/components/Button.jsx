import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({ to = "/contact", children, light = false, className = "" }) {
  return (
    <Link to={to} className={`luxury-btn ${light ? "luxury-btn-light" : ""} ${className}`}>
      <span>{children}</span>
      <ArrowRight size={14} strokeWidth={1.5} />
    </Link>
  );
}
