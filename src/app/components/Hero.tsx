// Homepage bio. Three clusters — Now (Meta), Before (Google), Closer.
// Compact spacing, restrained hierarchy: lede sets the present, body
// carries the details.

const BODY =
  "text-[17px] leading-[1.45] font-['Playfair_Display',_serif] text-gray-700";

export function Hero() {
  return (
    <section className="max-w-2xl mx-auto px-16 pt-12 pb-16">
      {/* Now */}
      <p
        className="text-[1.375rem] leading-[1.25] tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-3"
        style={{ fontWeight: 500 }}
      >
        I lead Ecosystem Design at Meta Reality Labs.
      </p>
      <p className={BODY}>
        My team builds the systems and tools people use to make AI experiences for wearables.
      </p>

      {/* Before */}
      <div className="mt-7 space-y-2.5">
        <p className={BODY}>Before Meta I spent nearly a decade at Google.</p>
        <p className={BODY}>
          I built a global design team for the Google Play app — a $50B business with 3 billion users.
        </p>
        <p className={BODY}>
          I redesigned how Google apps work on iOS (all 114 of them).
        </p>
        <p className={BODY}>I launched features like Widgets on Android 12.</p>
        <p className={BODY}>
          I also got to build technology with big partners. Like an experience for Disney that added sound effects to storytime, and machine learning technology that helped preserve an endangered language.
        </p>
      </div>

      {/* Closer */}
      <div className="mt-7 space-y-2.5">
        <p className={BODY}>
          I like to make complicated things simple. I sometimes write about design and AI.
        </p>
        <p className={BODY}>
          My work has been recognized by D&amp;AD, Fast Company, and Time.
        </p>
      </div>
    </section>
  );
}
