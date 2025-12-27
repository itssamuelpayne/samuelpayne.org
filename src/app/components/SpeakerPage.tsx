import { Header } from './Header';
import { Footer } from './Footer';

export function SpeakerPage() {
  // Company/Event logos - uses files from /public/logos/
  const logos = [
    { src: '/logos/ces.png', alt: 'CES' },
    { src: '/logos/wsj.png', alt: 'Wall Street Journal' },
    { src: '/logos/dad.png', alt: 'D&AD' },
    { src: '/logos/yale.png', alt: 'Yale School of Management' },
    { src: '/logos/google.png', alt: 'Google' },
  ];

  const testimonials = [
    {
      quote: "...thank you again! your talk was exceptionally well-received by all participants within and beyond Yale—and your panel on AI's impact to tech an absolute highlight!",
      author: "Jack Xuhui",
      title: "Yale School of Management"
    },
    {
      quote: "it was great to hear from a creative leader like yourself. Your points on psychological safety, smart experimentation, and the power of technology to deliver at scale were just fantastic.",
      author: "Fahad Ahmed",
      title: "Experience Director, The CMO Program, Deloitte"
    }
  ];

  const topics = [
    {
      title: "The Intention Economy",
      description: "As AI drives the cost of execution to zero, value shifts entirely to direction. This talk explores why taste—the ability to distill specific intention into something unique—is the single most critical skill for the post-AI designer."
    },
    {
      title: "Why Don't We Design the Process?",
      description: "We obsess over pixel-perfect user flows yet accept broken meetings and aimless brainstorms. This session treats how we work as a design problem, offering frameworks to sprint effectively and lead with generosity."
    },
    {
      title: "Open-Ended UX",
      description: "Modern software optimizes for frictionless progress, yet humans thrive on serendipity. Drawing on urbanist Jane Jacobs, this talk challenges us to build digital spaces that prioritize texture and messiness over algorithmic efficiency."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      
      <main className="max-w-2xl mx-auto px-16 py-20">
        {/* Intro Section */}
        <section className="mb-12 pb-12 border-b border-gray-100">
          <h1 className="text-[2.75rem] leading-[0.98] tracking-tight mb-8 font-['Playfair_Display',_serif] text-gray-900" style={{ fontWeight: 600 }}>
            Speaking
          </h1>
          <p className="leading-relaxed font-['Playfair_Display',_serif] text-gray-700 mb-4">
            Please email <a href="mailto:speaking@samuelpayne.org" className="underline hover:text-gray-900">speaking@samuelpayne.org</a> to inquire about booking Sam to speak at your event.
          </p>
          <p className="leading-relaxed font-['Playfair_Display',_serif] text-gray-700">
            Sam speaks regularly at design and technology conferences, addressing a wide range of audiences: Wall Street Journal, Google, the Yale School of Management, and D&AD. He enjoys industry panels, though insists on a mix of gender, perspective, and background—it's more fun that way.
          </p>
        </section>

        {/* Logo Ticker Section */}
        <section className="mb-20 pb-12 border-b border-gray-100">
          <div className="flex items-center justify-center gap-x-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20 pb-12 border-b border-gray-100">
          <div className="max-w-3xl mx-auto space-y-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="pb-8 border-b border-gray-100 text-center"
              >
                <blockquote className="mb-4">
                  <p className="text-gray-700 leading-relaxed font-['Playfair_Display',_serif]">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                <div className="text-sm text-gray-500 font-['Playfair_Display',_serif]">
                  <div className="font-medium text-gray-700">{testimonial.author}</div>
                  <div className="text-xs">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Talks Section */}
        <section className="mb-12">
          <div className="space-y-8">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="pb-8 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <h3 className="mb-3 font-['Playfair_Display',_serif] font-semibold text-gray-900">
                  {topic.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-['Playfair_Display',_serif]">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
