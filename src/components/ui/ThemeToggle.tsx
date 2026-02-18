"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 90,
          opacity: theme === "dark" ? 1 : 0,
          scale: theme === "dark" ? 1 : 0,
        }}
        className="absolute"
      >
        <Moon className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? -90 : 0,
          opacity: theme === "dark" ? 0 : 1,
          scale: theme === "dark" ? 0 : 1,
        }}
        className="absolute"
      >
        <Sun className="w-5 h-5" />
      </motion.div>
    </button>
  );
}
