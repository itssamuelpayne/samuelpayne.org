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
    <header className="w-full px-16 py-12 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 cursor-pointer">
        <AnimatedLogo size={40} />
      </Link>
      
      <nav className="flex items-center gap-3">
        <a 
          href="https://medium.com/@itssamuelpayne" 
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
          href="https://www.threads.com/@itssamuelpayne" 
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
          href="https://www.instagram.com/itssamuelpayne" 
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