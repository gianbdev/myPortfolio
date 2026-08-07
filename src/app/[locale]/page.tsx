"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import ExperienceSection from "./experience/page";
import CardsPage from "./cards/page";

function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));
          if (text.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span className="text-primary font-mono">
      {text}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <div className="w-full">
      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 min-h-[calc(100vh-4rem)]">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground"
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
        >
          Giancarlo Silva
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 h-8 text-xl sm:text-2xl"
        >
          <TypeWriter texts={t.raw("roles")} />
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-muted-foreground max-w-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <Button asChild size="lg">
            <Link href={`/${locale}/contact`}>
              {t("contactMe")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={`/${locale}/projects`}>{t("viewProjects")}</Link>
          </Button>
        </motion.div>
      </section>

      <div className="pt-24">
        <ExperienceSection />
      </div>

      <div className="pt-16 pb-8">
        <CardsPage />
      </div>
    </div>
  );
}
