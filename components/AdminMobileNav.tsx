"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface AdminMobileNavProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function AdminMobileNav({ activeTab, setActiveTab }: AdminMobileNavProps) {
  const adminTabs = [
    { id: "overview", icon: "monitoring", label: "Stats" },
    { id: "courts", icon: "stadium", label: "Courts" },
    { id: "schedule", icon: "calendar_month", label: "Schedule" },
    { id: "players", icon: "group", label: "Players" },
    { id: "matchmaking", icon: "sports_tennis", label: "Matches" },
    { id: "promos", icon: "confirmation_number", label: "Promos" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface-container-low/90 backdrop-blur-xl border-b border-outline-variant/10 lg:hidden">
        <div className="flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-xl font-headline font-black text-white flex items-center gap-2">
            KINETIC <span className="text-primary italic text-[10px] border border-primary/20 bg-primary/10 px-2 py-0.5 rounded uppercase tracking-widest">Admin</span>
          </Link>
          <Link href="/dashboard" className="text-xs font-bold text-on-surface-variant hover:text-white flex items-center gap-1 bg-surface-container-highest px-3 py-1.5 rounded-full">
            Exit
          </Link>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 pt-2 pb-6 bg-surface-container-low/95 backdrop-blur-xl z-50 rounded-t-3xl border-t border-outline-variant/10 lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {adminTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl active:scale-95 transition-all w-16 ${
              activeTab === tab.id
                ? "text-primary-container bg-primary-container/10"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            <span
              className="material-symbols-outlined text-[20px] md:text-[24px]"
              style={
                activeTab === tab.id
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {tab.icon}
            </span>
            <span className="font-body text-[9px] font-bold uppercase tracking-widest mt-1 truncate w-full text-center">
              {tab.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
