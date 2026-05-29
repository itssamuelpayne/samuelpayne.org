// Homepage bio. Three clusters — Now (Meta), Before (Google), Closer —
// rendered as plain body throughout. The wave at the top sets the voice;
// the details speak for themselves.

const BODY =
  "text-[17px] leading-[1.45] font-['Playfair_Display',_serif] text-gray-700";

export function Hero() {
  return (
    <section className="max-w-2xl px-16 pt-12 pb-16">
      {/* Now */}
      <div className="space-y-2.5">
        <p className={BODY}>
          Hello, I’m Sam. I lead Ecosystem Design at Meta Reality Labs.
        </p>
        <p className={BODY}>
          My team builds the systems and tools people use to make AI experiences for wearables.
        </p>
      </div>

      {/* Before */}
      <div className="mt-7 space-y-2.5">
        <p className={BODY}>Before Meta I spent nearly a decade at Google.</p>
        <p className={BODY}>
          I build a global design team for Google Play — a $50B business with 3 billion users.
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
          I like to make complicated things simple, and sometimes write about design and AI.
        </p>
        <p className={BODY}>
          My work has been recognized by D&amp;AD, Fast Company, and Time Magazine.
        </p>
      </div>
    </section>
  );
}
