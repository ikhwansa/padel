/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Club - Register | The Kinetic Court",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center relative overflow-hidden px-4 py-12">
        {/* Background Accents */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-container-low shadow-2xl">
          {/* Left Side: Editorial Branding */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-12 overflow-hidden bg-surface-container-high mesh-pattern">
            <div className="relative z-10">
              <h1 className="font-headline font-black text-4xl text-primary italic leading-tight tracking-tighter">
                THE KINETIC COURT
              </h1>
              <p className="font-body text-on-surface-variant mt-4 text-lg max-w-xs">
                Join the elite circle of Padel enthusiasts. Speed, social, and rhythm in every volley.
              </p>
            </div>
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">Instant Bookings</p>
                  <p className="font-body text-sm text-on-surface-variant">Real-time availability for prime time slots.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">Pro Community</p>
                  <p className="font-body text-sm text-on-surface-variant">Connect with players of your skill level.</p>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute bottom-[-15%] right-[-10%] opacity-10 pointer-events-none">
              <span className="font-headline font-black text-[18rem] text-primary italic leading-none select-none">COURT</span>
            </div>
            <img
              alt="Padel player hitting a smash with neon light trails"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfziZVmPP2QEHEIVK1bbsvw7u7FdJ7yuUVLQZAS_jwbhPrX1GEbhEeHvARHDTDWNO4i9FX-RX_1M0bQ2Z_HQKCXxb_-23VtCF13UJH971UQ5Ye1jFMrM4vajBlnA222TCBi1_LQ29CFg39LQyqKGLUYcAV8Mb7pgY8NPY_VNpsKq-KYzW-siQB-AxMUUI9Ew8RNGdoLOehDCzikyDDXDv4J6pv1Mp2mOFJNwUau4FgwxfYmNVDSYfbSDMCH1oQXdiQsjrMFXeKlJcy"
            />
          </div>

          {/* Right Side: Registration Form */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center glass-panel relative">
            <div className="max-w-md mx-auto w-full space-y-8">
              <header className="space-y-2">
                <h2 className="font-headline font-extrabold text-3xl tracking-tight text-on-surface">Step onto the court</h2>
                <p className="text-on-surface-variant font-body">Complete your membership profile to start playing.</p>
              </header>

              {/* Social Auth */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-surface-container-highest hover:bg-surface-bright transition-all">
                  <span className="font-label text-sm font-semibold">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-surface-container-highest hover:bg-surface-bright transition-all">
                  <span className="font-label text-sm font-semibold">Facebook</span>
                </button>
              </div>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-outline-variant/30" />
                <span className="flex-shrink mx-4 text-xs font-label text-on-surface-variant uppercase tracking-widest">Or with email</span>
                <div className="flex-grow border-t border-outline-variant/30" />
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider mb-1 px-1" htmlFor="name">Full Name</label>
                    <div className="relative">
                      <input className="w-full bg-surface-container border-none rounded-lg py-4 pl-4 pr-10 text-on-surface focus:ring-2 focus:ring-primary-container/50 transition-all placeholder:text-on-surface-variant/40" id="name" placeholder="Rafael Nadal" type="text" />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-xl">person</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider mb-1 px-1" htmlFor="reg-email">Email Address</label>
                    <div className="relative">
                      <input className="w-full bg-surface-container border-none rounded-lg py-4 pl-4 pr-10 text-on-surface focus:ring-2 focus:ring-primary-container/50 transition-all placeholder:text-on-surface-variant/40" id="reg-email" placeholder="champion@kinetic.com" type="email" />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-xl">alternate_email</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider mb-1 px-1" htmlFor="phone">Phone Number</label>
                    <div className="relative">
                      <input className="w-full bg-surface-container border-none rounded-lg py-4 pl-4 pr-10 text-on-surface focus:ring-2 focus:ring-primary-container/50 transition-all placeholder:text-on-surface-variant/40" id="phone" placeholder="+34 600 000 000" type="tel" />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-xl">call</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider mb-1 px-1" htmlFor="reg-password">Password</label>
                    <div className="relative">
                      <input className="w-full bg-surface-container border-none rounded-lg py-4 pl-4 pr-10 text-on-surface focus:ring-2 focus:ring-primary-container/50 transition-all placeholder:text-on-surface-variant/40" id="reg-password" placeholder="••••••••" type="password" />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-xl">lock</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input className="w-5 h-5 rounded border-none bg-surface-container-highest text-primary-container focus:ring-primary-container mt-0.5" id="terms" type="checkbox" />
                  <label className="text-sm font-body text-on-surface-variant leading-tight" htmlFor="terms">
                    I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a> of The Kinetic Court.
                  </label>
                </div>

                <button className="w-full py-4 bg-primary-fixed text-on-primary-fixed font-headline font-black text-lg rounded-full shadow-[0_10px_30px_-10px_rgba(202,253,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-tight" type="button">
                  Create Account
                </button>
              </form>

              <footer className="pt-8 text-center border-t border-outline-variant/10">
                <p className="font-body text-on-surface-variant">
                  Already a member? <a className="text-secondary font-bold hover:text-tertiary transition-colors" href="/login">Sign in here</a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[2rem] mt-20 bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8">
          <span className="text-lg font-bold text-primary">The Kinetic Court</span>
          <div className="flex flex-wrap justify-center gap-6 font-body text-sm text-on-surface-variant">
            <a className="hover:text-tertiary transition-colors" href="#">Contact</a>
            <a className="hover:text-tertiary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-tertiary transition-colors" href="#">Terms of Service</a>
          </div>
          <span className="font-body text-sm text-on-surface-variant">© 2024 The Kinetic Court. Electric Velocity.</span>
        </div>
      </footer>
    </div>
  );
}
