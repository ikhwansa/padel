import Link from "next/link";

interface SidebarProps {
  activePage: string;
}

export default function Sidebar({ activePage }: SidebarProps) {
  const navItems = [
    { name: "Dashboard", icon: "dashboard", href: "/dashboard" },
    { name: "Leaderboard", icon: "leaderboard", href: "/leaderboard" },
    { name: "Courts", icon: "sports_tennis", href: "/book-court" },
    { name: "My Bookings", icon: "sports_tennis", href: "/bookings" },
    { name: "Matchmaking", icon: "group", href: "/matchmaking" },
    { name: "Settings", icon: "settings", href: "/settings" },
    { name: "Admin Panel", icon: "shield_person", href: "/admin" },
  ];

  return (
    <aside className="hidden lg:flex flex-col py-8 gap-4 h-screen w-64 border-r border-[#20262f] bg-[#0f141a] fixed left-0 top-0 z-50">
      <div className="px-6 mb-8">
        <Link href="/" className="text-xl font-headline font-bold text-primary">
          The Kinetic Court
        </Link>
      </div>
      <nav className="flex-1 space-y-1 pr-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={
              activePage === item.name
                ? "flex items-center gap-3 bg-primary-container text-on-primary-fixed rounded-r-full font-bold px-6 py-3 shadow-[4px_0_15px_rgba(202,253,0,0.2)]"
                : "flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant hover:text-white rounded-r-full transition-all"
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
            <span className="font-label text-sm uppercase tracking-wide">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto px-6 pt-6 border-t border-outline-variant/20">
        <Link
          href="/book-court"
          className="w-full py-3 px-4 bg-primary-fixed text-on-primary-fixed rounded-full font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Book a Court
        </Link>
      </div>
    </aside>
  );
}
