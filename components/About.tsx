/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-container-low mesh-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface">
              Precision Met By{" "}
              <span className="text-primary italic">Power</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Vantage Point isn&apos;t just a club; it&apos;s a movement.
              We&apos;ve redesigned the Padel experience from the ground up,
              combining architectural beauty with athletic excellence.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary-container rounded-full p-1">
                  <span className="material-symbols-outlined text-on-primary-container text-xs">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface">
                    Pro-Grade Surfaces
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    WPT-standard artificial turf for optimal grip and slide
                    control.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary-container rounded-full p-1">
                  <span className="material-symbols-outlined text-on-primary-container text-xs">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface">
                    Social Atmosphere
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Lounge, cafe, and recovery zone designed for post-match
                    connection.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right - Image */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Modern luxury sports facility interior with lounge areas, dark wood textures, and neon accent lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLAsCHyrG8denyZ9s1yRhq-U1GnJmBeXZCFClxQCtwcON6XBttdLKApSTSwdDaoOUyXvwKdle0rj3JvHJsLPlhs1iQTH-UD8ROZG-mHkPKQ9HEzSOGIrnIEkd3yplYPoKH7soBDi4b1zXbkrTl3OcSnYGdHv96txC4iHclRSPKBTj4e70YHZI11kMsb0LzdOEyoJlwtMeDjNLsd8sJxGks8deNL9mVphGvszcRd7qUhFuEZeTQ0Mp2o-OQzNxPnJCr-cVdceYwI5RO"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-panel p-8 rounded-xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-variant" />
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-variant" />
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-variant" />
                </div>
                <div>
                  <div className="text-primary font-bold">
                    500+ Active Members
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Join the community today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
