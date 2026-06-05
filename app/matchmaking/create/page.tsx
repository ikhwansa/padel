import type { Metadata } from "next";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Host a Match | Vantage Point Padel",
};

export default function CreateMatchPage() {
  return (
    <div className="flex pt-20 lg:pt-0 min-h-screen bg-surface">
      <Sidebar activePage="Matchmaking" />
      <MobileNav activePage="Social" />

      <main className="flex-1 lg:ml-64 px-6 lg:px-12 py-8 pb-32 max-w-[1400px] mx-auto overflow-x-hidden">
        <header className="mb-10 relative z-10">
          <Link href="/matchmaking" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest mb-6 w-fit group">
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Matchmaking
          </Link>
          
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-headline font-black text-primary uppercase tracking-tighter italic shadow-primary/20 drop-shadow-xl">
            Host a Session
          </h1>
          <p className="text-on-surface-variant mt-2 max-w-xl text-lg font-body">
            Set the rules, pick the arena, and invite the community.
          </p>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[120px] rounded-full pointer-events-none" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          {/* Form Area */}
          <div className="lg:col-span-8 bg-surface-container-low rounded-3xl p-6 md:p-10 border border-outline-variant/10 shadow-2xl">
            <form className="space-y-12">
              {/* Match Details */}
              <section>
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">info</span> 
                  Match Details
                </h2>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest px-2 block">
                      Session Title
                    </label>
                    <input 
                      className="w-full bg-surface-container-highest border border-transparent rounded-2xl p-5 text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:bg-surface transition-all font-headline text-lg shadow-inner" 
                      placeholder="e.g. Saturday Night Volleys" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 relative">
                      <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest px-2 block">
                        Skill Level
                      </label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-highest text-on-surface p-5 rounded-2xl border border-transparent outline-none focus:border-primary-container focus:bg-surface appearance-none cursor-pointer transition-all font-bold">
                          <option>Open for All</option>
                          <option>Beginner (1.0 - 2.5)</option>
                          <option>Intermediate (3.0 - 4.0)</option>
                          <option>Pro Level (4.5+)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                      </div>
                    </div>
                    <div className="space-y-3 relative">
                      <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest px-2 block">
                        Game Type
                      </label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-highest text-on-surface p-5 rounded-2xl border border-transparent outline-none focus:border-primary-container focus:bg-surface appearance-none cursor-pointer transition-all font-bold">
                          <option>Casual / Social</option>
                          <option>Competitive / Ladder</option>
                          <option>Training / Drills</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Time & Location */}
              <section className="pt-10 border-t border-outline-variant/10">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">place</span> 
                  Time & Arena
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest px-2 block">
                      Date
                    </label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full bg-surface-container-highest border border-transparent rounded-2xl p-5 text-on-surface focus:outline-none focus:border-primary-container focus:bg-surface transition-all font-bold appearance-none [color-scheme:dark]" 
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest px-2 block">
                      Duration
                    </label>
                    <div className="flex gap-3">
                      <input 
                        type="time" 
                        defaultValue="19:00"
                        className="w-full bg-surface-container-highest border border-transparent rounded-2xl p-5 text-on-surface focus:outline-none focus:border-primary-container focus:bg-surface transition-all font-bold text-center [color-scheme:dark]" 
                      />
                      <span className="text-on-surface-variant flex items-center font-bold">to</span>
                      <input 
                        type="time" 
                        defaultValue="21:00"
                        className="w-full bg-surface-container-highest border border-transparent rounded-2xl p-5 text-on-surface focus:outline-none focus:border-primary-container focus:bg-surface transition-all font-bold text-center [color-scheme:dark]" 
                      />
                    </div>
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest px-2 block">
                      Preferred Court
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                      <label className="border-2 border-primary-container bg-primary-container/10 rounded-2xl p-5 cursor-pointer relative overflow-hidden group">
                        <input type="radio" name="court" className="opacity-0 absolute" defaultChecked />
                        <span className="material-symbols-outlined text-primary-container mb-3 block text-3xl">star</span>
                        <h4 className="font-headline font-bold text-lg text-primary">Pro Series</h4>
                        <p className="text-xs text-on-surface-variant font-medium mt-1">Central courts</p>
                        <div className="absolute top-4 right-4 w-5 h-5 rounded-full border-2 border-primary bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(202,253,0,0.5)]">
                          <div className="w-2 h-2 rounded-full bg-on-primary-fixed"></div>
                        </div>
                      </label>
                      <label className="border-2 border-transparent bg-surface-container-highest hover:bg-surface-bright rounded-2xl p-5 cursor-pointer transition-colors relative">
                        <input type="radio" name="court" className="opacity-0 absolute" />
                        <span className="material-symbols-outlined text-secondary mb-3 block text-3xl opacity-80">sports_tennis</span>
                        <h4 className="font-headline font-bold text-lg text-on-surface">Standard</h4>
                        <p className="text-xs text-on-surface-variant font-medium mt-1">Glass walls</p>
                      </label>
                      <label className="border-2 border-transparent bg-surface-container-highest hover:bg-surface-bright rounded-2xl p-5 cursor-pointer transition-colors relative">
                        <input type="radio" name="court" className="opacity-0 absolute" />
                        <span className="material-symbols-outlined text-tertiary mb-3 block text-3xl opacity-80">ac_unit</span>
                        <h4 className="font-headline font-bold text-lg text-on-surface">Indoor</h4>
                        <p className="text-xs text-on-surface-variant font-medium mt-1">A/C controlled</p>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Roster & Visibility */}
              <section className="pt-10 border-t border-outline-variant/10">
                 <h2 className="font-headline font-bold text-2xl text-on-surface mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary hover:animate-spin">group</span> 
                  Players & Visibility
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-surface-container-highest to-surface p-6 rounded-2xl border border-outline-variant/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-inner">
                    <div>
                      <h4 className="font-headline font-bold text-on-surface text-lg">Public Session</h4>
                      <p className="text-sm text-on-surface-variant mt-1 font-medium">Anyone matching your skill level can hit "Join" and take a slot.</p>
                    </div>
                    <label className="w-16 h-8 bg-primary rounded-full relative cursor-pointer px-1 flex items-center shrink-0 shadow-[0_0_15px_rgba(202,253,0,0.2)]">
                      <input type="checkbox" defaultChecked className="sr-only" />
                      <div className="w-6 h-6 bg-on-primary-fixed rounded-full ml-auto shadow-md transition-all" />
                    </label>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest px-2 block">
                      Open Slots Needed
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[1, 2, 3].map((num) => (
                        <button key={num} type="button" className={`w-16 h-16 rounded-2xl font-headline font-black text-2xl flex items-center justify-center transition-all ${num === 3 ? 'bg-primary text-on-primary-fixed shadow-[0_10px_20px_rgba(202,253,0,0.3)] ring-2 ring-primary ring-offset-2 ring-offset-surface' : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-bright hover:text-white'}`}>
                          {num}
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-on-surface-variant font-medium flex items-center gap-2 mt-3 px-2">
                      <span className="material-symbols-outlined text-sm text-primary">info</span>
                      You are automatically included as the Host (+1).
                    </p>
                  </div>
                </div>
              </section>
            </form>
          </div>

          {/* Sticky Summary */}
          <aside className="lg:col-span-4 relative">
            <div className="sticky top-28 bg-surface-container-highest border border-outline-variant/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none rotate-12">
                <span className="material-symbols-outlined text-[200px] text-primary">bolt</span>
              </div>
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
              
              <div className="bg-primary-container text-on-primary-fixed px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-8 relative z-10 shadow-lg">
                Match Preview
              </div>
              
              <h3 className="text-4xl font-headline font-black text-white leading-tight mb-8 relative z-10 italic drop-shadow-md">
                Saturday Night Volleys
              </h3>

              <div className="space-y-6 mb-12 relative z-10">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-lg">calendar_month</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">When</p>
                    <p className="font-bold text-on-surface text-lg leading-none">Sat, Nov 12 • 19:00</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/10 flex items-center justify-center text-secondary shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-lg">stadium</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Arena</p>
                    <p className="font-bold text-on-surface text-lg leading-none">Pro Series Court</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline-variant/10 flex items-center justify-center text-tertiary shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-lg">group</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Format</p>
                    <p className="font-bold text-on-surface text-lg leading-none">Intermediate • 3 Slots</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-outline-variant/20 pt-8 mt-auto relative z-10">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-sm font-bold text-on-surface-variant block mb-1">Court Fee (Your share)</span>
                    <span className="text-xs text-on-surface-variant/70">Split automatically</span>
                  </div>
                  <span className="text-3xl font-headline font-black text-primary">Rp 215k</span>
                </div>
                
                <button className="w-full py-5 bg-primary text-on-primary-fixed rounded-full font-headline font-black uppercase text-sm tracking-widest hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(202,253,0,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-xl">add_alert</span> Publish Match
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
