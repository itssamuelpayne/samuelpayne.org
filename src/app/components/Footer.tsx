export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-16 py-12 mt-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-gray-400 font-['Playfair_Display',_serif] tracking-wide">
          Samuel Payne © {currentYear}
        </p>
      </div>
    </footer>
  );
}
