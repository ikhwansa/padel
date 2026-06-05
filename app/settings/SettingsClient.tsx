/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function SettingsClient() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  const [notifications, setNotifications] = useState([
    { id: "email", title: "Email Alerts", sub: "Match confirmations & club newsletters", on: true },
    { id: "push", title: "Push Notifications", sub: "Real-time match alerts & invitations", on: false },
  ]);

  const toggleNotification = (index: number) => {
    const updated = [...notifications];
    updated[index].on = !updated[index].on;
    setNotifications(updated);
  };

  return (
    <div className="flex min-h-screen relative">
      <Sidebar activePage="Settings" />
      <MobileNav activePage="Profile" />

      <main className="flex-1 lg:ml-64 pb-24 lg:pb-8 pt-20 lg:pt-0">
        <div className="mt-8 lg:mt-24 px-6 max-w-5xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="relative">
            <span className="text-primary-container font-headline text-[10px] uppercase tracking-[0.3em] font-black mb-2 block">Personal Portal</span>
            <h2 className="text-5xl lg:text-7xl font-headline font-black text-on-surface tracking-tighter leading-none mb-4">
              COMMAND <br/><span className="text-primary-container italic">CENTRE</span>
            </h2>
            <p className="text-on-surface-variant max-w-md font-body text-lg leading-relaxed">
              Fine-tune your kinetic experience. Manage your profile, security, and court-side preferences.
            </p>
          </section>

          {/* Bento Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12">
            {/* Profile Information */}
            <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 relative overflow-hidden border border-outline-variant/10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline font-bold text-2xl text-on-surface mb-1">Profile Information</h3>
                  <p className="text-on-surface-variant text-sm">Keep your athlete credentials up to date.</p>
                </div>
                <span className="material-symbols-outlined text-primary-container/30 text-4xl">person_edit</span>
              </div>
              <form className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-outline-variant/10">
                  <div className="relative group w-24 h-24 shrink-0">
                    <div className="w-full h-full rounded-full border-2 border-primary-container bg-surface-container-highest overflow-hidden flex items-center justify-center shadow-lg shadow-primary-container/10">
                      <span className="font-headline font-bold text-4xl text-primary">A</span>
                    </div>
                    <label className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                      <span className="material-symbols-outlined text-white text-2xl mb-1 mt-2">photo_camera</span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Upload</span>
                      <input type="file" className="hidden" accept="image/*" />
                    </label>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-white">Profile Photo</h4>
                    <p className="text-sm text-on-surface-variant max-w-[250px] mt-1 leading-relaxed">Recommended minimum size 400x400px. JPG, PNG or GIF up to 5MB.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Full Name</label>
                    <input className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary-container transition-all" type="text" defaultValue="Alexander" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Membership Level</label>
                    <select className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer" defaultValue="pro">
                      <option value="basic">Basic Membership</option>
                      <option value="pro">Pro Tier (Active)</option>
                      <option value="elite">Elite VIP</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Email Address</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary-container transition-all" type="email" defaultValue="alexander.vantage@padel.io" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Phone Connection</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary-container transition-all" type="tel" defaultValue="+34 654 098 712" />
                </div>
                <div className="pt-4">
                  <button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full font-headline font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(202,253,0,0.15)]" type="button">
                    SAVE CHANGES
                  </button>
                </div>
              </form>
            </div>

            {/* Security */}
            <div className="md:col-span-4 bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between border border-outline-variant/20 relative">
              <div>
                <h3 className="font-headline font-bold text-xl text-on-surface mb-2">Security</h3>
                <p className="text-on-surface-variant text-sm mb-8">Secure your account with multi-factor authentication and rotate passwords regularly.</p>
                <div className="space-y-4 relative z-10">
                  <button type="button" onClick={(e) => { e.preventDefault(); setShowPasswordModal(true); }} className="w-full bg-surface-bright flex items-center justify-between p-4 rounded-lg group transition-colors hover:bg-surface-container-high cursor-pointer relative z-20">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">lock</span>
                      <span className="text-sm font-bold">Change Password</span>
                    </div>
                    <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                  </button>
                  <button type="button" className="w-full bg-surface-bright flex items-center justify-between p-4 rounded-lg group transition-colors hover:bg-surface-container-high">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-tertiary">passkey</span>
                      <span className="text-sm font-bold">Two-Factor Auth</span>
                    </div>
                    <span className="bg-primary-container/20 text-primary-container text-[10px] px-2 py-1 rounded-full font-black">ACTIVE</span>
                  </button>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/30">
                <p className="text-xs text-on-surface-variant">Last session: 2h ago in Madrid, ES</p>
              </div>
            </div>

            {/* Notifications */}
            <div className="md:col-span-6 bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-secondary text-3xl">notifications_active</span>
                <h3 className="font-headline font-bold text-2xl text-on-surface">Notifications</h3>
              </div>
              <div className="space-y-8">
                {notifications.map((n, i) => (
                  <div key={n.id} className={`flex items-center justify-between transition-opacity duration-300 ${!n.on ? "opacity-50" : ""}`}>
                    <div>
                      <p className="font-bold text-on-surface">{n.title}</p>
                      <p className="text-xs text-on-surface-variant">{n.sub}</p>
                    </div>
                    <div onClick={() => toggleNotification(i)} className={`w-14 h-8 ${n.on ? "bg-primary-container" : "bg-surface-bright border border-outline-variant/30"} rounded-full relative cursor-pointer flex items-center px-1 transition-colors duration-300`}>
                      <div className={`w-6 h-6 ${n.on ? "bg-on-primary-fixed translate-x-6" : "bg-outline-variant translate-x-0"} rounded-full shadow-md transition-transform duration-300`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="md:col-span-6 bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-tertiary-container/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex justify-between items-center mb-8 relative z-10">
                <h3 className="font-headline font-bold text-2xl text-on-surface">Payment Methods</h3>
                <button type="button" onClick={(e) => { e.preventDefault(); setShowPaymentModal(true); }} className="text-primary-container font-headline font-bold text-xs uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer">
                  <span className="material-symbols-outlined text-lg">add_circle</span> Add New
                </button>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="bg-gradient-to-br from-surface-container-highest to-surface p-6 rounded-xl border border-outline-variant/30 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-surface-bright rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">credit_card</span>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-sm">•••• •••• •••• 4492</p>
                      <p className="text-xs text-on-surface-variant">Expires 09/26</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-on-surface-variant tracking-widest border border-outline-variant/30 px-2 py-1 rounded">DEFAULT</span>
                    <button type="button" className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">delete</button>
                  </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex justify-between items-center opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-surface-bright rounded flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary">account_balance_wallet</span>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-sm">Apple Pay</p>
                      <p className="text-xs text-on-surface-variant">Connected</p>
                    </div>
                  </div>
                  <button type="button" className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">link_off</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-md border border-outline-variant/20 relative shadow-2xl">
            <button type="button" onClick={() => setShowPasswordModal(false)} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline font-bold text-2xl text-white mb-6">Change Password</h3>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setShowPasswordModal(false); }}>
              <div className="space-y-2">
                <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Current Password</label>
                <input type="password" required className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-white focus:ring-2 focus:ring-secondary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">New Password</label>
                <input type="password" required className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-white focus:ring-2 focus:ring-secondary transition-all" />
              </div>
              <div className="space-y-2 mb-8">
                <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Confirm New Password</label>
                <input type="password" required className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-white focus:ring-2 focus:ring-secondary transition-all" />
              </div>
              <button type="submit" className="mt-4 w-full py-4 bg-secondary text-on-secondary rounded-full font-headline font-bold uppercase tracking-widest active:scale-95 transition-all text-sm cursor-pointer">Update Password</button>
            </form>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-surface-container-high rounded-3xl p-8 w-full max-w-md border border-outline-variant/20 relative shadow-2xl">
            <button type="button" onClick={() => setShowPaymentModal(false)} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline font-bold text-2xl text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">credit_card</span> Add Payment
            </h3>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setShowPaymentModal(false); }}>
              <div className="space-y-2">
                <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Cardholder Name</label>
                <input type="text" required placeholder="Alexander Vantage" className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-white focus:ring-2 focus:ring-primary-container transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Card Number</label>
                <input type="text" required placeholder="0000 0000 0000 0000" className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-white focus:ring-2 focus:ring-primary-container transition-all font-mono" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">Expiry (MM/YY)</label>
                  <input type="text" required placeholder="12/26" className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-white focus:ring-2 focus:ring-primary-container transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-widest px-1">CVC</label>
                  <input type="password" required placeholder="123" className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-white focus:ring-2 focus:ring-primary-container transition-all" />
                </div>
              </div>
              <button type="submit" className="mt-4 w-full py-4 bg-primary-container text-on-primary-container rounded-full font-headline font-bold uppercase tracking-widest active:scale-95 transition-all text-sm cursor-pointer">Save Card</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
