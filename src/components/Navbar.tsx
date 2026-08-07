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
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  const changeLanguage = (newLocale: string) => {
    const path = pathname?.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full h-[2px] w-full bg-primary"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-1">
            <Button
              variant={locale === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => changeLanguage("en")}
              className="h-8 w-10 text-xs"
            >
              EN
            </Button>
            <Button
              variant={locale === "es" ? "default" : "ghost"}
              size="sm"
              onClick={() => changeLanguage("es")}
              className="h-8 w-10 text-xs"
            >
              ES
            </Button>
            <ThemeSwitcher />
          </div>
        </div>

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
                      aria-current={isActive ? "page" : undefined}
                      className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
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
    </nav>
  );
}
