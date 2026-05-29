import { AnimatedLogo } from './AnimatedLogo';
import { Link } from 'react-router-dom';
import { useAnimatedColor } from '../hooks/useAnimatedColor';
import LinkedInIcon from '../../imports/LinkedInIcon';
import ThreadsIcon from '../../imports/ThreadsIcon';
import InstagramIcon from '../../imports/InstagramIcon';
import MediumIcon from '../../imports/MediumIcon';

export function Header() {
  const currentColor = useAnimatedColor();

  return (
    <header className="w-full px-16 py-12 flex items-start justify-between">
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

      <nav className="flex items-center gap-3">
        <a 
          href="https://medium.com/@samuelpayneesq" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-[17px] h-[17px] text-gray-600 transition-colors hover:transition-none"
          style={{ '--hover-color': currentColor } as React.CSSProperties}
          onMouseEnter={(e) => e.currentTarget.style.color = currentColor}
          onMouseLeave={(e) => e.currentTarget.style.color = ''}
        >
          <MediumIcon />
        </a>
        <a 
          href="https://www.threads.com/@samuelpayneesq"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-[17px] h-[17px] text-gray-600 transition-colors hover:transition-none"
          style={{ '--hover-color': currentColor } as React.CSSProperties}
          onMouseEnter={(e) => e.currentTarget.style.color = currentColor}
          onMouseLeave={(e) => e.currentTarget.style.color = ''}
        >
          <ThreadsIcon />
        </a>
        <a 
          href="https://www.instagram.com/samuelpayneesq"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-[17px] h-[17px] text-gray-600 transition-colors hover:transition-none"
          style={{ '--hover-color': currentColor } as React.CSSProperties}
          onMouseEnter={(e) => e.currentTarget.style.color = currentColor}
          onMouseLeave={(e) => e.currentTarget.style.color = ''}
        >
          <InstagramIcon />
        </a>
        <a 
          href="https://www.linkedin.com/in/samuelpayne/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-[17px] h-[17px] text-gray-600 transition-colors hover:transition-none"
          style={{ '--hover-color': currentColor } as React.CSSProperties}
          onMouseEnter={(e) => e.currentTarget.style.color = currentColor}
          onMouseLeave={(e) => e.currentTarget.style.color = ''}
        >
          <LinkedInIcon />
        </a>
      </nav>
    </header>
  );
}