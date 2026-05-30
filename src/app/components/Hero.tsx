// Homepage bio. Four flowing paragraphs — Now, Then, Partners, Closer.

const BODY =
  "text-[17px] leading-[1.45] font-['Playfair_Display',_serif] text-gray-800";

export function Hero() {
  return (
    <section className="max-w-2xl px-16 pt-12 pb-16">
      <div className="space-y-5">
        <p className={BODY}>
          I lead Ecosystem Design at Meta Reality Labs. My team builds the systems and tools people use to make AI experiences for wearables.
        </p>
        <p className={BODY}>
          Before Meta I spent nearly a decade at Google. I built a global design team for Google Play — a $50B business with 3 billion users. I redesigned how Google apps work on iOS (all 114 of them), and I launched features like Widgets on Android 12.
        </p>
        <p className={BODY}>
          I also got to build technology with big partners. Like an experience for Disney that added sound effects to storytime, and machine learning technology that helped preserve an endangered language.
        </p>
        <p className={BODY}>
          I like to make complicated things simple. I sometimes write about design and AI. My work has been recognized by D&amp;AD, Fast Company, and Time Magazine.
        </p>
      </div>
    </section>
  );
}
