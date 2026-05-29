import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MenuLinkProps {
  to: string;
  label: string;
}

function MenuLink({ to, label }: MenuLinkProps) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 font-['Playfair_Display',_serif] text-gray-900 hover:opacity-60 transition-opacity text-[1.5rem] leading-tight tracking-tight"
      style={{ fontWeight: 600 }}
    >
      {label}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function Sep() {
  // Vertical em-dot separator visible only on md+
  return (
    <span className="hidden md:inline text-gray-300 text-2xl select-none" aria-hidden>
      ·
    </span>
  );
}

export function HomeMenu() {
  return (
    <section className="max-w-3xl mx-auto px-16 py-16 border-t border-b border-gray-100 mt-8">
      <nav className="flex flex-col md:flex-row items-center justify-center gap-x-16 gap-y-8">
        <MenuLink to="/writing" label="Writing" />
        <Sep />
        <MenuLink to="/speaking" label="Speaking" />
        <Sep />
        <MenuLink to="/contact" label="Contact" />
      </nav>
    </section>
  );
}
