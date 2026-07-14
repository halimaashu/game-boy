"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoGameController, IoMenu, IoClose } from "react-icons/io5";

// Custom scroll hook integrated inside the file for simplicity
function useScrollDirection() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 64);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return isHidden;
}

const NavBar = () => {
  const isHidden = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Routes configurations
  const loggedOutRoutes = [
    { label: "Games", href: "#games" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "About", href: "#about" },
  ];

  const loggedInRoutes = [
    { label: "Dashboard", href: "#dashboard" },
    { label: "My Library", href: "#library" },
    { label: "Store", href: "#store" },
    { label: "Live Streams", href: "#streams" },
    { label: "Community", href: "#community" },
  ];

  const currentRoutes = isLoggedIn ? loggedInRoutes : loggedOutRoutes;

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-transform duration-300 bg-[#16161a] border-b border-[#72757e]/20 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <Image
            src="/game-boy-logo.png"
            alt="GameBoy Logo"
            width={90}
            height={90}
          />
          <span className="font-black text-xl tracking-wider text-white uppercase font-mono">
            GAME<span className="text-[#DC143C]">BOY</span>
          </span>
        </div>

        {/* Center: Desktop Navigation Routes */}
        <div className="hidden md:flex items-center gap-8">
          {currentRoutes.map((route, idx) => (
            <a
              key={idx}
              href={route.href}
              className="text-[#72757e] text-sm font-medium tracking-wide font-mono uppercase hover:text-[#DC143C] transition-colors duration-200"
            >
              {route.label}
            </a>
          ))}
        </div>

        {/* Right Side: Auth Action Item */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="bg-[#DC143C] text-white px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#b30e2f] transition-all shadow-[0_0_15px_rgba(220,20,60,0.3)] hover:shadow-[0_0_25px_rgba(220,20,60,0.6)]"
          >
            {isLoggedIn ? "LOG OUT" : "LOGIN"}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#72757e] hover:text-[#DC143C] focus:outline-none text-2xl"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Layer */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[#16161a] border-b border-[#72757e]/20 transition-all duration-300 ease-in-out px-4 py-4 space-y-3 shadow-xl ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {currentRoutes.map((route, idx) => (
          <a
            key={idx}
            href={route.href}
            onClick={() => setIsOpen(false)}
            className="block text-[#72757e] font-mono tracking-widest uppercase text-base hover:text-[#DC143C] py-2 border-b border-[#72757e]/10 last:border-none"
          >
            {`> `}{route.label}
          </a>
        ))}
        
        {/* Mobile Button Action */}
        <div className="pt-2">
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
              setIsOpen(false);
            }}
            className="w-full text-center bg-[#DC143C] text-white py-2.5 text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#b30e2f]"
          >
            {isLoggedIn ? "LOG OUT" : "LOGIN"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;