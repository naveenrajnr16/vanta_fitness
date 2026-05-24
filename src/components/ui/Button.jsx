import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Button({ children, to, href, variant = "primary", icon = true, className = "", ...props }) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 border px-5 py-3 text-sm font-black uppercase tracking-[0.18em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vanta-lime";
  const variants = {
    primary:
      "border-vanta-lime bg-vanta-lime text-vanta-black shadow-[0_0_28px_rgba(198,255,0,0.26)] hover:bg-white hover:border-white",
    secondary:
      "border-white/20 bg-white/5 text-white hover:border-vanta-lime hover:text-vanta-lime hover:bg-vanta-lime/10",
    ghost: "border-transparent bg-transparent text-white hover:text-vanta-lime",
  };
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          size={18}
          className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;
