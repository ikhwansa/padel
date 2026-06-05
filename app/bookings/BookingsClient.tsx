/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function BookingsClient() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 9, 1));

  const closeModal = () => {
    setActiveModal(null);
    setSelectedCalendarDate(null);
  };

  return (
    <div className="flex min-h-screen relative">
      <Sidebar activePage="My Bookings" />
      <MobileNav activePage="Sched" />

      <main className="flex-1 lg:ml-64 p-6 md:p-10 pt-20 lg:pt-10 mb-20 lg:mb-0">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Welcome */}
          <section className="relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-headline font-extrabold text-on-surface mb-2">Welcome back, Rafael!</h1>
                <p className="text-on-surface-variant font-body text-lg">You have <span className="text-primary font-bold">2 upcoming matches</span> this week.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-highest p-4 rounded-xl border-l-4 border-primary-container min-w[120px]">
                  <div className="text-on-surface-variant text-xs uppercase font-bold tracking-widest mb-1">Total Played</div>
                  <div className="text-3xl font-headline font-black text-on-surface">42</div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Bookings */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline font-bold text-on-surface">Upcoming Schedule</h2>
              <button type="button" onClick={() => setActiveModal('calendar')} className="text-primary font-bold text-sm uppercase tracking-widest hover:underline cursor-pointer">View Calendar</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Booking 1 */}
              <div className="group relative bg-surface-container-low rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:bg-surface-container hover:translate-y-[-4px]">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Confirmed</div>
                    <button type="button" onClick={() => setActiveModal('share')} className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform cursor-pointer">share</button>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-primary mb-1">Court 1: The Core</h3>
                  <div className="space-y-4 mt-6">
                    {[
                      { icon: "calendar_today", text: "Saturday, Oct 12, 2023" },
                      { icon: "schedule", text: "10:00 AM - 11:30 AM" },
                      { icon: "group", text: "4 Players (Full Team)" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-on-surface-variant">
                        <span className="material-symbols-outlined text-tertiary">{item.icon}</span>
                        <span className="font-body font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={() => setActiveModal('edit')} className="flex-1 py-3 bg-primary text-on-primary-fixed rounded-full font-headline font-bold text-sm transition-transform active:scale-95 cursor-pointer">Edit Booking</button>
                    <button type="button" onClick={() => setActiveModal('details')} className="px-4 py-3 border border-outline-variant text-on-surface rounded-full font-headline font-bold text-sm hover:bg-surface-variant transition-colors cursor-pointer">Details</button>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 text-primary opacity-5 font-headline font-black text-9xl italic pointer-events-none">C1</div>
              </div>

              {/* Booking 2 */}
              <div className="group relative bg-surface-container-low rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:bg-surface-container hover:translate-y-[-4px]">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Payment Pending</div>
                    <button type="button" onClick={() => setActiveModal('share')} className="material-symbols-outlined text-primary-container hover:scale-110 transition-transform cursor-pointer">share</button>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-on-surface mb-1">Court 4: Horizon</h3>
                  <div className="space-y-4 mt-6">
                    {[
                      { icon: "calendar_today", text: "Tuesday, Oct 15, 2023" },
                      { icon: "schedule", text: "06:00 PM - 07:30 PM" },
                      { icon: "group", text: "2 Players Invited" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-on-surface-variant">
                        <span className="material-symbols-outlined text-tertiary">{item.icon}</span>
                        <span className="font-body font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={() => setActiveModal('pay')} className="flex-1 py-3 bg-tertiary text-on-tertiary rounded-full font-headline font-bold text-sm transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"><span className="material-symbols-outlined text-sm">payment</span> Pay Now</button>
                    <button type="button" onClick={() => setActiveModal('invite')} className="px-4 py-3 border border-outline-variant text-on-surface rounded-full font-headline font-bold text-sm hover:bg-surface-variant transition-colors cursor-pointer">Invite</button>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 text-tertiary opacity-5 font-headline font-black text-9xl italic pointer-events-none">C4</div>
              </div>

              {/* Joined Matchmaking */}
              <div className="group relative bg-surface-container-low rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:bg-surface-container hover:translate-y-[-4px]">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Match Joined</div>
                    <button type="button" onClick={() => setActiveModal('share')} className="material-symbols-outlined text-secondary hover:scale-110 transition-transform cursor-pointer">share</button>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-1 font-bold uppercase tracking-widest">Public Match</p>
                  <h3 className="text-3xl font-headline font-bold text-white mb-1 leading-tight">Evening Volley</h3>
                  <div className="space-y-4 mt-6">
                    {[
                      { icon: "schedule", text: "Tonight • 19:30 PM" },
                      { icon: "stadium", text: "Court 04" },
                      { icon: "group", text: "3 / 4 Slots Filled" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                        <span className="font-body font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={() => setActiveModal('chat')} className="flex-1 py-3 bg-secondary text-on-secondary rounded-full font-headline font-bold text-sm transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                      <span className="material-symbols-outlined text-sm">chat</span> Team Chat
                    </button>
                    <button type="button" onClick={() => setActiveModal('leave')} className="px-4 py-3 border border-outline-variant text-on-surface rounded-full font-headline font-bold text-sm hover:bg-surface-variant transition-colors text-error cursor-pointer">Leave</button>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 text-secondary opacity-5 font-headline font-black text-9xl italic pointer-events-none">M</div>
              </div>
            </div>
          </section>

          {/* History Table */}
          <section className="pb-10 bg-surface-container-lowest">
             <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline font-bold text-on-surface">Booking History</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-surface-container-highest rounded-lg text-xs font-bold text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors">All</button>
                <button className="px-4 py-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors">Completed</button>
                <button className="px-4 py-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors">Cancelled</button>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-surface-container-highest/50">
                      <th className="px-8 py-5 text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest">Date &amp; Time</th>
                      <th className="px-8 py-5 text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest">Court</th>
                      <th className="px-8 py-5 text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest">Players</th>
                      <th className="px-8 py-5 text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest">Status</th>
                      <th className="px-8 py-5 text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest">Action</th>
                    </tr>
                   </thead>
                  <tbody className="divide-y divide-surface-variant/20">
                    {[
                      { date: "Oct 05, 2023", time: "02:00 PM", court: "The Core", players: ["R","A","S","L"], status: "Completed", statusColor: "text-primary-container", icon: "receipt" },
                      { date: "Sep 28, 2023", time: "11:00 AM", court: "Horizon", players: ["R","J"], status: "Completed", statusColor: "text-primary-container", icon: "receipt" },
                      { date: "Sep 21, 2023", time: "08:00 PM", court: "The Core", players: ["R","M"], status: "Cancelled", statusColor: "text-error", icon: "info" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-surface-container-high transition-colors">
                        <td className="px-8 py-6">
                          <div className="text-on-surface font-bold">{row.date}</div>
                          <div className="text-on-surface-variant text-sm">{row.time}</div>
                        </td>
                         <td className="px-8 py-6 font-headline font-bold text-primary">{row.court}</td>
                        <td className="px-8 py-6">
                          <div className="flex -space-x-2">
                            {row.players.map((p, j) => (
                               <div key={j} className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-black text-on-surface-variant">{p}</div>
                            ))}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                           <span className={`inline-flex items-center gap-1.5 ${row.statusColor} font-bold text-xs uppercase tracking-wider`}>
                            <span className={`w-2 h-2 rounded-full ${row.status === "Cancelled" ? "bg-error" : "bg-primary-container"}`} />
                            {row.status}
                          </span>
                        </td>
                         <td className="px-8 py-6">
                          <button className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" type="button" onClick={() => setActiveModal('details')}>
                             <span className="material-symbols-outlined">{row.icon}</span>
                          </button>
                        </td>
                       </tr>
                    ))}
                  </tbody>
                 </table>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* --- ACTION MODALS --- */}

      {activeModal === 'calendar' && (() => {
        const year = currentMonth.getFullYear();
        const monthIndex = currentMonth.getMonth();
        const monthName = currentMonth.toLocaleString('default', { month: 'long' });
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();

        return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-4xl border border-outline-variant/20 relative shadow-2xl flex flex-col md:flex-row gap-8 min-h-[500px]">
             <button type="button" onClick={closeModal} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors cursor-pointer z-10">
              <span className="material-symbols-outlined">close</span>
            </button>
            
            {/* Calendar Grid */}
            <div className="flex-1">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-headline font-bold text-2xl text-white">{monthName} {year}</h3>
                 <div className="flex gap-2">
                   <button type="button" onClick={() => setCurrentMonth(new Date(year, monthIndex - 1, 1))} className="material-symbols-outlined w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface transition-colors cursor-pointer flex items-center justify-center">chevron_left</button>
                   <button type="button" onClick={() => setCurrentMonth(new Date(year, monthIndex + 1, 1))} className="material-symbols-outlined w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface transition-colors cursor-pointer flex items-center justify-center">chevron_right</button>
                 </div>
               </div>
               
               <div className="grid grid-cols-7 gap-2 mb-2 text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                 {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d}>{d}</div>)}
               </div>
               <div className="grid grid-cols-7 gap-2">
                 {/* padding offset for the start of the month */}
                 {[...Array(firstDayOfWeek)].map((_, i) => (
                   <div key={`padding-${i}`} className="aspect-square opacity-0"></div>
                 ))}
                 
                 {/* Day slots */}
                 {[...Array(daysInMonth)].map((_, i) => {
                   const day = i + 1;
                   const hasMatch = monthIndex === 9 && year === 2023 && (day === 12 || day === 15);
                   const isSelected = selectedCalendarDate === day;
                   return (
                     <button 
                       type="button"
                       key={day} 
                       onClick={() => setSelectedCalendarDate(day)}
                       className={`aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all cursor-pointer border ${isSelected ? 'bg-primary text-on-primary-fixed border-primary scale-110 shadow-[0_10px_20px_rgba(202,253,0,0.2)] z-10' : 'bg-surface-container-lowest border-outline-variant/10 text-on-surface hover:bg-surface-container hover:border-outline-variant/30'}`}
                     >
                       <span className="font-headline font-bold">{day}</span>
                       {hasMatch && (
                         <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isSelected ? 'bg-on-primary-fixed' : 'bg-primary'}`} />
                       )}
                     </button>
                   )
                 })}
               </div>
            </div>

            {/* Details Panel */}
            <div className="w-full md:w-80 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10">
               <h4 className="font-headline font-bold text-lg mb-6 text-white border-b border-outline-variant/20 pb-4">Schedule Details</h4>
               
               {monthIndex === 9 && year === 2023 && selectedCalendarDate === 12 ? (
                 <div className="space-y-4">
                    <div className="bg-primary-container/20 text-primary-container px-3 py-1 rounded inline-block text-xs font-bold uppercase tracking-widest mb-2">Confirmed Match</div>
                    <h5 className="font-headline font-bold text-xl">Court 1: The Core</h5>
                    <p className="text-sm text-on-surface-variant flex items-center gap-2"><span className="material-symbols-outlined text-sm">schedule</span> 10:00 AM - 11:30 AM</p>
                    <p className="text-sm text-on-surface-variant flex items-center gap-2"><span className="material-symbols-outlined text-sm">group</span> 4 Players (Full Team)</p>
                    <div className="pt-4 border-t border-outline-variant/10 mt-4">
                      <button type="button" onClick={() => setActiveModal('edit')} className="w-full py-3 bg-surface-container text-on-surface rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors cursor-pointer">Manage Booking</button>
                    </div>
                 </div>
               ) : monthIndex === 9 && year === 2023 && selectedCalendarDate === 15 ? (
                 <div className="space-y-4">
                    <div className="bg-tertiary/20 text-tertiary px-3 py-1 rounded inline-block text-xs font-bold uppercase tracking-widest mb-2">Payment Pending</div>
                    <h5 className="font-headline font-bold text-xl">Court 4: Horizon</h5>
                    <p className="text-sm text-on-surface-variant flex items-center gap-2"><span className="material-symbols-outlined text-sm">schedule</span> 06:00 PM - 07:30 PM</p>
                    <p className="text-sm text-on-surface-variant flex items-center gap-2"><span className="material-symbols-outlined text-sm">group</span> 2 Players Invited</p>
                    <div className="pt-4 border-t border-outline-variant/10 mt-4">
                      <button type="button" onClick={() => setActiveModal('pay')} className="w-full py-3 bg-tertiary text-on-tertiary rounded-xl font-bold text-sm hover:brightness-110 transition-colors cursor-pointer">Pay Now</button>
                    </div>
                 </div>
               ) : selectedCalendarDate ? (
                 <div className="flex flex-col items-center justify-center h-48 text-center opacity-50">
                   <span className="material-symbols-outlined text-4xl mb-2">event_available</span>
                   <p className="text-sm">No matches scheduled for {monthName} {selectedCalendarDate}.</p>
                 </div>
               ) : (
                 <div className="flex flex-col items-center justify-center h-48 text-center opacity-50">
                   <span className="material-symbols-outlined text-4xl mb-2">touch_app</span>
                   <p className="text-sm">Select a date with a dot to view schedule details.</p>
                 </div>
               )}
            </div>
          </div>
        </div>
        );
      })()}
      
      {activeModal === 'share' && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-md border border-outline-variant/20 relative shadow-2xl">
            <button type="button" onClick={closeModal} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline font-bold text-2xl text-white mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">share</span> Share Match
            </h3>
            <p className="text-on-surface-variant text-sm mb-6">Send this link to friends so they can view or join the court schedule.</p>
            <div className="flex gap-2 p-2 bg-surface-container-lowest rounded-xl mb-6">
               <input type="text" readOnly value="https://kinetic.padel/match/193x8a" className="bg-transparent border-none flex-1 text-sm text-on-surface px-2 focus:ring-0" />
               <button type="button" className="bg-surface-container px-4 py-2 rounded-lg text-primary text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-surface-bright transition-colors" onClick={() => alert('Link copied to clipboard!')}>Copy</button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'edit' && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-md border border-outline-variant/20 relative shadow-2xl">
            <button type="button" onClick={closeModal} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline font-bold text-2xl text-white mb-6">Reschedule Booking</h3>
            <div className="space-y-4 mb-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">New Date</label>
                <input type="date" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary" style={{colorScheme: 'dark'}} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">New Time Block</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary" defaultValue="14">
                  <option value="10">10:00 AM - 11:30 AM</option>
                  <option value="14">02:00 PM - 03:30 PM (Selected)</option>
                  <option value="18">06:00 PM - 07:30 PM</option>
                </select>
              </div>
            </div>
            <button type="button" onClick={closeModal} className="w-full py-4 bg-primary text-on-primary-fixed rounded-full font-headline font-bold uppercase tracking-widest active:scale-95 transition-all text-sm cursor-pointer">Request Change</button>
            <p className="text-[10px] text-on-surface-variant mt-4 text-center">Changes must be approved by the club if within 24h.</p>
          </div>
        </div>
      )}

      {activeModal === 'pay' && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-md border border-tertiary/20 relative shadow-[0_0_50px_rgba(255,107,0,0.1)]">
            <button type="button" onClick={closeModal} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline font-bold text-2xl text-white mb-2">Complete Payment</h3>
            <p className="text-on-surface-variant text-sm mb-6">Court 4 • Tuesday, Oct 15</p>
            <div className="bg-surface-container-lowest p-6 rounded-2xl mb-8 flex justify-between items-center border border-outline-variant/10">
               <span className="font-headline text-lg font-bold">Total Due:</span>
               <span className="font-headline text-3xl font-black text-tertiary">$45.00</span>
            </div>
            <button type="button" onClick={closeModal} className="w-full py-4 bg-tertiary text-on-tertiary rounded-full font-headline font-bold uppercase tracking-widest active:scale-95 transition-all flex justify-center items-center gap-2 cursor-pointer">
               <span className="material-symbols-outlined text-sm">lock</span> Pay with Visa (•••• 4492)
            </button>
          </div>
        </div>
      )}

       {activeModal === 'invite' && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-md border border-outline-variant/20 relative shadow-2xl">
            <button type="button" onClick={closeModal} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline font-bold text-2xl text-white mb-6">Invite Players</h3>
            <div className="space-y-4 mb-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Player Email</label>
                <div className="flex gap-2">
                  <input type="email" placeholder="friend@padel.io" className="flex-1 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary" />
                  <button type="button" className="px-4 py-2 bg-surface-container-highest rounded-lg text-primary font-bold text-sm">Add</button>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                 <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
                    <span className="text-sm font-bold text-on-surface">marco@gmail.com</span>
                    <span className="text-[10px] bg-tertiary/20 text-tertiary px-2 py-1 rounded font-black uppercase">Pending</span>
                 </div>
              </div>
            </div>
            <button type="button" onClick={closeModal} className="w-full py-4 bg-surface-bright text-on-surface rounded-full font-headline font-bold uppercase tracking-widest active:scale-95 transition-all text-sm cursor-pointer border border-outline-variant/20">Close Panel</button>
          </div>
        </div>
      )}

      {activeModal === 'chat' && (
        <div className="fixed inset-y-0 right-0 z-[9999] w-full md:w-96 bg-surface-container-high border-l border-outline-variant/20 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col transition-transform">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
               <div>
                 <h3 className="font-headline font-bold text-xl text-white">Team Chat</h3>
                 <p className="text-xs text-secondary font-bold uppercase tracking-widest">Evening Volley</p>
               </div>
               <button type="button" onClick={closeModal} className="w-8 h-8 rounded-full bg-surface-container-highest flex justify-center items-center text-on-surface-variant hover:text-white cursor-pointer">
                  <span className="material-symbols-outlined text-sm">close</span>
               </button>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
               <div className="flex flex-col gap-1 items-start">
                  <span className="text-[10px] text-on-surface-variant font-bold">Alexander (You)</span>
                  <div className="bg-secondary/20 border border-secondary text-on-secondary-container px-4 py-2 rounded-2xl rounded-tl-none max-w-[85%] text-sm">Hey everyone! Bringing my own balls today.</div>
               </div>
               <div className="flex flex-col gap-1 items-end">
                  <span className="text-[10px] text-on-surface-variant font-bold">Marco Rossi</span>
                  <div className="bg-surface-container-highest px-4 py-2 rounded-2xl rounded-tr-none max-w-[85%] text-sm text-on-surface">Perfect. I'll arrive 10 mins early for warmup.</div>
               </div>
            </div>
            <div className="p-6 border-t border-outline-variant/20 bg-surface-container-low">
               <div className="flex gap-2">
                  <input type="text" placeholder="Type a message..." className="flex-1 bg-surface-container-lowest border-none rounded-full px-4 text-sm text-white focus:ring-2 focus:ring-secondary" />
                  <button type="button" className="w-10 h-10 rounded-full bg-secondary text-secondary-container flex items-center justify-center hover:scale-105 transition-transform"><span className="material-symbols-outlined text-sm">send</span></button>
               </div>
            </div>
        </div>
      )}

      {activeModal === 'leave' && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-md border border-error/20 relative shadow-[0_0_50px_rgba(255,0,0,0.1)] text-center">
            <span className="material-symbols-outlined text-6xl text-error mb-4">warning</span>
            <h3 className="font-headline font-bold text-2xl text-white mb-2">Leave Match?</h3>
            <p className="text-on-surface-variant text-sm mb-8">Are you sure you want to surrender your slot? Other players will be able to join in your place immediately.</p>
            <div className="flex gap-4">
              <button type="button" onClick={closeModal} className="flex-1 py-4 bg-surface-container text-on-surface rounded-full font-headline font-bold uppercase tracking-widest active:scale-95 transition-all text-sm cursor-pointer">Cancel</button>
              <button type="button" onClick={closeModal} className="flex-1 py-4 bg-error text-white rounded-full font-headline font-bold uppercase tracking-widest active:scale-95 transition-all text-sm cursor-pointer">Yes, Leave</button>
            </div>
          </div>
        </div>
      )}

       {activeModal === 'details' && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-sm border border-outline-variant/20 relative shadow-2xl">
             <button type="button" onClick={closeModal} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline font-bold text-xl text-white mb-4">Receipt Details</h3>
            <div className="p-4 bg-surface-container-lowest rounded-xl text-sm space-y-2 mb-6">
                <div className="flex justify-between"><span className="text-on-surface-variant">Booking ID:</span><span className="font-mono font-bold">#TKC-992-11</span></div>
                <div className="flex justify-between"><span className="text-on-surface-variant">Court Fee:</span><span className="font-bold">$40.00</span></div>
                <div className="flex justify-between"><span className="text-on-surface-variant">Racket Hire (x2):</span><span className="font-bold">$10.00</span></div>
                <div className="border-t border-outline-variant/20 pt-2 mt-2 flex justify-between text-primary"><span className="font-bold">Total Paid:</span><span className="font-black">$50.00</span></div>
            </div>
            <button type="button" onClick={closeModal} className="w-full py-3 bg-surface-bright text-on-surface rounded-full font-headline font-bold uppercase tracking-widest text-xs btn-active">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
