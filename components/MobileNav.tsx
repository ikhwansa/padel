"use client";

import Link from "next/link";

interface MobileNavProps {
  activePage: string;
}

export default function MobileNav({ activePage }: MobileNavProps) {
  const items = [
    { name: "Home", icon: "home", href: "/" },
    { name: "Dash", icon: "dashboard", href: "/dashboard" },
    { name: "Rank", icon: "leaderboard", href: "/leaderboard" },
    { name: "Sched", icon: "calendar_today", href: "/bookings" },
    { name: "Social", icon: "chat", href: "/matchmaking" },
    { name: "Profile", icon: "person", href: "/settings" },
    { name: "Admin", icon: "shield_person", href: "/admin" },
  ];

  return (
    <>
      {/* Mobile TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl lg:hidden">
        <div className="flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-2xl font-black text-primary italic uppercase font-headline tracking-tight">
            Kinetic
          </Link>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">notifications</span>
            <span className="material-symbols-outlined text-primary">account_circle</span>
          </div>
        </div>
        <div className="bg-gradient-to-b from-primary-container/5 to-transparent h-px w-full" />
      </header>

      {/* Mobile BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-2 pb-6 bg-surface/90 backdrop-blur-lg z-50 rounded-t-3xl border-t border-surface-variant lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={
              activePage === item.name
                ? "flex flex-col items-center justify-center text-primary-container bg-primary-container/10 rounded-xl p-3 active:scale-90 transition-all"
                : "flex flex-col items-center justify-center text-secondary p-3 hover:text-primary active:scale-90 transition-all"
            }
          >
            <span
              className="material-symbols-outlined"
              style={
                activePage === item.name
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {item.icon}
            </span>
            <span className="font-body text-[10px] font-bold uppercase tracking-widest mt-1">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
}
