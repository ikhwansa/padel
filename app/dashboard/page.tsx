/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Player Dashboard - Vantage Point Padel",
};

export default function DashboardPage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <Sidebar activePage="Dashboard" />
      <MobileNav activePage="Home" />

      <main className="lg:ml-64 min-h-screen pt-20 lg:pt-8 pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        {/* Welcome Header */}
        <header className="mb-10 relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-on-surface-variant font-label text-sm uppercase tracking-widest mb-2">Member Dashboard</h2>
              <h1 className="text-4xl md:text-5xl font-headline font-black text-primary leading-none">Welcome Back, Alex.</h1>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-xs font-bold text-tertiary border border-tertiary/20">
                <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" /> LIVE: Court 4
              </span>
            </div>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Key Stats */}
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary-container flex flex-col justify-between h-40">
              <span className="text-on-surface-variant text-xs font-label uppercase tracking-wider">Total Matches</span>
              <span className="text-4xl font-headline font-bold text-primary">128</span>
              <div className="flex items-center gap-1 text-[10px] text-primary/60">
                <span className="material-symbols-outlined text-xs">trending_up</span> +12% this month
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary flex flex-col justify-between h-40">
              <span className="text-on-surface-variant text-xs font-label uppercase tracking-wider">Membership</span>
              <span className="text-4xl font-headline font-bold text-secondary">Pro<span className="text-xl"> Tier</span></span>
              <div className="flex items-center gap-1 text-[10px] text-secondary/80 font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-[12px] text-secondary">verified</span> Active Subscriber
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary flex flex-col justify-between h-40 col-span-2 lg:col-span-1">
              <span className="text-on-surface-variant text-xs font-label uppercase tracking-wider">Kinetic Points</span>
              <span className="text-4xl font-headline font-bold text-tertiary">2,450</span>
              <span className="text-[10px] text-tertiary/60 font-medium">Redeemable in Pro Shop</span>
            </div>
          </div>

          {/* Next Match Spotlight */}
          <div className="md:col-span-4 row-span-2">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-surface-container-highest group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Blue padel court at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtG4DRhBQqDL4TswGGn4SMpBEm-XxXDMJX9qrTQ88T3uCT4so-_IJghI4Impj38u1ELBkazP9M3RxeFTigjYx9qIvJ5pih19sRr8Kce8vdaRim4ezm2gQfeO1F_tTKToTNdI9_Gtx8UCxnMblzXD2ZHYGltiWoibXn1OaQvLlxoMdF2eHzp4J9FLW7l7xWAsumd87SpSuJ-uYsb3Ock0t2iV1VgDz7FSoiRo9iDxey0KbUNgmJbHqmo8wOmxfyZdXieeYUO1jfjI2W" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-surface-container-highest/60 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="bg-primary-fixed text-on-primary-fixed w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Spotlight Match</div>
                <h3 className="text-3xl font-headline font-black text-white mb-2 leading-tight">Vs. Team Nitro</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                  Today, 18:30 • Court 2
                </p>
                <div className="flex items-center -space-x-3 mb-8">
                  <div className="w-12 h-12 rounded-full border-2 border-surface-container-highest overflow-hidden">
                    <img alt="Opponent 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdteBBiLqkgYkYFFVnIXwGjC2EBY5RNAeDikf3iP73Sf2JUeUnqcfcAlqBT0YPDWUj_aSespDdpJl-wcMahiHhkZDz3HQ3tm6z4hqmXviDqptpvniNFNksOzDl37MrTFFO7ZrTAFCGCNyTBnw80irzcUv0lpfO_uy6cMWPJZ6NJTGNY0N39JTHWQxSDgi9IuA2kaV_IrK98kZU0t-6RIPP7i8wVM0L9Q69AQNWxQUbfkwkzZUMjuauvS1ekWA-7pDa7az4qdlByZU3" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-surface-container-highest overflow-hidden">
                    <img alt="Opponent 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOWslDMRaDCXfhbmUuKvvNRckQwZddMdWr8qP7SPFmxUHOJKZYpyD8WXjTJkuGk3IrDIfdBpKdgP-7x7izOevEBsxFu-0vPr-fCG4R6Dovyzh6lu6iEkpqUMHTaglwp8DcbEb7kwnmE6W7RapV5n5CPNf4ZLP7aLIHbvfP8yENVntlDpqBNNoFm1O5F-9wQQ5BNdSN4jsKsuZ5s2ojDo3M_3WGkO56_8Z5hAbn_2t64MOdWmmHc1YKNTJLfqlEZzQjO6XGW9H0YTR1" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-surface border-2 border-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+2</div>
                </div>
                <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">
                  Check Details
                </button>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="md:col-span-8 bg-surface-container-low p-8 rounded-2xl relative overflow-hidden mesh-pattern">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div>
                <h4 className="text-xl font-headline font-bold text-white">Performance Velocity</h4>
                <p className="text-on-surface-variant text-xs">Skill progression over the last 30 days</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold rounded-lg text-primary">PWR</span>
                <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold rounded-lg text-secondary">ACC</span>
              </div>
            </div>
            <div className="h-48 w-full flex items-end justify-between gap-2 relative z-10">
              {[40, 65, 55, 90, 45, 75, 80, 60].map((h, i) => (
                <div key={i} className="w-full bg-surface-container-highest rounded-t-lg relative group" style={{ height: `${h}%` }}>
                  <div className="absolute bottom-0 w-full bg-primary-container/40 rounded-t-lg transition-all group-hover:bg-primary-container" style={{ height: `${h * 0.8}%` }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-label text-on-surface-variant/40 uppercase tracking-tighter">
              <span>Week 01</span><span>Week 02</span><span>Week 03</span><span>Week 04</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="md:col-span-7 bg-surface-container-low p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-xl font-headline font-bold text-white">Recent Activity</h4>
              <button className="text-primary text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { icon: "trophy", color: "text-primary", bg: "bg-surface-container-highest", title: "Tournament Victory", sub: "Kinetic Winter Open • Final Stage", time: "2D AGO", fill: true },
                { icon: "payments", color: "text-secondary", bg: "bg-surface-container-highest", title: "Court Booking Confirmed", sub: "Court 1 • Tomorrow 09:00", time: "3D AGO", fill: false },
                { icon: "person_add", color: "text-tertiary", bg: "bg-surface-container-highest", title: "New Friend Request", sub: "Marco 'The Wall' Rossi wants to play", time: "4D AGO", fill: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center ${item.color} group-hover:bg-primary group-hover:text-on-primary transition-colors`}>
                    <span className="material-symbols-outlined" style={item.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}>{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="text-xs text-on-surface-variant">{item.sub}</p>
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Club News */}
          <div className="md:col-span-5 bg-surface-container-low p-8 rounded-2xl flex flex-col">
            <h4 className="text-xl font-headline font-bold text-white mb-6">Club News</h4>
            <div className="flex-1 relative rounded-xl overflow-hidden mb-6 min-h-[180px]">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Athlete in motion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtBoyaA7ZIZWTWjt6R_8mJmiwSd6_AR8Y3wRH3XVPdquEbVlj23Kptj50paCtPSOq_btlqtD8QuOiPBZEcXQER-L84_CUCjDLkrbibqWcGJy-XnBfhVVxUJF77d_bnA_3cP_9gEaKitQXvADImJUs1rV3qspYP_9kOGa5lNfHsrM-snOkKVMUh-vhbjQHw1LkvFQZLxU49hSFVa6znuXznEQJi-XgHgQULipKyk3IIfppVnlinx5QE-g5399xuGwJsSDm5bjCWPQ0z" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-secondary px-2 py-0.5 rounded text-[10px] font-black text-on-secondary uppercase mb-2 inline-block">New Feature</span>
                <h5 className="text-lg font-headline font-bold text-white leading-tight">Introducing Advanced Biometrics</h5>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
              Connect your smartwatch to track real-time heart rate and average court position during every match.
            </p>
            <button className="mt-auto w-full py-3 bg-surface-container-highest text-primary border border-primary/20 rounded-xl text-xs font-bold uppercase tracking-widest active:scale-95 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
