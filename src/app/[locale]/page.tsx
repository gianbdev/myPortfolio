"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import ExperienceSection from "./experience/page";
import CardsPage from "./cards/page";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const t = useTranslations("Home");
  const [showContent, setShowContent] = useState(false);

  const handleScrollClick = () => {
    setShowContent(true);
    document.body.style.overflow = '';
    
    // Scroll suave al contenido (90% de la altura de la ventana)
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  };

  // Manejar el scroll hacia arriba
  const handleScrollUp = () => {
    if (window.scrollY < window.innerHeight * 0.5) {
      document.body.style.overflow = 'hidden';
      setShowContent(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollUp);
    return () => window.removeEventListener('scroll', handleScrollUp);
  }, []);

  return (
    <div className="w-full">
      {/* Sección de portada full-screen */}
      <div 
        className={`fixed inset-0 flex items-center justify-center transition-all duration-500 ${
          showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-500 dark:text-blue-400 font-medium mb-4"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Giancarlo Silva
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative inline-block mt-6"
          >
            <motion.p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              {t("title")}
            </motion.p>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Botón de scroll - Posicionado más abajo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-24 absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={handleScrollClick}
              className="p-4 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Scroll down"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Contenido principal */}
      <div 
        className={`pt-[90vh] min-h-screen ${!showContent && 'invisible'}`}
      >
        <div className="container px-4 md:px-6 mx-auto py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="space-x-4"
            >
              <Button asChild variant="default" size="lg">
                <Link href="/contact">{t("contactMe")}<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">{t("viewProjects")}</Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Sección de Experiencia */}
          <ExperienceSection />
          
          {/* Sección de Cards */}
          <CardsPage />
        </div>
      </div>
    </div>
  );
}