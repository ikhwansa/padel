export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-tertiary font-label uppercase tracking-widest text-sm mb-2">
            The Community
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-black italic uppercase">
            In Their Own{" "}
            <span className="text-on-surface-variant">Words</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-primary">
            <div className="flex text-primary mb-6">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="italic text-on-surface leading-relaxed mb-8">
              &ldquo;The atmosphere here is unmatched. It feels more like a
              private lounge than a sports club. The lighting on the courts is
              professional grade.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container" />
              <div>
                <div className="font-headline font-bold">Marcus Chen</div>
                <div className="text-xs text-on-surface-variant">
                  Competitive Player
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-secondary">
            <div className="flex text-primary mb-6">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star_half
              </span>
            </div>
            <p className="italic text-on-surface leading-relaxed mb-8">
              &ldquo;The booking app is so smooth. I can find a game and a
              partner in seconds. The Cafe makes the best post-match protein
              shakes in town.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-container" />
              <div>
                <div className="font-headline font-bold">Elena Rodriguez</div>
                <div className="text-xs text-on-surface-variant">
                  Membership Holder
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-tertiary lg:block md:hidden">
            <div className="flex text-primary mb-6">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="italic text-on-surface leading-relaxed mb-8">
              &ldquo;Coming from tennis, the community here made the transition
              so easy. Top-tier coaching that actually focuses on strategy, not
              just hitting hard.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container" />
              <div>
                <div className="font-headline font-bold">James Wilson</div>
                <div className="text-xs text-on-surface-variant">
                  Academy Student
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
