import React from "react";
import Marquee from "react-fast-marquee";
// Importing Gravity UI Icons (make sure @gravity-ui/icons is installed)
import { Dice2, Flame, LayoutRows3, Star } from "@gravity-ui/icons";

const MarqueAds = () => {
  // Array of items to keep the code clean, repeatable, and easily dynamic
  const announcements = [
    { text: "THE BEST GAMEPLACE FOR EVERYONE!", icon: <Dice2 className="w-5 h-5 text-yellow-400" /> },
    { text: "GET 20% OFF ON ULTRA PASS", icon: <Flame className="w-5 h-5 text-orange-500 animate-pulse" /> },
    { text: "WEEKEND TOURNAMENT IS LIVE NOW!", icon: <LayoutRows3 className="w-5 h-5 text-yellow-300" /> },
    { text: "PLAY 100+ RETRO CLASSICS", icon: <Star className="w-5 h-5 text-cyan-400" /> },
  ];

  return (
    <div className="w-full py-2 bg-neutral-950 border-y-2 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)] overflow-hidden">
      <Marquee 
        speed={45} 
        gradient={true} 
        gradientColor="rgba(10, 10, 10, 1)" // Matches neutral-950 background for seamless fade edges
        gradientWidth={80}
        pauseOnHover={true}
        className="flex items-center p-3"
      >
        {/* Render multiple sets to prevent gaps on massive monitors */}
        {[...announcements, ...announcements].map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 mx-12 font-mono text-xs md:text-sm tracking-widest text-neutral-100 font-bold uppercase"
          >
            {item.icon}
            <span className="hover:text-red-500 transition-colors duration-200">
              {item.text}
            </span>
            <span className="text-red-600 font-black select-none ml-2">///</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueAds;