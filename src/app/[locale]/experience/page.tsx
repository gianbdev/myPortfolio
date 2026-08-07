"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Calendar,
  Server,
  Cpu,
} from "lucide-react";

const experienceKeys = ["silhercorp", "hiper", "zytrust", "atirpay", "ibcorp"];

export default function ExperienceSection() {
  const t = useTranslations("Home");
  const exp = useTranslations("Home.experience");

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1 }}
      className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="flex items-center mb-8">
        <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          {t("professionalExperience")}
        </h2>
      </div>

      <div className="space-y-8">
        {experienceKeys.map((key, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-background/50 border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {exp(`${key}.title`)}
                </h3>
                <div className="mt-2 space-y-2">
                  <div className="flex flex-wrap items-start gap-3 text-sm">
                    <div className="flex items-center">
                      <Code className="w-4 h-4 mr-1 text-blue-400" />
                      <span className="text-blue-500">
                        {exp(`${key}.position`)}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp(`${key}.period`)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Full-time
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-purple-500" />
                  {t("responsibilities")}
                </h4>
                <ul className="space-y-2 pl-1">
                  {exp
                    .raw(`${key}.responsibilities`)
                    .map((item: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-green-500" />
                  {t("technologies")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp
                    .raw(`${key}.technologies`)
                    .map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
