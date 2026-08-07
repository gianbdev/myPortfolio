"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceKeys = [
  "silhercorp",
  "hiper",
  "zytrust",
  "atirpay",
  "ibcorp",
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function ExperienceSection() {
  const t = useTranslations("Home");
  const exp = useTranslations("Home.experience");

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-12"
      >
        <Briefcase className="w-6 h-6 text-primary" />
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          {t("professionalExperience")}
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experienceKeys.map((key, index) => (
            <motion.div
              key={key}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg text-foreground">
                    {exp(`${key}.title`)}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {t("fullTime")}
                  </span>
                </div>
                <p className="text-sm text-primary font-medium">
                  {exp(`${key}.position`)}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 mb-3">
                  {exp(`${key}.period`)}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {exp
                    .raw(`${key}.responsibilities`)
                    .map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="text-primary mr-2 mt-0.5 shrink-0">
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp
                    .raw(`${key}.technologies`)
                    .map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full border bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
