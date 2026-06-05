/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Leaderboard - Kinetic Court Padel",
};

export default function LeaderboardPage() {
  const topPlayers = [
    { rank: 2, name: "Marcus 'The Wall' Rossi", points: 4850, winRate: 78, level: 4.5, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtG4DRhBQqDL4TswGGn4SMpBEm-XxXDMJX9qrTQ88T3uCT4so-_IJghI4Impj38u1ELBkazP9M3RxeFTigjYx9qIvJ5pih19sRr8Kce8vdaRim4ezm2gQfeO1F_tTKToTNdI9_Gtx8UCxnMblzXD2ZHYGltiWoibXn1OaQvLlxoMdF2eHzp4J9FLW7l7xWAsumd87SpSuJ-uYsb3Ock0t2iV1VgDz7FSoiRo9iDxey0KbUNgmJbHqmo8wOmxfyZdXieeYUO1jfjI2W" },
    { rank: 1, name: "Alexander Vantage", points: 5240, winRate: 85, level: 5.0, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdteBBiLqkgYkYFFVnIXwGjC2EBY5RNAeDikf3iP73Sf2JUeUnqcfcAlqBT0YPDWUj_aSespDdpJl-wcMahiHhkZDz3HQ3tm6z4hqmXviDqptpvniNFNksOzDl37MrTFFO7ZrTAFCGCNyTBnw80irzcUv0lpfO_uy6cMWPJZ6NJTGNY0N39JTHWQxSDgi9IuA2kaV_IrK98kZU0t-6RIPP7i8wVM0L9Q69AQNWxQUbfkwkzZUMjuauvS1ekWA-7pDa7az4qdlByZU3" },
    { rank: 3, name: "Elena 'Viper' Ross", points: 4120, winRate: 72, level: 4.2, avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOWslDMRaDCXfhbmUuKvvNRckQwZddMdWr8qP7SPFmxUHOJKZYpyD8WXjTJkuGk3IrDIfdBpKdgP-7x7izOevEBsxFu-0vPr-fCG4R6Dovyzh6lu6iEkpqUMHTaglwp8DcbEb7kwnmE6W7RapV5n5CPNf4ZLP7aLIHbvfP8yENVntlDpqBNNoFm1O5F-9wQQ5BNdSN4jsKsuZ5s2ojDo3M_3WGkO56_8Z5hAbn_2t64MOdWmmHc1YKNTJLfqlEZzQjO6XGW9H0YTR1" },
  ];

  const rankingList = [
    { rank: 4, name: "Javi Gomez", points: 3890, winRate: 68, level: 4.0, matches: "45W - 21L" },
    { rank: 5, name: "Maria Santos", points: 3450, winRate: 65, level: 3.8, matches: "38W - 18L" },
    { rank: 6, name: "Luca Bianchi", points: 3120, winRate: 62, level: 3.5, matches: "30W - 15L" },
    { rank: 7, name: "Sofia Veras", points: 2980, winRate: 60, level: 3.2, matches: "28W - 16L" },
    { rank: 8, name: "Damian Thorn", points: 2750, winRate: 58, level: 3.0, matches: "25W - 18L" },
    { rank: 9, name: "Clara Frost", points: 2430, winRate: 55, level: 2.8, matches: "22W - 15L" },
    { rank: 10, name: "Yuki Tanaka", points: 2100, winRate: 52, level: 2.5, matches: "18W - 16L" },
  ];

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden min-h-screen">
      <Sidebar activePage="Leaderboard" />
      <MobileNav activePage="Rank" />

      <main className="lg:ml-64 pt-24 lg:pt-12 pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        {/* Header */}
        <header className="mb-12 relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full" />
          <h2 className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-2">Hall of Fame</h2>
          <h1 className="text-4xl md:text-5xl font-headline font-black text-white leading-none tracking-tighter">
            THE <span className="text-primary-container italic">LEADERBOARD</span>
          </h1>
          <p className="text-on-surface-variant text-sm mt-4 max-w-md">
            Rise through the ranks, dominate the court, and earn your place among the kinetic elite.
          </p>
        </header>

        {/* Podium Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-4xl mx-auto">
            {/* 2nd Place */}
            <div className="order-2 md:order-1 flex flex-col items-center animate-in slide-in-from-bottom duration-700 delay-200">
               <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full border-4 border-[#C0C0C0] overflow-hidden shadow-[0_0_30px_rgba(192,192,192,0.3)]">
                    <img src={topPlayers[0].avatar} alt={topPlayers[0].name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#C0C0C0] text-[#1a1a1a] rounded-full flex items-center justify-center font-black text-xl">2</div>
               </div>
               <div className="text-center">
                  <h3 className="text-white font-bold text-lg mb-1">{topPlayers[0].name}</h3>
                  <p className="text-primary-container font-mono text-sm font-bold">{topPlayers[0].points} PTS</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-black mt-1">{topPlayers[0].winRate}% WIN RATE</p>
               </div>
               <div className="w-full h-24 bg-gradient-to-t from-surface-container-low to-transparent mt-4 rounded-t-xl opacity-40" />
            </div>

            {/* 1st Place */}
            <div className="order-1 md:order-2 flex flex-col items-center animate-in zoom-in duration-700">
               <div className="relative mb-6 scale-110">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary text-4xl animate-bounce">
                    <span className="material-symbols-outlined fill-1" style={{ fontSize: "48px" }}>military_tech</span>
                  </div>
                  <div className="w-32 h-32 rounded-full border-4 border-primary overflow-hidden shadow-[0_0_50px_rgba(202,253,0,0.5)]">
                    <img src={topPlayers[1].avatar} alt={topPlayers[1].name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-primary text-[#1a1a1a] rounded-full flex items-center justify-center font-black text-2xl">1</div>
               </div>
               <div className="text-center">
                  <h3 className="text-white font-headline font-black text-2xl mb-1">{topPlayers[1].name}</h3>
                  <p className="text-primary font-mono text-xl font-bold">{topPlayers[1].points} PTS</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-black mt-2">{topPlayers[1].winRate}% WIN RATE</p>
               </div>
               <div className="w-full h-40 bg-gradient-to-t from-primary/10 to-transparent mt-6 rounded-t-2xl border-t border-primary/20" />
            </div>

            {/* 3rd Place */}
            <div className="order-3 md:order-3 flex flex-col items-center animate-in slide-in-from-bottom duration-700 delay-500">
               <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full border-4 border-[#CD7F32] overflow-hidden shadow-[0_0_30px_rgba(205,127,50,0.3)]">
                    <img src={topPlayers[2].avatar} alt={topPlayers[2].name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#CD7F32] text-[#1a1a1a] rounded-full flex items-center justify-center font-black text-xl">3</div>
               </div>
               <div className="text-center">
                  <h3 className="text-white font-bold text-lg mb-1">{topPlayers[2].name}</h3>
                  <p className="text-primary-container font-mono text-sm font-bold">{topPlayers[2].points} PTS</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-black mt-1">{topPlayers[2].winRate}% WIN RATE</p>
               </div>
               <div className="w-full h-16 bg-gradient-to-t from-surface-container-low to-transparent mt-4 rounded-t-xl opacity-30" />
            </div>
          </div>
        </section>

        {/* Ranking List Table */}
        <section className="bg-surface-container-low border border-outline-variant/10 rounded-3xl overflow-hidden animate-in fade-in duration-1000">
           <div className="px-8 py-6 border-b border-outline-variant/10 bg-surface-container-high/50 flex justify-between items-center">
              <h4 className="text-white font-headline font-bold text-xl uppercase tracking-tight">Global Standings</h4>
              <div className="flex gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                <span className="text-primary">All Time</span>
                <span className="opacity-30">|</span>
                <span className="hover:text-white cursor-pointer transition-colors">Monthly</span>
              </div>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-highest/30 border-b border-outline-variant/10">
                    <th className="p-6 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Rank</th>
                    <th className="p-6 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Player</th>
                    <th className="p-6 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Rating</th>
                    <th className="p-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-center">Efficiency</th>
                    <th className="p-6 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Record</th>
                    <th className="p-6 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {rankingList.map((player) => (
                    <tr key={player.rank} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6 font-mono font-bold text-on-surface-variant/60 group-hover:text-primary transition-colors">#{player.rank}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-on-surface-variant font-bold text-xs uppercase">
                              {player.name.substring(0, 2)}
                           </div>
                           <span className="text-white font-bold text-sm tracking-tight">{player.name}</span>
                        </div>
                      </td>
                      <td className="p-6">
                         <span className="bg-primary/20 text-primary border border-primary/20 px-3 py-1 rounded text-xs font-black">{player.level.toFixed(1)}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col items-center gap-2">
                           <div className="w-full max-w-[80px] h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                              <div className="h-full bg-primary-container" style={{ width: `${player.winRate}%` }} />
                           </div>
                           <span className="text-[10px] font-bold text-white">{player.winRate}%</span>
                        </div>
                      </td>
                      <td className="p-6 text-on-surface-variant text-xs font-bold font-mono italic">{player.matches}</td>
                      <td className="p-6 text-right">
                         <span className="text-primary-container font-mono font-bold text-lg">{player.points.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </section>

        {/* Current User Standing Card */}
        <div className="mt-12 p-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-tertiary/30 rounded-2xl">
          <div className="bg-surface-container-low rounded-[14px] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden">
                  <img src={topPlayers[1].avatar} alt="Current User" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Your Standing</p>
                   <h4 className="text-2xl font-headline font-black text-white">Rank #1 Global</h4>
                </div>
             </div>
             <div className="flex gap-8 text-center">
                <div>
                   <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Next Rankup</p>
                   <p className="text-lg font-bold text-white">Master Elite</p>
                </div>
                <div className="h-10 w-px bg-outline-variant/20 self-center" />
                <div>
                   <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Point Gap</p>
                   <p className="text-lg font-bold text-tertiary">+390 <span className="text-xs text-on-surface-variant">vs #2</span></p>
                </div>
             </div>
             <button className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-xl active:scale-95 transition-all shadow-[0_4px_20px_rgba(202,253,0,0.3)]">
                Challenge Top 10
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}
