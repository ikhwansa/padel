/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const COURTS = [
  { 
    id: 1, 
    name: "Court 1: The Core", 
    type: "PRO SERIES", 
    desc: "Standard Olympic Dimensions", 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYWUkM508XWkhFLG3i8CmQihJEZTXIrajU6XkTrY2TSp7Sas68zxctSTi1StFqyouF6jc5m-92zHrhMMVR01y9XwRdZt_iCP_Ay18vVvaH7yj7-yLVF_TqyIPIaCt-yYdlDjmE5VkUflptp54_8yvzVX3cbkTsYUN1dUjorVYX_mZZs75MLpQgFaGB0VQyOh5hWH6v-vd43Y1PmHlfMBw0jtzZrc3QBbJK9CZ9Oqv1oa7bAx5KTkL_dwCZDj1DPCY8I4VF8mHdQyH4" 
  },
  { 
    id: 2, 
    name: "Court 2: Velocity", 
    type: "", 
    desc: "Reinforced Glass Tech", 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvSavJu8qOk1MmV-VyXOGFZ73rCNQxC_yS0CjECbBo3QHoIHvHfAlceaYmCPSrgUr_cblvqCBqrJzWgrvbGlm6BM1XhAdzLEyJedlU6UbmuJGIawuK2tH5dZ6bhY7aiGx_VQCZX8QBR-nJOBh7IbJLra1I8PTyEbmMJtKUoi0MXJgvDmK2EmL77L3nRMDw855Pvs6yUdZ1qYCtQW75d0PREEMZn9i1xCOreMzQbIg5NIlXIklHL4Q6NSX6suOufyIbVRCqUImwhyNs" 
  },
  { 
    id: 3, 
    name: "The Sky Box", 
    type: "VIP EXCLUSIVE", 
    desc: "Climate Controlled & Private", 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKKHMWpLzwu0exTJWRjPDgaKP2UornRWSHE35lo5AUEf912dJTHiqghiir7NZ6uJVN4LwTYAF5o1m2lz_AKbnT2KnqX9mO-qC097iD2kIpTHqbCXL8uKSYGsQpUoE5XjqsI0uW8CM-ib4IWo2nGkIt06zvLX0wdNfqUjSJvr-x-AeIFuio7ccYSnBnepnm73s1wRn0qfieudkTM3jWWub3-rYoAJWv65wKXZPRNlVMuer0pIw8IMRax2sdNG7PWxoE9_kXkquRhp8L" 
  }
];

const TIME_SLOTS = [
  { id: "t1", label:"MORNING", time:"08:00", price:"Rp 700.000", status:"AVAILABLE" },
  { id: "t2", label:"MORNING", time:"09:00", price:"Rp 700.000", status:"AVAILABLE" },
  { id: "t3", label:"PRIME TIME", time:"10:00", price:"Rp 850.000", status:"AVAILABLE" },
  { id: "t4", label:"BOOKED", time:"11:00", price:"—", status:"BOOKED" },
  { id: "t5", label:"LUNCH", time:"12:00", price:"Rp 620.000", status:"AVAILABLE" },
  { id: "t6", label:"AFTERNOON", time:"13:00", price:"Rp 620.000", status:"AVAILABLE" },
  { id: "t7", label:"AFTERNOON", time:"14:00", price:"Rp 620.000", status:"AVAILABLE" },
];

