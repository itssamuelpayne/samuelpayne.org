import { AnimatedLogo } from './AnimatedLogo';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full px-16 py-12 flex items-start">
      <div className="flex flex-col gap-5">
        <Link to="/" className="cursor-pointer w-fit">
          <AnimatedLogo size={40} />
        </Link>
        <nav className="flex flex-col gap-1.5 font-['Playfair_Display',_serif] text-[15px] text-gray-700">
          <Link to="/writing" className="w-fit hover:text-gray-900 transition-colors">
            Writing
          </Link>
          <Link to="/work" className="w-fit hover:text-gray-900 transition-colors">
            Portfolio
          </Link>
          <Link to="/speaking" className="w-fit hover:text-gray-900 transition-colors">
            Speaking
          </Link>
          <Link to="/contact" className="w-fit hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
