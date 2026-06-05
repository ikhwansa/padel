"use client";

import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminMobileNav from "@/components/AdminMobileNav";

export default function AdminClient() {
  const [activeTab, setActiveTab] = useState("overview");

  const todayStr = "2024-10-15";
  const [scheduleDateFilter, setScheduleDateFilter] = useState(todayStr);
  const [scheduleCourtFilter, setScheduleCourtFilter] = useState("All Courts");
  const [addingBooking, setAddingBooking] = useState<{ time: string, court: string, player: string } | null>(null);

  const [promos, setPromos] = useState([
    { id: 1, code: "PADELMALAM", discount: 15, usageCount: 24, expiry: "2024-12-01", status: "ACTIVE" },
    { id: 2, code: "WEEKENDWARRIOR", discount: 20, usageCount: 8, expiry: "2024-11-15", status: "ACTIVE" },
    { id: 3, code: "FIRSTMATCH", discount: 50, usageCount: 156, expiry: "2024-10-30", status: "EXPIRED" },
  ]);

  const [newPromo, setNewPromo] = useState({ code: "", discount: 0, expiry: "" });

  // Mock Databases
  const [courts, setCourts] = useState([
    { id: 1, name: "Court 1: The Core", status: "OPEN", baseRate: 700000, peakRate: 850000, amenities: ["Rental Rackets", "Locker Access"] },
    { id: 2, name: "Court 2: Velocity", status: "OPEN", baseRate: 700000, peakRate: 850000, amenities: ["Camera System", "Towels"] },
    { id: 3, name: "The Sky Box", status: "MAINTENANCE", baseRate: 1100000, peakRate: 1400000, amenities: ["Private AC", "VIP Lounge", "Catering"] },
  ]);

  const [editingCourt, setEditingCourt] = useState<{id?: number, name: string, status: string, baseRate: number, peakRate: number, amenities: string[]} | null>(null);

  const handleDeleteCourt = (id: number) => {
    setCourts(courts.filter(c => c.id !== id));
  };

  const handleSaveCourt = () => {
    if (!editingCourt) return;
    
    if (editingCourt.id) {
      setCourts(courts.map(c => c.id === editingCourt.id ? editingCourt as any : c));
    } else {
      setCourts([...courts, { ...editingCourt, id: Date.now() } as any]);
    }
    setEditingCourt(null);
  };


  const [players, setPlayers] = useState([
    { id: 1, name: "Alexander Vantage", phone: "+34 654 098 712", email: "alexander@vantage.io", level: 3.5, noShows: 0, blacklisted: false },
    { id: 2, name: "Maria Santos", phone: "+34 711 223 999", email: "msantos@mail.es", level: 2.0, noShows: 1, blacklisted: false },
    { id: 3, name: "Javi Gomez", phone: "+34 600 555 111", email: "jgomez99@live.com", level: 4.5, noShows: 3, blacklisted: true },
    { id: 4, name: "Elena Ross", phone: "+34 688 888 888", email: "elena.ross@tech.com", level: 1.5, noShows: 0, blacklisted: false },
  ]);

  const [matches, setMatches] = useState([
    { id: 101, court: "Court 2: Velocity", time: "18:00 - 19:30", type: "Competitive", joined: 3, outOf: 4, autoCancel: true },
    { id: 102, court: "Court 1: The Core", time: "20:00 - 21:30", type: "Social", joined: 1, outOf: 4, autoCancel: false },
  ]);

  const [schedule, setSchedule] = useState([
    { id: "s1", date: todayStr, time: "08:00", court: "Court 1: The Core", player: "Alexander Vantage", status: "PENDING" },
    { id: "s2", date: todayStr, time: "09:00", court: "Court 1: The Core", player: "Elena Ross", status: "ARRIVED" },
    { id: "s3", date: todayStr, time: "10:00", court: "The Sky Box", player: "Corporate Event", status: "PENDING" },
    { id: "s4", date: todayStr, time: "14:00", court: "Court 2: Velocity", player: "Maria Santos", status: "NO-SHOW" },
  ]);

  const handleSaveBooking = () => {
    if (!addingBooking || !addingBooking.player) return;
    setSchedule([
      ...schedule,
      {
        id: `s-new-${Date.now()}`,
        date: scheduleDateFilter,
        time: addingBooking.time,
        court: addingBooking.court,
        player: addingBooking.player,
        status: "PENDING"
      }
    ]);
    setAddingBooking(null);
  };

  const toggleCourtStatus = (id: number) => {
    setCourts(courts.map(c => c.id === id ? { ...c, status: c.status === "OPEN" ? "MAINTENANCE" : "OPEN" } : c));
  };

  const updatePlayerLevel = (id: number, newLevel: number) => {
    setPlayers(players.map(p => p.id === id ? { ...p, level: newLevel } : p));
  };

  const toggleBlacklist = (id: number) => {
    setPlayers(players.map(p => p.id === id ? { ...p, blacklisted: !p.blacklisted } : p));
  };

  const updateScheduleStatus = (id: string, newStatus: string) => {
    setSchedule(schedule.map(s => s.id === id ? { ...s, status: newStatus} : s));
  };

  const handleGeneratePromo = () => {
    if (!newPromo.code) return;
    setPromos([...promos, { ...newPromo, id: Date.now(), usageCount: 0, status: "ACTIVE" }]);
    setNewPromo({ code: "", discount: 0, expiry: "" });
  };

  const handleDeletePromo = (id: number) => {
    setPromos(promos.filter(p => p.id !== id));
  };

  return (
    <div className="flex min-h-screen relative bg-surface">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <AdminMobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 lg:ml-72 pb-24 lg:pb-8 pt-20 lg:pt-0">
        <div className="mt-8 lg:mt-16 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
          
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-error font-headline text-[10px] uppercase tracking-[0.3em] font-black mb-2 block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span> RESTRICTED ACCESS
              </span>
              <h2 className="text-4xl lg:text-6xl font-headline font-black text-on-surface tracking-tighter leading-none">
                ADMIN <span className="text-primary-container italic">NEXUS</span>
              </h2>
            </div>
            {/* The horizontal tab navigation was moved to the dedicated AdminSidebar / AdminMobileNav */}
          </header>

          <hr className="border-outline-variant/10" />

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest">Today's Revenue</p>
                    <span className="material-symbols-outlined text-secondary">payments</span>
                  </div>
                  <h3 className="text-4xl font-headline font-black text-white mb-2">Rp 4.250k</h3>
                  <p className="text-primary text-xs font-bold">+12% vs yesterday</p>
                </div>
                <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest">Active Bookings</p>
                    <span className="material-symbols-outlined text-tertiary">calendar_clock</span>
                  </div>
                  <h3 className="text-4xl font-headline font-black text-white mb-2">24</h3>
                  <p className="text-on-surface-variant text-xs font-bold">4 slots remaining tonight</p>
                </div>
                <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest">Online Players</p>
                    <span className="material-symbols-outlined text-primary-container">sports_gymnastics</span>
                  </div>
                  <h3 className="text-4xl font-headline font-black text-white mb-2">12</h3>
                  <p className="text-primary text-xs font-bold">Currently checked-in</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-surface-container-highest border border-outline-variant/10 rounded-2xl p-6">
                   <h4 className="font-headline font-bold text-lg mb-4 text-white">Recent Transactions</h4>
                   <div className="space-y-3">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="flex justify-between items-center p-3 bg-surface-container-low rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-secondary/20 text-secondary flex items-center justify-center">
                              <span className="material-symbols-outlined text-sm">receipt_long</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white">INV-{10090+i}</p>
                              <p className="text-[10px] text-on-surface-variant">Court {i % 2 === 0 ? "2" : "1"} • 14:00</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-primary">Rp 700.000</p>
                            <span className="text-[9px] font-black uppercase text-on-primary-fixed bg-primary px-2 rounded">Paid</span>
                          </div>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COURTS */}
          {activeTab === "courts" && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
               <div className="flex justify-between items-center bg-surface-container-low border border-outline-variant/10 p-6 rounded-2xl">
                 <div>
                   <h3 className="font-headline font-bold text-xl text-white">Court Registry</h3>
                   <p className="text-sm text-on-surface-variant">Manage your physical assets, availability, and pricing.</p>
                 </div>
                 <button onClick={() => setEditingCourt({name: "", status: "OPEN", baseRate: 0, peakRate: 0, amenities: []})} className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-lg shadow-primary-container/20">
                   <span className="material-symbols-outlined text-sm">add</span> Add Court
                 </button>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 {courts.map(court => (
                   <div key={court.id} className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-6 relative overflow-hidden group">
                      {court.status === "MAINTENANCE" && (
                        <div className="absolute inset-0 bg-error/5 z-0 pointer-events-none" />
                      )}

                      {/* Action Overlay */}
                      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setEditingCourt(court)} className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary border border-outline-variant/20 hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-lg cursor-pointer"><span className="material-symbols-outlined text-sm">edit</span></button>
                        <button onClick={() => handleDeleteCourt(court.id)} className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-error border border-outline-variant/20 hover:bg-error hover:text-white transition-colors shadow-lg cursor-pointer"><span className="material-symbols-outlined text-sm">delete</span></button>
                      </div>

                      <div className="flex justify-between items-start mb-6 relative z-10 w-[80%]">
                        <div>
                          <h4 className="font-headline font-bold text-xl text-white line-clamp-2">{court.name}</h4>
                          <span className={`inline-block mt-2 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${court.status === "OPEN" ? "bg-primary/20 text-primary" : "bg-error/20 text-error"}`}>{court.status}</span>
                        </div>
                      </div>

                      <div className="space-y-3 relative z-10">
                        <div className="flex justify-between items-center bg-surface-container-highest p-2 rounded">
                          <span className="text-xs font-bold text-on-surface-variant">Base Rate (Rp)</span>
                          <span className="text-sm font-mono font-bold text-white">{court.baseRate.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center bg-surface-container-highest p-2 rounded">
                          <span className="text-xs font-bold text-on-surface-variant">Peak Rate (Rp)</span>
                          <span className="text-sm font-mono font-bold text-white">{court.peakRate.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="mt-6 relative z-10">
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Amenities</p>
                        <div className="flex flex-wrap gap-2">
                           {court.amenities.map((am, i) => (
                             <span key={i} className="text-[10px] bg-secondary-container/20 text-secondary border border-secondary/20 px-2 py-1 rounded-full">{am}</span>
                           ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-outline-variant/10 relative z-10 flex justify-between items-center opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-bold text-on-surface-variant">Live Status</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={court.status === "OPEN"} onChange={() => toggleCourtStatus(court.id)} className="sr-only peer" />
                          <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* TAB 3: SCHEDULE */}
          {activeTab === "schedule" && (() => {
            const filteredSchedule = schedule.filter(s => s.date === scheduleDateFilter && (scheduleCourtFilter === "All Courts" || s.court === scheduleCourtFilter));
            return (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
               <div className="px-6 py-5 border-b border-outline-variant/10 flex flex-col lg:flex-row justify-between lg:items-center gap-4 bg-surface-container-high/50">
                 <div>
                   <h4 className="font-headline font-bold text-lg text-white mb-2">Master Schedule Grid</h4>
                   <div className="flex flex-wrap items-center gap-3">
                     <span className="material-symbols-outlined text-sm text-on-surface-variant">filter_list</span>
                     <input 
                       type="date" 
                       value={scheduleDateFilter} 
                       onChange={(e) => setScheduleDateFilter(e.target.value)} 
                       className="bg-surface-container-highest border border-outline-variant/20 rounded p-1.5 text-xs font-bold text-white focus:ring-primary-container" 
                     />
                     <select 
                       value={scheduleCourtFilter} 
                       onChange={(e) => setScheduleCourtFilter(e.target.value)} 
                       className="bg-surface-container-highest border border-outline-variant/20 rounded p-1.5 text-xs font-bold text-white focus:ring-primary-container max-w-[150px] truncate"
                     >
                       <option value="All Courts">All Courts</option>
                       {courts.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                     </select>
                   </div>
                 </div>
                 <button onClick={() => setAddingBooking({ time: "08:00", court: courts[0].name, player: "" })} className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-tertiary-container/20 mt-2 lg:mt-0">
                   <span className="material-symbols-outlined text-sm">front_hand</span> OTC Booking
                 </button>
               </div>
               <div className="overflow-x-auto min-h-[300px]">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-surface-container-highest/50 border-b border-outline-variant/10">
                       <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Time</th>
                       <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Court</th>
                       <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Player / Event</th>
                       <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                       <th className="p-4 text-xs font-bold text-on-surface-variant text-right uppercase tracking-widest">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-outline-variant/10">
                     {filteredSchedule.length === 0 && (
                       <tr><td colSpan={5} className="p-8 text-center text-on-surface-variant text-sm border-dashed border border-outline-variant/10 m-4 rounded-xl block w-full mt-4 bg-surface-container"><span className="material-symbols-outlined block text-2xl text-on-surface-variant/50 mb-2">event_busy</span>No bookings found for the selected date or court.</td></tr>
                     )}
                     {filteredSchedule.sort((a,b) => a.time.localeCompare(b.time)).map(s => (
                       <tr key={s.id} className="hover:bg-surface-container/50 transition-colors">
                         <td className="p-4 font-headline font-bold text-white whitespace-nowrap">{s.time} - {parseInt(s.time)+1}:30</td>
                         <td className="p-4 text-sm text-on-surface-variant font-medium whitespace-nowrap">{s.court}</td>
                         <td className="p-4 text-sm font-bold text-white whitespace-nowrap">{s.player}</td>
                         <td className="p-4 whitespace-nowrap">
                           <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded 
                              ${s.status === 'ARRIVED' ? 'bg-primary/20 text-primary' 
                                : s.status === 'NO-SHOW' ? 'bg-error/20 text-error' 
                                : 'bg-surface-bright text-on-surface-variant border border-outline-variant/20'}`}>
                              {s.status}
                           </span>
                         </td>
                         <td className="p-4 text-right whitespace-nowrap">
                           {s.status === "PENDING" ? (
                             <div className="flex items-center justify-end gap-2">
                               <button onClick={() => updateScheduleStatus(s.id, "ARRIVED")} className="w-8 h-8 rounded bg-surface-bright text-primary hover:bg-primary/20 transition-colors flex items-center justify-center cursor-pointer" title="Mark Arrived"><span className="material-symbols-outlined text-sm">check</span></button>
                               <button onClick={() => updateScheduleStatus(s.id, "NO-SHOW")} className="w-8 h-8 rounded bg-surface-bright text-error hover:bg-error/20 transition-colors flex items-center justify-center cursor-pointer" title="Mark No-Show"><span className="material-symbols-outlined text-sm">close</span></button>
                             </div>
                           ) : (
                             <button onClick={() => updateScheduleStatus(s.id, "PENDING")} className="text-[10px] text-on-surface-variant hover:text-white underline cursor-pointer">Undo</button>
                           )}
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          );})()}

          {/* TAB 4: PLAYERS */}
          {activeTab === "players" && (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
               <div className="px-6 py-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high/50">
                 <h4 className="font-headline font-bold text-lg text-white">Player Database</h4>
                 <div className="relative">
                   <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
                   <input type="text" placeholder="Search players..." className="bg-surface-container-lowest border border-outline-variant/20 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:ring-primary-container" />
                 </div>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-surface-container-highest/50 border-b border-outline-variant/10">
                       <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Player</th>
                       <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Contact</th>
                       <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Rating LVL</th>
                       <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-center">No-Shows</th>
                       <th className="p-4 text-xs font-bold text-on-surface-variant text-right uppercase tracking-widest">Status</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-outline-variant/10">
                     {players.map(p => (
                       <tr key={p.id} className={`transition-colors ${p.blacklisted ? 'bg-error/5' : 'hover:bg-surface-container/50'}`}>
                         <td className="p-4 font-headline font-bold text-white whitespace-nowrap">{p.name}</td>
                         <td className="p-4 text-sm text-on-surface-variant whitespace-nowrap">
                           <div>{p.phone}</div>
                           <div className="text-[10px]">{p.email}</div>
                         </td>
                         <td className="p-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{p.level.toFixed(1)}</span>
                              <div className="flex flex-col">
                                <button onClick={() => updatePlayerLevel(p.id, Math.min(7.0, p.level + 0.5))} className="material-symbols-outlined text-[10px] text-on-surface-variant hover:text-white cursor-pointer">keyboard_arrow_up</button>
                                <button onClick={() => updatePlayerLevel(p.id, Math.max(1.0, p.level - 0.5))} className="material-symbols-outlined text-[10px] text-on-surface-variant hover:text-white cursor-pointer">keyboard_arrow_down</button>
                              </div>
                            </div>
                         </td>
                         <td className="p-4 text-center whitespace-nowrap">
                           <span className={`text-sm font-bold ${p.noShows >= 3 ? 'text-error' : p.noShows > 0 ? 'text-tertiary' : 'text-on-surface-variant'}`}>{p.noShows}</span>
                         </td>
                         <td className="p-4 text-right whitespace-nowrap">
                            <button 
                              onClick={() => toggleBlacklist(p.id)} 
                              className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded cursor-pointer transition-all
                                ${p.blacklisted ? 'bg-error text-white hover:bg-error/80' : 'bg-surface-bright text-on-surface-variant hover:text-error hover:bg-error/10 border border-outline-variant/30'}`}
                            >
                              {p.blacklisted ? "BLACKLISTED" : "Restrict"}
                            </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          )}

          {/* TAB 5: MATCHMAKING */}
          {activeTab === "matchmaking" && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="bg-secondary-container/10 border border-secondary/20 rounded-2xl p-6">
                 <div className="flex justify-between items-start">
                   <div>
                     <h3 className="font-headline font-bold text-xl text-secondary flex items-center gap-2 mb-2"><span className="material-symbols-outlined">network_intelligence</span> Open Match Control</h3>
                     <p className="text-sm text-on-surface-variant">Monitor public games. System auto-cancels matches with less than 4 players 1 hour prior to start.</p>
                   </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matches.map(match => {
                  const fullness = (match.joined / match.outOf) * 100;
                  return (
                  <div key={match.id} className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-6 relative">
                     <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-secondary/20 text-secondary px-2 py-1 rounded">{match.type}</span>
                        <div className="flex items-center gap-1 text-xs font-bold text-on-surface-variant">
                          <span className="material-symbols-outlined text-sm">schedule</span> {match.time}
                        </div>
                     </div>
                     <h4 className="font-headline font-bold text-xl text-white mb-6">{match.court}</h4>
                     
                     <div className="mb-4">
                       <div className="flex justify-between text-xs font-bold mb-2">
                         <span className="text-white">Players Joined</span>
                         <span className={match.joined < match.outOf ? "text-tertiary" : "text-primary"}>{match.joined}/{match.outOf}</span>
                       </div>
                       <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                         <div className={`h-1.5 rounded-full ${match.joined === match.outOf ? 'bg-primary' : 'bg-tertiary'}`} style={{ width: `${fullness}%` }}></div>
                       </div>
                     </div>

                     <div className="pt-4 border-t border-outline-variant/10 mt-6 flex justify-between items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" defaultChecked={match.autoCancel} className="rounded bg-surface-bright border-none text-secondary focus:ring-secondary/50 focus:ring-offset-surface-container-highest" />
                          <span className="text-xs text-on-surface-variant">Auto-cancel if not full</span>
                        </label>
                        <button className="text-[10px] font-black uppercase tracking-widest bg-error/10 text-error px-3 py-1.5 rounded hover:bg-error/20 transition-all cursor-pointer">Force Cancel</button>
                     </div>
                  </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* TAB 6: PROMOS */}
          {activeTab === "promos" && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 {/* Create Promo Card */}
                 <div className="lg:col-span-1 bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 flex flex-col">
                    <h3 className="font-headline font-bold text-xl text-white mb-2 flex items-center gap-2">
                       <span className="material-symbols-outlined text-primary">add_card</span> Create Promo
                    </h3>
                    <p className="text-xs text-on-surface-variant mb-6 uppercase tracking-widest font-bold">New Voucher Generator</p>
                    
                    <div className="space-y-4 flex-1">
                      <div>
                        <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Promo Code</label>
                        <input type="text" value={newPromo.code} onChange={(e) => setNewPromo({...newPromo, code: e.target.value.toUpperCase()})} placeholder="e.g. PADEL50" className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container font-mono text-sm" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Discount %</label>
                          <input type="number" value={newPromo.discount} onChange={(e) => setNewPromo({...newPromo, discount: parseInt(e.target.value) || 0})} className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container text-sm" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-1">Expiry</label>
                          <input type="date" value={newPromo.expiry} onChange={(e) => setNewPromo({...newPromo, expiry: e.target.value})} className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container text-xs" />
                        </div>
                      </div>
                    </div>

                    <button onClick={handleGeneratePromo} disabled={!newPromo.code} className="mt-8 w-full bg-primary-container text-on-primary-container rounded-lg py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all text-center disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(202,253,0,0.1)]">
                      Generate Promo Code
                    </button>
                 </div>

                 {/* Promo List */}
                 <div className="lg:col-span-2 bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden flex flex-col">
                    <div className="px-6 py-5 border-b border-outline-variant/10 bg-surface-container-high/50 flex justify-between items-center">
                       <h4 className="font-headline font-bold text-lg text-white">Active Vouchers</h4>
                       <span className="text-[10px] font-black bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded uppercase tracking-widest">{promos.length} Items</span>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse">
                          <thead>
                             <tr className="bg-surface-container-highest/30 border-b border-outline-variant/10">
                                <th className="p-4 text-[10px] font-black text-on-surface-variant uppercase tracking-tighter">Code</th>
                                <th className="p-4 text-[10px] font-black text-on-surface-variant uppercase tracking-tighter">Value</th>
                                <th className="p-4 text-[10px] font-black text-on-surface-variant uppercase tracking-tighter text-center">Usages</th>
                                <th className="p-4 text-[10px] font-black text-on-surface-variant uppercase tracking-tighter">Expiry</th>
                                <th className="p-4 text-[10px] font-black text-on-surface-variant uppercase tracking-tighter text-right">Action</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-outline-variant/10">
                             {promos.map(promo => (
                               <tr key={promo.id} className="hover:bg-surface-container/30 transition-colors group">
                                  <td className="p-4 font-mono font-bold text-white text-sm">{promo.code}</td>
                                  <td className="p-4">
                                     <span className="text-primary font-bold text-sm">-{promo.discount}%</span>
                                  </td>
                                  <td className="p-4 text-center">
                                     <div className="inline-flex flex-col items-center">
                                        <span className="text-white font-black text-lg leading-none">{promo.usageCount}</span>
                                        <span className="text-[8px] text-on-surface-variant uppercase font-bold tracking-widest">Redeemed</span>
                                     </div>
                                  </td>
                                  <td className="p-4">
                                     <div className="flex flex-col">
                                        <span className="text-xs text-white font-medium">{promo.expiry}</span>
                                        <span className={`text-[8px] font-black uppercase tracking-widest ${promo.status === 'ACTIVE' ? 'text-primary' : 'text-error'}`}>{promo.status}</span>
                                     </div>
                                  </td>
                                  <td className="p-4 text-right">
                                     <button onClick={() => handleDeletePromo(promo.id)} className="w-8 h-8 rounded-lg bg-error/10 text-error opacity-0 group-hover:opacity-100 transition-all hover:bg-error hover:text-white flex items-center justify-center ml-auto cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">delete</span>
                                     </button>
                                  </td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
               </div>
            </div>
          )}

        </div>

        {/* COURT MODAL (ADD/EDIT) */}
        {editingCourt && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
             <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
               <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high/50">
                 <h3 className="font-headline font-bold text-xl text-white">{editingCourt.id ? "Edit Court" : "New Court"}</h3>
                 <button onClick={() => setEditingCourt(null)} className="text-on-surface-variant hover:text-white cursor-pointer"><span className="material-symbols-outlined">close</span></button>
               </div>
               <div className="p-6 space-y-4">
                 <div>
                   <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Court Name</label>
                   <input type="text" value={editingCourt.name} onChange={(e) => setEditingCourt({...editingCourt, name: e.target.value})} className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container focus:border-transparent text-sm font-bold" placeholder="e.g., Court 3: The Cage" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Base Rate (Rp)</label>
                     <input type="number" value={editingCourt.baseRate} onChange={(e) => setEditingCourt({...editingCourt, baseRate: parseInt(e.target.value) || 0})} className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container focus:border-transparent text-sm font-mono" />
                   </div>
                   <div>
                     <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Peak Rate (Rp)</label>
                     <input type="number" value={editingCourt.peakRate} onChange={(e) => setEditingCourt({...editingCourt, peakRate: parseInt(e.target.value) || 0})} className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container focus:border-transparent text-sm font-mono" />
                   </div>
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Amenities</label>
                   <input 
                     type="text" 
                     value={editingCourt.amenities.join(", ")} 
                     onChange={(e) => setEditingCourt({...editingCourt, amenities: e.target.value.split(",").map(s => s.trim()).filter(Boolean)})} 
                     className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container focus:border-transparent text-sm" 
                     placeholder="Comma separated (e.g. AC, Towels)"
                   />
                 </div>
               </div>
               <div className="p-6 pt-0 flex gap-3">
                 <button onClick={() => setEditingCourt(null)} className="flex-1 py-3 rounded-lg bg-surface-container-highest text-white font-bold text-sm hover:brightness-110 cursor-pointer">Cancel</button>
                 <button onClick={handleSaveCourt} className="flex-1 py-3 rounded-lg bg-primary-container text-on-primary-container font-bold text-sm uppercase tracking-widest hover:brightness-110 cursor-pointer shadow-[0_0_20px_rgba(202,253,0,0.15)] flex justify-center items-center gap-2">
                    <span className="material-symbols-outlined text-sm">save</span> {editingCourt.id ? "Save Changes" : "Create Court"}
                 </button>
               </div>
             </div>
          </div>
        )}

        {/* OTC BOOKING MODAL */}
        {addingBooking && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
             <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
               <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high/50">
                 <h3 className="font-headline font-bold text-xl text-white">New OTC Booking</h3>
                 <button onClick={() => setAddingBooking(null)} className="text-on-surface-variant hover:text-white cursor-pointer"><span className="material-symbols-outlined">close</span></button>
               </div>
               <div className="p-6 space-y-4">
                 <div className="p-3 bg-surface-container-highest rounded-lg mb-4 flex items-center gap-3">
                   <span className="material-symbols-outlined text-tertiary">today</span>
                   <div>
                     <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Selected Date</p>
                     <p className="text-sm font-bold text-white">{scheduleDateFilter}</p>
                   </div>
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Player / Team Name</label>
                   <input type="text" value={addingBooking.player} onChange={(e) => setAddingBooking({...addingBooking, player: e.target.value})} className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container focus:border-transparent text-sm font-bold" placeholder="Walk-in Customer / John Doe" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Time</label>
                     <input type="time" value={addingBooking.time} step="3600" onChange={(e) => setAddingBooking({...addingBooking, time: e.target.value})} className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container focus:border-transparent text-sm font-mono" />
                   </div>
                   <div>
                       <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Court</label>
                       <select value={addingBooking.court} onChange={(e) => setAddingBooking({...addingBooking, court: e.target.value})} className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg p-3 text-white focus:ring-primary-container focus:border-transparent text-sm">
                         {courts.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                       </select>
                   </div>
                 </div>
               </div>
               <div className="p-6 pt-0 flex gap-3">
                 <button onClick={() => setAddingBooking(null)} className="flex-1 py-3 rounded-lg bg-surface-container-highest text-white font-bold text-sm hover:brightness-110 cursor-pointer">Cancel</button>
                 <button onClick={handleSaveBooking} disabled={!addingBooking.player} className="flex-1 py-3 rounded-lg bg-tertiary-container text-on-tertiary-container font-bold text-sm uppercase tracking-widest hover:brightness-110 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,227,253,0.15)] flex justify-center items-center gap-2">
                    <span className="material-symbols-outlined text-sm">calendar_add_on</span> Reserve
                 </button>
               </div>
             </div>
          </div>
        )}

      </main>
    </div>
  );
}
