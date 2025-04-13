"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import ExperienceSection from "./experience/page";
import CardsPage from "./cards/page";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="w-full">
      {/* Hero section: saludo, nombre, descripción, botones */}
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-6 h-screen space-y-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-blue-500 dark:text-blue-400 font-medium"
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Giancarlo Silva
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative inline-block"
        >
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
            {t("title")}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600 origin-left"
          />
        </motion.div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-x-4 pt-6"
        >
          <Button asChild variant="default" size="lg">
            <Link href="/contact">
              {t("contactMe")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">{t("viewProjects")}</Link>
          </Button>
        </motion.div>
      </div>

      {/* Sección de Experiencia: se ve al hacer scroll */}
      <div className="pt-24">
        <ExperienceSection />
      </div>

      {/* Sección de Cards */}
      <div className="pt-16">
        <CardsPage />
      </div>
    </div>
  );
}
