"use client";

import React from 'react';
import { IoGameController, IoFlameOutline, IoSparklesOutline } from 'react-icons/io5';

const Banner = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] w-full bg-[#16161a] overflow-hidden flex items-center justify-center font-mono select-none">
      
      {/* Visual Background Details: Retro Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(114,117,126,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(114,117,126,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Crimson Ambient Glow Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#DC143C]/10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" />

      {/* Content Layout wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Call to Action Information */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Badge alert */}
          <div className="inline-flex items-center gap-2 bg-[#72757e]/10 border border-[#72757e]/30 px-3 py-1 text-xs font-bold text-[#72757e] tracking-widest uppercase rounded-sm">
            <IoSparklesOutline className="text-[#DC143C] animate-spin-slow" /> 
            Season 01 is Now Live
          </div>

          {/* Main Massive Title */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none">
            LEVEL UP YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#72757e] to-[#DC143C] drop-shadow-[0_0_30px_rgba(220,20,60,0.2)]">
              RETRO ARCADE
            </span> <br />
            EXPERIENCE
          </h1>

          {/* Body Copy Description */}
          <p className="text-sm sm:text-base text-[#72757e] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium">
            Step back into the 8-bit generation. Compete in high-stakes global community leaderboards, unlock achievements, and play legendary reimagined web classics instantly in your browser.
          </p>

          {/* Dynamic Interactive Button Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto bg-[#DC143C] text-white font-bold tracking-widest uppercase text-sm px-8 py-4 border-b-4 border-[#b30e2f] active:border-b-0 active:translate-y-[4px] transition-all shadow-[0_0_20px_rgba(220,20,60,0.3)] hover:shadow-[0_0_30px_rgba(220,20,60,0.6)]">
              START PLAYING
            </button>
            
            <button className="w-full sm:w-auto bg-transparent text-white border-2 border-[#72757e]/40 hover:border-[#DC143C] font-bold tracking-widest uppercase text-sm px-8 py-3.5 transition-all">
              VIEW LEADERBOARD
            </button>
          </div>

          {/* Interactive Live Mini-Stats Container */}
          <div className="pt-8 grid grid-cols-3 gap-4 border-t border-[#72757e]/20 max-w-md mx-auto lg:mx-0">
            <div>
              <div className="text-white font-bold text-xl sm:text-2xl">42K+</div>
              <div className="text-[10px] text-[#72757e] tracking-widest uppercase">PLAYERS LINKED</div>
            </div>
            <div>
              <div className="text-white font-bold text-xl sm:text-2xl">150+</div>
              <div className="text-[10px] text-[#72757e] tracking-widest uppercase">CLASSIC REBOOTS</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[#DC143C] font-bold text-xl sm:text-2xl flex items-center justify-center lg:justify-start gap-1">
                <IoFlameOutline className="animate-pulse" /> 99.9%
              </div>
              <div className="text-[10px] text-[#72757e] tracking-widest uppercase">UPTIME BOOT</div>
            </div>
          </div>

        </div>

        {/* Right Side: Eye-Catching Abstract Game Boy Graphic */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Main Handheld Layout Chassis Container */}
          <div className="w-[280px] h-[460px] bg-[#24262b] border-4 border-[#72757e]/40 p-4 relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transform rotate-2 hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
            
            {/* Top Speaker/Power Lines strip */}
            <div className="flex items-center justify-between border-b-2 border-[#72757e]/20 pb-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-[#DC143C] animate-ping" />
              <div className="h-1.5 w-24 bg-[#72757e]/30 rounded-full" />
            </div>

            {/* Screen Inner Bezel Module */}
            <div className="w-full h-[180px] bg-[#16161a] border-2 border-[#72757e]/30 p-2 relative flex flex-col justify-between items-center">
              <span className="text-[9px] text-[#72757e] tracking-widest w-full text-left uppercase">MATRIX SCREEN //</span>
              
              {/* Retro Pixel Graphics simulation */}
              <IoGameController className="text-6xl text-[#DC143C]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
              <div className="text-center font-bold text-sm text-white tracking-widest animate-pulse">
                INSERT COIN<span className="text-[#DC143C]">...</span>
              </div>

              <div className="w-full bg-[#72757e]/10 h-1 rounded-full overflow-hidden">
                <div className="w-3/4 bg-[#DC143C] h-full animate-[loading_2s_infinite_ease-in-out]" />
              </div>
            </div>

            {/* Logo Text Stamp */}
            <div className="text-center my-2">
              <span className="text-xs font-black text-white/40 tracking-widest">GAMEBOY CUSTOM</span>
            </div>

            {/* Interface Controls Pad Module */}
            <div className="grid grid-cols-2 items-center h-[160px] pt-2">
              
              {/* D-Pad Button Graphic */}
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                <div className="absolute w-20 h-7 bg-[#16161a] border border-[#72757e]/30 rounded-sm" />
                <div className="absolute w-7 h-20 bg-[#16161a] border border-[#72757e]/30 rounded-sm" />
                <div className="absolute w-6 h-6 bg-[#24262b] z-10 rounded-full" />
              </div>

              {/* Action Buttons: Classic Crimson A/B Key Layout */}
              <div className="flex justify-center items-center gap-3 transform -rotate-12">
                <div className="flex flex-col items-center">
                  <button className="w-10 h-10 bg-[#72757e] hover:bg-[#DC143C] rounded-full active:scale-95 shadow-md transition-colors" />
                  <span className="text-[10px] text-[#72757e] font-bold mt-1">B</span>
                </div>
                <div className="flex flex-col items-center -translate-y-3">
                  <button className="w-10 h-10 bg-[#DC143C] hover:bg-[#b30e2f] rounded-full active:scale-95 shadow-[0_0_10px_rgba(220,20,60,0.4)] transition-colors" />
                  <span className="text-[10px] text-[#72757e] font-bold mt-1">A</span>
                </div>
              </div>

            </div>

            {/* System Start / Select Soft keys configuration */}
            <div className="flex justify-center gap-6 pb-2">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-8 h-2 bg-[#72757e]/40 transform -rotate-12 rounded-full cursor-pointer hover:bg-[#DC143C]" />
                <span className="text-[8px] text-[#72757e]">SELECT</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-8 h-2 bg-[#72757e]/40 transform -rotate-12 rounded-full cursor-pointer hover:bg-[#DC143C]" />
                <span className="text-[8px] text-[#72757e]">START</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;