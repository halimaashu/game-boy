"use client";

import React from 'react';
import Image from 'next/image';
import { 
  IoLogoGithub, 
  IoLogoTwitter, 
  IoLogoDiscord, 
  IoLogoYoutube, 
  IoArrowUpOutline, 
  IoTerminalOutline 
} from "react-icons/io5";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16161a] border-t-4 border-[#72757e]/20 text-[#72757e] font-mono tracking-wide relative overflow-hidden h-screen">
      
      {/* Visual Accent Top Line - Subtle Neon Glow Indicator */}
      <div className="w-full h-[2px] bg-[#DC143C] shadow-[0_0_10px_rgba(220,20,60,0.7)]" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Status */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Image
                src="/game-boy-logo.png"
                alt="GameBoy Logo"
                width={70}
                height={70}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-black text-xl tracking-wider text-white uppercase">
                GAME<span className="text-[#DC143C]">BOY</span>
              </span>
            </div>
            <p className="text-xs text-[#72757e]/80 leading-relaxed">
              The ultimate web arcade experience. Built for players who never outgrew the classic 8-bit generation.
            </p>
            <div className="flex items-center gap-2 text-[10px] bg-black/40 border border-[#72757e]/20 p-2 max-w-max rounded-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white font-bold tracking-widest">SYSTEM STATUS: ONLINE</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase border-b border-[#72757e]/20 pb-1 max-w-[80px]">
              ARCADE
            </h3>
            <ul className="space-y-2 text-sm">
              {["All Games", "Leaderboards", "Tournaments", "Achievements"].map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="hover:text-[#DC143C] transition-colors duration-150 block">
                    {`> `}{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase border-b border-[#72757e]/20 pb-1 max-w-[80px]">
              SYSTEM
            </h3>
            <ul className="space-y-2 text-sm">
              {["Terms of Use", "Privacy Policy", "Support Desk", "Patch Notes"].map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="hover:text-[#DC143C] transition-colors duration-150 block">
                    {`> `}{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Eye-Catching Retro Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase border-b border-[#72757e]/20 pb-1">
              JOIN THE GUILD
            </h3>
            <p className="text-xs text-[#72757e]/80">
              Subscribe to get cheat codes, drop updates, and secret beta patch notes.
            </p>
            <div className="flex bg-black/40 border border-[#72757e]/30 overflow-hidden focus-within:border-[#DC143C] transition-colors">
              <input
                type="email"
                placeholder="PLAYER@EMAIL.COM"
                className="bg-transparent text-white placeholder-[#72757e]/50 px-3 py-2 text-xs w-full focus:outline-none uppercase font-mono"
              />
              <button className="bg-[#DC143C] text-white px-4 text-xs font-bold uppercase tracking-widest hover:bg-[#b30e2f] transition-all flex items-center justify-center shrink-0">
                <IoTerminalOutline className="text-sm" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar Separator */}
        <div className="border-t border-[#72757e]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Copyright text */}
          <div>
            © {new Date().getFullYear()} GAMEBOY ARCADE. ALL RIGHTS RESERVED.
          </div>

          {/* Social Icons with Crimson Glow Effect */}
          <div className="flex items-center gap-5">
            {[
              { icon: <IoLogoDiscord />, href: "#discord" },
              { icon: <IoLogoTwitter />, href: "#twitter" },
              { icon: <IoLogoGithub />, href: "#github" },
              { icon: <IoLogoYoutube />, href: "#youtube" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-xl text-[#72757e] hover:text-[#DC143C] hover:drop-shadow-[0_0_6px_rgba(220,20,60,0.8)] transition-all transform hover:-translate-y-0.5 duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Floating Eye-Catcher Retro "A/B" Up Arrow Button */}
      <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 z-10">
        <button
          onClick={handleScrollToTop}
          title="Scroll to Top"
          className="bg-[#16161a] border-2 border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white p-3 rounded-none shadow-[0_0_10px_rgba(220,20,60,0.2)] hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] transition-all duration-300 group flex flex-col items-center gap-0.5"
        >
          <IoArrowUpOutline className="text-lg group-hover:animate-bounce" />
          <span className="text-[8px] font-black tracking-tighter leading-none">TOP</span>
        </button>
      </div>

    </footer>
  );
};

export default Footer;