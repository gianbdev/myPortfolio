"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { X, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { ThemeSwitcher } from "./theme-switcher";

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t("home"), href: `/${locale}` },
    { name: t("skills"), href: `/${locale}/skills` },
    { name: t("projects"), href: `/${locale}/projects` },
    { name: t("services"), href: `/${locale}/services` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  const changeLanguage = (newLocale: string) => {
    const path = pathname?.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
   
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-blue-500" : "text-foreground/80 hover:text-blue-400"
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
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Button
                variant={locale === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => changeLanguage("en")}
                className="h-8 w-12"
              >
                EN
              </Button>
              <Button
                variant={locale === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => changeLanguage("es")}
                className="h-8 w-12"
              >
                ES
              </Button>
            </div>

            <ThemeSwitcher />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground/80 hover:text-blue-400"
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
              <div className="pt-2 pb-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-3 py-3 rounded-md text-base font-medium ${
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