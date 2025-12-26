interface HeroProps {
  name?: string;
  intro?: string;
  bio?: string;
}

export function Hero({ 
  name = "Your Name",
  intro = "Sam leads high-performing design teams in complex organizations—he helps them do the best work of their lives.",
  bio = "His experience spans AI, product design, and innovation strategy, ranging from products serving billions of uses to scrappy 0-1 prototypes. He's happiest when he's close to the work, pushing to simplify and make even the most complex technology easy to use. He cultivates diverse, resilient organizations because he focuses on the work (and most good things flow from that).\\n\\nSam is an active writer and speaker at the intersection of design and AI. His work has been recognized by D&AD, Fast Company, and Time Magazine."
}: HeroProps) {
  // Split by manual line breaks
  const bioLines = bio.split('\\n\\n');
  
  return (
    <section className="max-w-2xl mx-auto px-16 py-20 pb-8 border-b border-gray-100">
      <h1 className="text-[2.75rem] leading-[0.98] tracking-tight mb-8 font-['Playfair_Display',_serif] text-gray-900" style={{ fontWeight: 600 }}>
        {intro}
      </h1>
      
      <div className="space-y-2">
        {bioLines.map((line, index) => (
          <p key={index} className="leading-relaxed tracking-tight font-['Playfair_Display',_serif] text-gray-700">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}