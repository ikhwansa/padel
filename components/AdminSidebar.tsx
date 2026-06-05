import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const adminTabs = [
    { id: "overview", icon: "monitoring", label: "Overview" },
    { id: "courts", icon: "stadium", label: "Court Management" },
    { id: "schedule", icon: "calendar_month", label: "Master Schedule" },
    { id: "players", icon: "group", label: "User Database" },
    { id: "matchmaking", icon: "sports_tennis", label: "Match Control" },
    { id: "promos", icon: "confirmation_number", label: "Promos & Vouchers" },
  ];

  return (
    <aside className="hidden lg:flex flex-col py-8 gap-4 h-screen w-72 border-r border-outline-variant/10 bg-surface-container-low fixed left-0 top-0 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
      <div className="px-6 mb-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-headline font-black text-white flex items-center gap-2">
          KINETIC <span className="text-primary italic text-sm border border-primary/20 bg-primary/10 px-2 py-0.5 rounded uppercase tracking-widest">Admin</span>
        </Link>
      </div>

      <div className="px-6 mb-4">
        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Command Center</p>
      </div>

      <nav className="flex-1 space-y-2 pr-4">
        {adminTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-6 py-3 rounded-r-full font-bold text-sm tracking-wide transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-primary-container text-on-primary-fixed shadow-[4px_0_15px_rgba(202,253,0,0.15)]"
                : "text-on-surface-variant hover:text-white hover:bg-surface-variant/50"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={
                activeTab === tab.id
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto px-6 pt-6 border-t border-outline-variant/10">
        <Link
          href="/dashboard"
          className="w-full py-3 px-4 bg-surface-bright text-on-surface-variant hover:text-white rounded-xl font-bold text-sm flex items-center gap-3 transition-colors border border-outline-variant/20"
        >
          <span className="material-symbols-outlined text-[18px]">exit_to_app</span>
          Exit to Player Portal
        </Link>
      </div>
    </aside>
  );
}
