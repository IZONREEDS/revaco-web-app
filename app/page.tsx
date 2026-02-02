"use client"; // Required for animations in Next.js

import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const text = "revaco".split("");

  return (
<div className="h-screen md:h-dvh w-full flex flex-col items-center justify-center bg-[#F9F7F2] text-[#0f172a] relative overflow-hidden">

      {/* Centered Content */}
      <div className="flex flex-col items-center text-center space-y-6 z-10">
        {/* WIND ANIMATION LOGO */}
        <div className="flex">
          {text.map((letter, index) => (
            <motion.h1
              key={index}
              className="text-7xl md:text-9xl font-bold tracking-tighter text-[#1e293b] select-none origin-bottom"
              initial={{ x: 0, rotate: 0, opacity: 1 }}
              animate={{
                x: [0, 8, 0], // Moves slightly right (wind push)
                rotate: [0, 3, 0], // Slight tilt
                scaleY: [1, 0.95, 1], // Subtle compression
              }}
              transition={{
                duration: 2.5, // Time for one wind cycle
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: index * 0.15, 
                repeatDelay: 1,
              }}
            >
              {letter}
            </motion.h1>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-lg md:text-2xl font-light tracking-[0.3em] uppercase opacity-80"
        >
          Coming Soon
        </motion.p>
      </div>

      {/* Bottom Right Coffee Icon */}
      <div className="absolute bottom-8 right-8">
        <div className="p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 hover:-rotate-12 cursor-pointer group">
          <Coffee
            className="w-8 h-8 text-[#1e293b] group-hover:text-amber-700 transition-colors"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  );
}
