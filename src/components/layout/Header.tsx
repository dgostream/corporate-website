"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "/" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-60 bg-background/95 backdrop-blur-sm"
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
            <nav className="hidden lg:flex gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest transition-colors py-2",
                    pathname === item.href 
                      ? "text-brand-pink" 
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-70 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground lg:hidden"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            id="mobile-nav"
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container-custom py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-lg font-bold uppercase tracking-widest transition-colors",
                    pathname === item.href ? "text-brand-pink" : "text-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
