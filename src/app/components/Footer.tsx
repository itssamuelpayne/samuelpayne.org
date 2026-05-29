import { useAnimatedColor } from '../hooks/useAnimatedColor';
import LinkedInIcon from '../../imports/LinkedInIcon';
import ThreadsIcon from '../../imports/ThreadsIcon';
import InstagramIcon from '../../imports/InstagramIcon';
import MediumIcon from '../../imports/MediumIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const currentColor = useAnimatedColor();

  const social = [
    {
      href: 'https://medium.com/@samuelpayneesq',
      label: 'Medium',
      Icon: MediumIcon,
    },
    {
      href: 'https://www.threads.com/@samuelpayneesq',
      label: 'Threads',
      Icon: ThreadsIcon,
    },
    {
      href: 'https://www.instagram.com/samuelpayneesq',
      label: 'Instagram',
      Icon: InstagramIcon,
    },
    {
      href: 'https://www.linkedin.com/in/samuelpayne/',
      label: 'LinkedIn',
      Icon: LinkedInIcon,
    },
  ];

  return (
    <footer className="w-full px-16 py-12 mt-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-xs text-gray-400 font-['Playfair_Display',_serif] tracking-wide">
          Samuel Payne © {currentYear}
        </p>

        <nav className="flex items-center gap-3" aria-label="Social">
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-[17px] h-[17px] text-gray-600 transition-colors hover:transition-none"
              onMouseEnter={(e) => (e.currentTarget.style.color = currentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
