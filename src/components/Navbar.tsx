"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import { X, Menu } from "lucide-react";

export const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Habilidades", href: "/skills" },
  { name: "Proyectos", href: "/projects" },
  { name: "Servicios", href: "/services" },
  { name: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                    isActive ? "text-blue-500" : "text-foreground/80"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full h-[2px] w-full bg-blue-500"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
            <ThemeSwitcher />
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeSwitcher />
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground/80 hover:text-blue-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive 
                          ? "bg-blue-500/10 text-blue-500" 
                          : "text-foreground/80 hover:bg-accent hover:text-blue-400"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}