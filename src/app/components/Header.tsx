import { AnimatedLogo } from './AnimatedLogo';
import { Link } from 'react-router-dom';
import { useAnimatedColor } from '../hooks/useAnimatedColor';

export function Header() {
  const currentColor = useAnimatedColor();

  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = currentColor;
  };
  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '';
  };

  return (
    <header className="w-full px-16 py-12 flex items-start">
      <div className="flex flex-col gap-5">
        <Link to="/" className="cursor-pointer w-fit">
          <AnimatedLogo size={40} />
        </Link>
        <nav className="flex flex-col gap-1.5 font-['Playfair_Display',_serif] text-[15px] text-gray-700">
          <Link
            to="/writing"
            className="w-fit transition-colors hover:transition-none"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Writing
          </Link>
          <Link
            to="/work"
            className="w-fit transition-colors hover:transition-none"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Portfolio
          </Link>
          <Link
            to="/speaking"
            className="w-fit transition-colors hover:transition-none"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Speaking
          </Link>
          <Link
            to="/contact"
            className="w-fit transition-colors hover:transition-none"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
