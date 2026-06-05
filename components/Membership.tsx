export default function Membership() {
  return (
    <section
      id="membership"
      className="py-24 bg-surface-container-high relative overflow-hidden"
    >
      {/* Decorative skewed accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-headline text-5xl font-black text-center mb-16">
          CHOOSE YOUR <span className="text-primary italic">TIER</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PLAYER - Basic */}
          <div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="text-on-surface-variant font-label uppercase tracking-widest mb-2">
              Casual
            </div>
            <h3 className="text-3xl font-headline font-black mb-4">PLAYER</h3>
            <div className="text-4xl font-headline font-black text-on-surface mb-8">
              Rp 750.000{" "}
              <span className="text-sm font-normal text-on-surface-variant">
                /month
              </span>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                7-Day Advance Booking
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                10% Discount on Gear
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant opacity-30">
                <span className="material-symbols-outlined text-sm">
                  cancel
                </span>
                Academy Access
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-outline font-headline font-bold group-hover:bg-primary-container group-hover:text-on-primary-container group-hover:border-transparent transition-all">
              Get Started
            </button>
          </div>

          {/* PRO - Premium (Featured) */}
          <div className="p-8 rounded-3xl bg-surface-container-highest border-2 border-primary-container relative shadow-[0_20px_50px_-20px_rgba(202,253,0,0.2)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-headline font-bold uppercase tracking-tighter">
              Most Popular
            </div>
            <div className="text-primary font-label uppercase tracking-widest mb-2">
              Elite
            </div>
            <h3 className="text-3xl font-headline font-black mb-4">PRO</h3>
            <div className="text-4xl font-headline font-black text-on-surface mb-8">
              Rp 1.950.000{" "}
              <span className="text-sm font-normal text-on-surface-variant">
                /month
              </span>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                14-Day Advance Booking
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                25% Discount on Gear
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                Unlimited Gym Access
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                Free Match Recording
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-primary-container text-on-primary-container font-headline font-bold hover:scale-[1.02] transition-transform">
              Claim Pro Access
            </button>
          </div>

          {/* LEGEND - VIP */}
          <div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="text-on-surface-variant font-label uppercase tracking-widest mb-2">
              Ultimate
            </div>
            <h3 className="text-3xl font-headline font-black mb-4">LEGEND</h3>
            <div className="text-4xl font-headline font-black text-on-surface mb-8">
              Rp 3.750.000{" "}
              <span className="text-sm font-normal text-on-surface-variant">
                /month
              </span>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                30-Day Advance Booking
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                Private Locker Suite
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                Weekly 1-on-1 Coaching
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-sm">
                  check_circle
                </span>
                Priority Event Entry
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-outline font-headline font-bold group-hover:bg-primary-container group-hover:text-on-primary-container group-hover:border-transparent transition-all">
              Join The Elite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
