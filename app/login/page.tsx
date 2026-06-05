/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Vantage Point Padel",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface/90 to-secondary-container/20 z-10" />
        <img
          className="w-full h-full object-cover opacity-30 grayscale"
          alt="Professional blue padel court at night with bright stadium lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuArrBjWVoG60Ioh6ZeHOrGmI2VOI9XzEnKUWr4fDW0mKN8EZJ8IXRRTwlQH9MUmcjLlBrvsY2V2F7jFXCbZBCnvb_yQZNJWgLYecg9xadIrDKzUnUhadyqwpR_fcq3WfO1O57J1PAryjaovvhvRnWDrm_cOewQ3g09FUKePYdN_zQAfHChUWGl8mkDOC3tcXpSxPD31SxwQpUF6G5LfOuwPqMRxcLBdhYGEzXofT2y7Rr20iPDvSDJ9jJiO1WLLxQLZR0rzJaN4LjWF"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-20 flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Branding */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-surface-container-highest shadow-[0_0_40px_-10px_rgba(202,253,0,0.3)]">
              <span
                className="material-symbols-outlined text-primary-container text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                sports_tennis
              </span>
            </div>
            <h1 className="font-headline text-4xl font-black text-primary tracking-tighter italic uppercase">
              Vantage Point
            </h1>
            <p className="font-headline text-sm tracking-widest text-secondary font-bold uppercase mt-1">
              Padel Club
            </p>
          </div>

          {/* Login Card */}
          <div className="glass-panel border border-outline-variant/20 rounded-xl p-8 shadow-2xl">
            <header className="mb-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface">
                Welcome Back
              </h2>
              <p className="text-on-surface-variant text-sm mt-1">
                Enter your credentials to access the court.
              </p>
            </header>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block font-headline text-xs font-bold uppercase tracking-wider text-secondary" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">mail</span>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all focus:ring-2 focus:ring-primary-container/30"
                    id="email" name="email" placeholder="name@vantage.com" type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block font-headline text-xs font-bold uppercase tracking-wider text-secondary" htmlFor="password">
                    Password
                  </label>
                  <a className="text-xs font-bold text-primary-dim hover:text-primary transition-colors" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">lock</span>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all focus:ring-2 focus:ring-primary-container/30"
                    id="password" name="password" placeholder="••••••••" type="password"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 group cursor-pointer">
                <input className="h-5 w-5 rounded border-outline-variant bg-surface-container text-primary-container focus:ring-primary-container/20 transition-all" id="remember" type="checkbox" />
                <label className="text-sm text-on-surface-variant cursor-pointer group-hover:text-on-surface transition-colors" htmlFor="remember">
                  Remember my session
                </label>
              </div>

              <button className="w-full group relative overflow-hidden bg-primary-container text-on-primary-container font-headline font-extrabold text-lg py-4 rounded-full shadow-[0_10px_30px_-10px_rgba(202,253,0,0.4)] hover:shadow-[0_15px_40px_-5px_rgba(202,253,0,0.5)] transition-all active:scale-[0.98]" type="submit">
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-outline-variant/10 text-center">
              <p className="text-on-surface-variant text-sm">
                New to the club?{" "}
                <a className="font-bold text-secondary hover:text-tertiary transition-colors ml-1 underline decoration-secondary/30 underline-offset-4" href="/register">
                  Create an account
                </a>
              </p>
            </div>
          </div>

          <nav className="mt-12 flex justify-center space-x-8 text-outline text-sm font-headline font-semibold">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <span className="text-outline-variant opacity-30">•</span>
            <a className="hover:text-primary transition-colors" href="#">Support</a>
            <span className="text-outline-variant opacity-30">•</span>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full rounded-t-[2rem] mt-auto relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8 font-body text-sm">
          <div className="text-lg font-bold text-primary">Vantage Point</div>
          <div className="flex gap-6 text-on-surface-variant">
            <a className="hover:text-tertiary transition-colors" href="#">Contact</a>
            <a className="hover:text-tertiary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-tertiary transition-colors" href="#">Terms of Service</a>
          </div>
          <div className="text-on-surface-variant">© 2024 The Kinetic Court. Electric Velocity.</div>
        </div>
      </footer>
    </div>
  );
}
