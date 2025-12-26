import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full px-16 py-12 mt-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-gray-400 font-['Playfair_Display',_serif] tracking-wide">
          Samuel Payne © {currentYear}
        </p>
        
        <nav className="flex items-center gap-8">
          <Link to="/speaking" className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-['Playfair_Display',_serif]">
            Speaking
          </Link>
          <Link to="/contact" className="text-xs text-gray-500 hover:text-gray-900 transition-colors font-['Playfair_Display',_serif]">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}