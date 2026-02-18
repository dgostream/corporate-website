"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollGradient() {
  const { scrollY } = useScroll();
  
  // Move the gradient up/down to create the shifting effect
  const yLeft = useTransform(scrollY, [0, 5000], [0, -2000]);
  const yRight = useTransform(scrollY, [0, 5000], [-2000, 0]);
  
  // Define the brand colors
  const purple = "#8a3ffc";
  const pink = "#ff00bd";
  const orange = "#ff4d00";

  // Tighter repeating gradient
  const gradientString = `linear-gradient(to bottom, 
    ${purple} 0%, ${pink} 10%, ${orange} 20%, 
    ${purple} 30%, ${pink} 40%, ${orange} 50%, 
    ${purple} 60%, ${pink} 70%, ${orange} 80%, 
    ${purple} 90%, ${pink} 100%)`;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Left Edge */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px]">
        <motion.div 
          style={{ y: yLeft }}
          className="absolute left-0 -top-[1000px] w-full h-[6000px]"
        >
          {/* Core Line */}
          <div className="w-full h-full" style={{ background: gradientString }} />
          
          {/* Glow Layers - Pushed slightly off-screen to the left to reduce intensity */}
          <div className="absolute top-0 bottom-0 -left-[15px] w-[20px] blur-[10px] opacity-90" style={{ background: gradientString }} />
          <div className="absolute top-0 bottom-0 -left-[40px] w-[50px] blur-[30px] opacity-50" style={{ background: gradientString }} />
        </motion.div>
      </div>
      
      {/* Right Edge */}
      <div className="absolute right-0 top-0 bottom-0 w-[4px]">
        <motion.div 
          style={{ y: yRight }}
          className="absolute right-0 -top-[3000px] w-full h-[6000px]"
        >
          {/* Core Line */}
          <div className="w-full h-full" style={{ background: gradientString }} />
          
          {/* Glow Layers - Positioned to bleed inwards from the right */}
          {/* Using left-0 here inside the right-aligned container pushes it off-screen to the right, creating the subtle effect you liked */}
          <div className="absolute top-0 bottom-0 left-0 w-[20px] blur-[10px] opacity-90" style={{ background: gradientString }} />
          <div className="absolute top-0 bottom-0 left-0 w-[50px] blur-[30px] opacity-50" style={{ background: gradientString }} />
        </motion.div>
      </div>
    </div>
  );
}