export default function BookCourtClient() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 9, 1)); // October 2024 default based on mockup
  const [selectedDate, setSelectedDate] = useState(3);
  const [selectedCourt, setSelectedCourt] = useState(COURTS[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[2]);

  const year = currentMonth.getFullYear();
  const monthIndex = currentMonth.getMonth();
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  const shortMonthName = currentMonth.toLocaleString('default', { month: 'short' });
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();

  // Determine a 'clean' 0-6 index where Monday is 0 for matching the visual layout (Mon-Sun)
  // standard getDay() returns 0 for Sunday
  const visualFirstDayOffset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  // Format date safely for display summary
  const summaryDateString = typeof selectedDate === 'number' && selectedDate > 0 
    ? `${shortMonthName} ${selectedDate} ${year}` 
    : "Select a Date";

  return (
    <>
      <Navbar />
      <MobileNav activePage="" />
      <main className="max-w-7xl mx-auto px-6 pt-24 lg:pt-12 pb-24">
        {/* Hero Header */}
        <header className="mb-12 relative">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-black italic tracking-tighter uppercase text-primary">Reserve the Velocity</h1>
          <p className="text-on-surface-variant font-body mt-4 max-w-xl text-lg">Select your arena, choose your timing, and enter the flow. High-performance Padel awaits.</p>
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary/5 blur-[120px] rounded-full" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Calendar */}
            <section className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline font-bold text-2xl flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">calendar_today</span> {monthName} {year}
                </h2>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setCurrentMonth(new Date(year, monthIndex - 1, 1))} className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors cursor-pointer"><span className="material-symbols-outlined">chevron_left</span></button>
                  <button type="button" onClick={() => setCurrentMonth(new Date(year, monthIndex + 1, 1))} className="p-2 hover:bg-surface-container-highest rounded-lg transition-colors cursor-pointer"><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {["MON","TUE","WED","THU","FRI","SAT","SUN"].map(d => (
                  <div key={d} className="text-center text-xs font-headline font-bold text-on-surface-variant py-2">{d}</div>
                ))}
                
                {/* Empty Offset Days */}
                {[...Array(visualFirstDayOffset)].map((_, i) => (
                  <div key={`cal-pad-${i}`} className="h-14 md:h-20" />
                ))}

                {/* Actual Days */}
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === day;
                  // Just simulating that "today" is the 3rd if month is Oct 2024
                  const isToday = monthIndex === 9 && year === 2024 && day === 3;
                  
                  if (isSelected) {
                    return (
                      <button key={day} type="button" onClick={() => setSelectedDate(day)} className="h-14 md:h-20 bg-primary-container text-on-primary-container rounded-lg flex flex-col items-center justify-center shadow-[0_0_20px_rgba(202,253,0,0.2)] cursor-pointer">
                        <span className="font-headline text-lg font-bold">{day}</span>
                        {isToday && <span className="text-[10px] font-bold">TODAY</span>}
                      </button>
                    )
                  }

                  return (
                    <button key={day} type="button" onClick={() => setSelectedDate(day)} className="h-14 md:h-20 bg-surface-container-high rounded-lg flex flex-col items-center justify-center hover:bg-surface-container-highest transition-colors cursor-pointer">
                      <span className={`font-headline text-lg ${isToday ? 'text-primary' : ''}`}>{day}</span>
                      {isToday && <span className="text-[10px] font-bold text-primary">TODAY</span>}
                    </button>
                  )
                })}
              </div>
            </section>

            {/* Court Selection Grid */}
            <section>
              <div className="flex items-end justify-between mb-6">
                <h2 className="font-headline font-bold text-2xl flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">sports_tennis</span> Select Your Arena
                </h2>
                <span className="text-sm font-body text-on-surface-variant">3 Courts Available</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {COURTS.map((court) => {
                  const isSelected = selectedCourt.id === court.id;
                  return (
                    <div key={court.id} onClick={() => setSelectedCourt(court)} className="group cursor-pointer">
                      <div className={`relative h-48 rounded-xl overflow-hidden mb-4 transition-all duration-300 ${isSelected ? 'border-2 border-primary-container shadow-lg shadow-primary-container/20 opacity-100' : 'opacity-70 hover:opacity-100 border-2 border-transparent'}`}>
                        <img className={`w-full h-full object-cover transition-all duration-500 ${isSelected ? 'scale-110 grayscale-0' : 'grayscale group-hover:grayscale-0'}`} alt={court.name} src={court.src} />
                        {court.type && (
                          <div className={`absolute top-4 ${court.type === 'VIP EXCLUSIVE' ? 'right-4 bg-tertiary-container text-on-tertiary-container' : 'left-4 bg-primary-container text-on-primary-container'} text-[10px] font-black px-2 py-1 rounded`}>
                            {court.type}
                          </div>
                        )}
                      </div>
                      <h3 className={`font-headline font-bold text-xl transition-transform ${isSelected ? 'text-primary translate-x-1' : 'text-on-surface group-hover:translate-x-1'}`}>{court.name}</h3>
                      <p className="text-on-surface-variant text-sm font-body">{court.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Time Slots */}
            <section className="bg-surface-container-low rounded-xl p-8">
              <h2 className="font-headline font-bold text-2xl mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">schedule</span> Pick Your Time
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedTimeSlot.id === slot.id;
                  
                  if (slot.status === "BOOKED") {
                    return (
                      <div key={slot.id} className="p-4 bg-surface-container rounded-lg opacity-30 cursor-not-allowed text-left border border-outline-variant/20">
                        <span className="block text-xs font-bold text-on-surface-variant mb-1">{slot.label}</span>
                        <span className="block text-lg font-headline font-bold text-on-surface">{slot.time}</span>
                        <span className="text-on-surface-variant font-black text-sm">{slot.price}</span>
                      </div>
                    );
                  }

                  if (isSelected) {
                    return (
                      <button key={slot.id} type="button" className="p-4 bg-primary-container rounded-lg ring-4 ring-primary-container/20 text-left scale-105 transition-transform z-10 cursor-pointer">
                        <span className="block text-xs font-bold text-on-primary-container/70 mb-1">{slot.label}</span>
                        <span className="block text-lg font-headline font-bold text-on-primary-container">{slot.time}</span>
                        <span className="text-on-primary-container font-black text-sm">{slot.price}</span>
                      </button>
                    )
                  }

                  return (
                    <button key={slot.id} type="button" onClick={() => setSelectedTimeSlot(slot)} className="group p-4 bg-surface-container-high rounded-lg hover:ring-2 hover:ring-primary-container transition-all text-left cursor-pointer">
                      <span className="block text-xs font-bold text-on-surface-variant mb-1">{slot.label}</span>
                      <span className="block text-lg font-headline font-bold text-on-surface">{slot.time}</span>
                      <span className="text-primary-container font-black text-sm">{slot.price}</span>
                    </button>
                  )
                })}
              </div>
            </section>
          </div>

          {/* Right Column - Sticky Summary */}
          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-surface-container-highest border border-outline-variant/10 rounded-2xl overflow-hidden shadow-2xl p-8 transition-colors duration-500">
              <h2 className="font-headline font-black italic text-3xl mb-8 uppercase text-primary transition-all">{selectedTimeSlot.price}</h2>
              <div className="space-y-6">
                {[
                  { icon: "event", label: "Date", value: summaryDateString },
                  { icon: "stadium", label: "Court", value: selectedCourt.name },
                  { icon: "alarm", label: "Time", value: `${selectedTimeSlot.time} - ${parseInt(selectedTimeSlot.time) + 1}:00` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary-container/30 rounded-lg flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-lg font-headline font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-outline-variant/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-on-surface-variant">Session Total</span>
                  <span className="text-3xl font-headline font-black text-primary transition-all">{selectedTimeSlot.price}</span>
                </div>
                <button type="button" onClick={() => alert("Booking successfully confirmed!")} className="w-full py-5 rounded-full bg-primary-container text-on-primary-container font-headline font-black text-lg uppercase tracking-tight shadow-[0_10px_40px_rgba(202,253,0,0.3)] transition-transform hover:-translate-y-1 active:scale-95 cursor-pointer">
                  Confirm Booking
                </button>
                <p className="text-center mt-6 text-[11px] text-on-surface-variant px-6 leading-tight">By clicking confirm you agree to our 24-hour cancellation policy.</p>
              </div>
            </div>

            {/* Social Proof card */}
            <div className="mt-6 p-6 rounded-2xl bg-secondary-container/10 border border-secondary/20 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-headline font-bold text-secondary text-lg mb-2">Join the Ladder</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Looking for players? Join our competitive ladder and find opponents of your skill level instantly.</p>
                <button type="button" className="mt-4 flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all cursor-pointer">
                  <span>Browse Matches</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-secondary/5 rotate-12 transition-transform group-hover:rotate-0">trophy</span>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
