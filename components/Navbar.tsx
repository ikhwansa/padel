"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  // For demonstration, we assume the user is logged in
  const isLoggedIn = true; 

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(202,253,0,0.1)] border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link href="/" className="text-2xl font-black text-primary italic font-headline tracking-tight">
          The Kinetic Court
        </Link>
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          <Link
            className={isActive('/') ? "text-primary-container border-b-2 border-primary-container pb-1" : "text-on-surface-variant hover:text-primary transition-colors"}
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="/#facilities"
          >
            Courts
          </Link>
          <Link
             className={isActive('/book-court') ? "text-primary-container border-b-2 border-primary-container pb-1" : "text-on-surface-variant hover:text-primary transition-colors"}
            href="/book-court"
          >
            Booking
          </Link>
        </div>
        <div className="flex items-center gap-4 relative">
          {!isLoggedIn ? (
            <button className="px-6 py-2 rounded-full font-headline font-bold text-on-primary-fixed bg-primary-fixed active:scale-90 transition-transform hover:shadow-[0_0_20px_rgba(202,253,0,0.3)]">
              Login
            </button>
          ) : (
            <div className="relative">
              <button 
                type="button" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden flex items-center justify-center bg-surface-container-high hover:ring-4 ring-primary/20 transition-all cursor-pointer"
              >
                <span className="font-headline font-bold text-lg text-primary">R</span>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                   {/* Invisible overlay to catch outside clicks */}
                   <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                   
                   <div className="absolute right-0 mt-3 w-64 bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden transform origin-top-right transition-all">
                     <div className="px-4 py-3 border-b border-outline-variant/20 bg-surface-container-low mb-2">
                       <p className="text-sm font-bold text-white">Rafael Nadal</p>
                       <p className="text-xs text-on-surface-variant truncate">rafael@thekinetic.padel</p>
                       <div className="mt-2 inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">
                         Pro Membership
                       </div>
                     </div>
                     
                     <div className="px-2">
                       <Link 
                         href="/dashboard" 
                         onClick={() => setIsDropdownOpen(false)}
                         className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl hover:bg-surface-container-highest transition-colors text-sm font-bold text-on-surface-variant hover:text-white"
                       >
                         <span className="material-symbols-outlined text-[18px]">space_dashboard</span> Dashboard
                       </Link>
                       <Link 
                         href="/bookings" 
                         onClick={() => setIsDropdownOpen(false)}
                         className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl hover:bg-surface-container-highest transition-colors text-sm font-bold text-on-surface-variant hover:text-white"
                       >
                         <span className="material-symbols-outlined text-[18px]">calendar_month</span> My Bookings
                       </Link>
                       <Link 
                         href="/matchmaking" 
                         onClick={() => setIsDropdownOpen(false)}
                         className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl hover:bg-surface-container-highest transition-colors text-sm font-bold text-on-surface-variant hover:text-white"
                       >
                         <span className="material-symbols-outlined text-[18px]">group</span> Matchmaking
                       </Link>
                       <Link 
                         href="/settings" 
                         onClick={() => setIsDropdownOpen(false)}
                         className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl hover:bg-surface-container-highest transition-colors text-sm font-bold text-on-surface-variant hover:text-white"
                       >
                         <span className="material-symbols-outlined text-[18px]">settings</span> Settings
                       </Link>
                     </div>
                     
                     <div className="mt-2 pt-2 border-t border-outline-variant/20 px-2">
                       <button 
                         type="button"
                         onClick={() => setIsDropdownOpen(false)}
                         className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl hover:bg-error/10 hover:text-error transition-colors text-sm font-bold text-on-surface-variant"
                       >
                         <span className="material-symbols-outlined text-[18px]">logout</span> Sign out
                       </button>
                     </div>
                   </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
