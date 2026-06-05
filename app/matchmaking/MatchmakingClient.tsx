/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const MATCHES = [
  { court: "Court 04", title: "Evening Volley", time: "19:30", day: "Tonight", slots: 2, skill: "Intermediate", color: "primary", badgeBg: "bg-primary/10", border: "border-primary", text: "text-primary", btnBg: "bg-primary-container", btnText: "text-on-primary-container", img1: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Cy9RQckvKuscbnERgj4ttw-iJfEQg5yVknsGyydRcWvR4YsRobXDLeDQMOiUtQ9IVaqhhWkmwFiAoNPWnv1kflWAdxZiq-UXcxJKffvdnWnj_D2U3PyJuOiY6mdvVY0FqGGfp-3MgmKa2kXpgoO0fTnnYJK0g3hXMm_bIrz7_jcitmHZswT7nEbANapACrFF7FGVigqbG8KJ97JGV7lPOyUH6IvMNHZhbuSHtqYbWB84iQ8FEU-s28BYhCcTi8ioUUbpFQ2TAQgx", img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBHr1ZV09yFo-7X6W11KSpEkTKuIrYKC7ovkornKzt61oXCfme9o45OeQ1Ri8S-e9UVZpD3bcz7QT298t-XYqA0u1hIBj5yNkD_CP3fNN1_4LqrUUW8zJs4LHtSVSXVv2usFlAX7fDeDT7hukj9_nJz_oxR2w4I79db8S9uS7kqjc-ex6u1HxP_t7t9uDmc4X5DCXGXwo_VfNmqCgVdcVzl8ArYI2H4JtfBU72uo-M345oMXe4IfNV1ut9pMEr8VrqnKlEFgRDw_z1" },
  { court: "Court 12", title: "Pro Drilldown", time: "08:00", day: "Tomorrow", slots: 1, skill: "Pro", color: "tertiary", badgeBg: "bg-tertiary/10", border: "border-tertiary", text: "text-tertiary", btnBg: "bg-tertiary-container", btnText: "text-on-tertiary-container", img1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgmVFuESg8p7euH9CweWq0DDHfuN5HJ-oEkkp6tsEA-yTeUtW8YahCibLiSoDocZcYm9XcLlQSNZ6QF5Q0OizrXFRG5oEPJgeQe87PT1lJdQVkq7zGWBK9aa7_76AX2Bvy2lO9i6wJX4EkZZ6_pjw9uVJRpg93tFZTa6audwig8xFJbj7nN52hFbAeekqFBIV08SvjRx8W52XintePC6BZUdySYZjS64wG3xrEmtLezZbIhCNMiRXQuM6Vmd41M9O7q1i9rnXCEWBs", img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh54sr7ZSD1LHSEdPaRrK9FKLkbkpeqqggJUz0dvKQKDfVOFgqqRaD0Lqvuqsj2su3xL4b5hquss3ke6Tdwcl9mL-Chsd8QY4MKUurdTwIYI4EuNcNgk1Y5k3l3l6NmyguTa3EmDrXbOYMzPxagMYVz3wEYxHlOhx6eCv2_uXJVbuDD4orgAfNUeTrjV8kErm46B8Fy5sXy85K2TFHSb0Xr6gk2IpicItLQHy93WPpsaLOuKi25H4NP8osDqCheeUpA5smMQRNDwjs" },
  { court: "Court 01", title: "Morning Cardio", time: "06:30", day: "Tomorrow", slots: 2, skill: "Beginner", color: "secondary", badgeBg: "bg-secondary/10", border: "border-secondary", text: "text-secondary", btnBg: "bg-secondary-container", btnText: "text-on-secondary-container", img1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYRTjP9HT1jI3YVtWMdPmzLrsbV65j1pcazpIrP9tEvH8Z1y0MFsQ7Px3n9eGpQoxyYKrpuvpppRnfTJc73Ych7Ner-_CdFvUjQOtG29ylzlWh1li3ISKNeyD26ZYc9wI5Kv-HLR2cTi31ZvJm3Vkt33gtqvIIDNB472lZ63Duh0qCEBbWMFGUevg8lSQpttazlc-bm1fPuSg4uGkdyW3tVpiFn8tVB9FJi8vnOr2-hOWvDjOKL_6YnfinF-tdAUqevyNzinwQV7rg", img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuChW8zG7ywOtJIrnbra0vtieZVs62p6hsDdm1csS8bTxNYDhVqviUIjj0WftMpuemOUh755ZgPZ6kJWquky9SSjshFr8PTAVmKoyWkp-IADgoZ8YyWcvrc9Xmc3Wu2o_jp9mV3XqXDlkgsC0wQtGc-A4eeZ9teDfTIFOWyl6TWlkCD6gghCbTAycw3KQHBH2pDfnmUH0WUn1OmQo4bkyMqYFlVTLq1diE1WiUe3HSsRRJRpJGbqPunaLCsWPS9yVPErOj-_ymKM0eq5" },
  { court: "Court 07", title: "Sunday Funday", time: "16:00", day: "Sunday", slots: 3, skill: "All Levels", color: "primary", badgeBg: "bg-primary/10", border: "border-primary", text: "text-primary", btnBg: "bg-primary-container", btnText: "text-on-primary-container", img1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPsvjJ8Q8HcFws8AIe0HcOHFM_-2CQ9bFW5syGmbs53DpTxD06JQxJwcGPbYuqrZOiO3-dZ4etEdRnAYKB81OqVOJM9J-PRfw7rDuWde1XWxxxjUK2TW6V9UIgBsOZ9i7Ss_fs7neGgk1lIgJwHPORuz2_1CSZoK1ckUpP35s239vzEweHeAAL3PWpBL29MKl3P4v6SnioCVhjixSy8EjiZ8ntnAu2WZIC8MG0Ge-soqKgbfTeFOF9l1ZTusfbVoPSufoIP3DKaFKy", img2: "" },
  { court: "Court 03", title: "Competitive Set", time: "20:00", day: "Friday", slots: 1, skill: "Intermediate", color: "tertiary", badgeBg: "bg-tertiary/10", border: "border-tertiary", text: "text-tertiary", btnBg: "bg-tertiary-container", btnText: "text-on-tertiary-container", img1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgmVFuESg8p7euH9CweWq0DDHfuN5HJ-oEkkp6tsEA-yTeUtW8YahCibLiSoDocZcYm9XcLlQSNZ6QF5Q0OizrXFRG5oEPJgeQe87PT1lJdQVkq7zGWBK9aa7_76AX2Bvy2lO9i6wJX4EkZZ6_pjw9uVJRpg93tFZTa6audwig8xFJbj7nN52hFbAeekqFBIV08SvjRx8W52XintePC6BZUdySYZjS64wG3xrEmtLezZbIhCNMiRXQuM6Vmd41M9O7q1i9rnXCEWBs", img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Cy9RQckvKuscbnERgj4ttw-iJfEQg5yVknsGyydRcWvR4YsRobXDLeDQMOiUtQ9IVaqhhWkmwFiAoNPWnv1kflWAdxZiq-UXcxJKffvdnWnj_D2U3PyJuOiY6mdvVY0FqGGfp-3MgmKa2kXpgoO0fTnnYJK0g3hXMm_bIrz7_jcitmHZswT7nEbANapACrFF7FGVigqbG8KJ97JGV7lPOyUH6IvMNHZhbuSHtqYbWB84iQ8FEU-s28BYhCcTi8ioUUbpFQ2TAQgx" },
  { court: "Court 10", title: "Lunch Break Volleys", time: "12:15", day: "Monday", slots: 2, skill: "Beginner", color: "secondary", badgeBg: "bg-secondary/10", border: "border-secondary", text: "text-secondary", btnBg: "bg-secondary-container", btnText: "text-on-secondary-container", img1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCto3iAwhMsx_UPq5UeVfrbEQUYZzD8r8iAKOl1PsO0Ipc1l6Xbn60wrq56xMX0ohxOOtC-19hiHNypASTPhw5Yyv_N8tRXgJyM36tB0XSqZvXx21hDFu1IUSDtRn_g_LktvWbuuRLPJ6KJeFyQpqRTehtaTtPAK2QhDPuChrIXpPw-yIK4kEbn4-ytwvxWlwniqSGAqUQftDN_ewXNc2H-qLVJ62KEPUxtvpgfgmMqzHR5B2h5IQgj5dnLuVbfQlcmdBbiwfx6FchO", img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuChW8zG7ywOtJIrnbra0vtieZVs62p6hsDdm1csS8bTxNYDhVqviUIjj0WftMpuemOUh755ZgPZ6kJWquky9SSjshFr8PTAVmKoyWkp-IADgoZ8YyWcvrc9Xmc3Wu2o_jp9mV3XqXDlkgsC0wQtGc-A4eeZ9teDfTIFOWyl6TWlkCD6gghCbTAycw3KQHBH2pDfnmUH0WUn1OmQo4bkyMqYFlVTLq1diE1WiUe3HSsRRJRpJGbqPunaLCsWPS9yVPErOj-_ymKM0eq5" },
];

const SKILL_FILTERS = ["All", "Pro", "Intermediate", "Beginner"];

export default function MatchmakingClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMatches = MATCHES.filter(match => {
    if (activeFilter === "All") return true;
    return match.skill === activeFilter || match.skill === "All Levels";
  });

  return (
    <div className="flex pt-20 lg:pt-0 min-h-screen">
      <Sidebar activePage="Matchmaking" />
      <MobileNav activePage="Social" />

      <main className="flex-1 lg:ml-64 px-6 lg:px-12 py-8 pb-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary">FIND YOUR RHYTHM</h1>
            <p className="text-on-surface-variant mt-2 max-w-md">Connect with players at your level and join competitive or social matches happening today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary self-center mr-2">Filter by Skill:</span>
            {SKILL_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all focus:outline-none ${
                  activeFilter === filter
                    ? "bg-secondary text-on-secondary"
                    : "bg-surface-container-highest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Create a Match */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-xl bg-surface-container-low p-8 border border-outline-variant/10">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="font-headline text-3xl font-bold leading-tight mb-4">Start a<br/><span className="text-tertiary">New Match</span></h2>
                <p className="text-on-surface-variant text-sm mb-6">Can&apos;t find a game? Host your own and set the rules. Choose time, court, and skill level.</p>
              </div>
              <Link href="/matchmaking/create" className="block text-center w-full py-4 bg-primary-container text-on-primary-container rounded-full font-headline font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(202,253,0,0.15)] group-hover:shadow-[0_0_30px_rgba(202,253,0,0.3)] transition-all">
                Create a Match
              </Link>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'FILL' 1" }}>sports_tennis</span>
            </div>
          </div>

          {/* Open Slots */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" /> OPEN SLOTS ({filteredMatches.length})
              </h3>
            </div>
            
            {filteredMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredMatches.map((match, i) => (
                  <div key={`${match.title}-${i}`} className={`bg-surface-container-highest rounded-xl p-5 border-l-4 ${match.border} shadow-xl hover:translate-y-[-4px] transition-transform flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${match.badgeBg} ${match.text} px-2 py-1 rounded`}>{match.court}</span>
                          <h4 className="font-headline font-bold text-lg mt-2 text-white">{match.title}</h4>
                        </div>
                        <div className="text-right">
                          <p className={`font-headline font-bold ${match.text}`}>{match.time}</p>
                          <p className="text-[10px] text-on-surface-variant uppercase">{match.day}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex -space-x-2">
                          <img alt="Player" className="w-8 h-8 rounded-full border-2 border-surface-container-highest object-cover" src={match.img1} />
                          {match.img2 ? (
                            <img alt="Player" className="w-8 h-8 rounded-full border-2 border-surface-container-highest object-cover" src={match.img2} />
                          ) : null}
                          {[...Array(match.slots)].map((_, idx) => (
                            <div key={idx} className={`w-8 h-8 rounded-full bg-outline-variant/30 border-2 border-dashed ${match.border} flex items-center justify-center ${match.text}`}>
                              <span className="material-symbols-outlined text-xs">add</span>
                            </div>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-on-surface-variant ml-2">{match.slots} Slot{match.slots > 1 ? 's' : ''} Left</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`text-xs font-bold ${match.text}`}>Skill: {match.skill}</span>
                      <button className={`px-4 py-2 ${match.btnBg} ${match.btnText} text-xs font-black rounded-lg uppercase active:scale-95 transition-all focus:outline-none`}>
                        Join Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-surface-container-low rounded-xl p-12 text-center border border-outline-variant/10">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">search_off</span>
                <h3 className="text-xl font-headline font-bold text-white mb-2">No Matches Found</h3>
                <p className="text-on-surface-variant text-sm max-w-sm mx-auto">There are currently no open slots for the selected skill level. Be the first to start a new match!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
