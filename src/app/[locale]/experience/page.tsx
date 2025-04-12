"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, Code, Calendar, Server, Cpu, Users, GitBranch } from "lucide-react";

export default function ExperienceSection() {
  const t = useTranslations('Home');
  const exp = useTranslations('Home.experience');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-20 max-w-4xl mx-auto"
    >
      <div className="flex items-center mb-8">
        <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          {t("professionalExperience")}
        </h2>
      </div>

      <div className="space-y-8">
        {/* Experiencia Atirpay */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background/50 border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 className="text-xl font-bold text-foreground">{exp('atirpay.title')}</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start">
                  <div className="flex items-center mt-1 mr-3">
                    <Code className="w-4 h-4 mr-1 text-blue-400" />
                    <span className="text-blue-500">{exp('atirpay.position')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp('atirpay.period')}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Full-time
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                <Server className="w-5 h-5 mr-2 text-purple-500" /> 
                {t('responsibilities')}
              </h4>
              <ul className="space-y-2 pl-1">
                {exp.raw('atirpay.responsibilities').map((item: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-green-500" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Angular 15", "TypeScript", "Tailwind CSS", "SCSS", "REST APIs", "Git"].map((tech, i) => (
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
        {/* Experiencia IBCorp */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-background/50 border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 className="text-xl font-bold text-foreground">{exp('ibcorp.title')}</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start">
                  <div className="flex items-center mt-1 mr-3">
                    <Code className="w-4 h-4 mr-1 text-blue-400" />
                    <span className="text-blue-500">{exp('ibcorp.position')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp('ibcorp.period')}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Full-time
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                <Server className="w-5 h-5 mr-2 text-purple-500" /> 
                {t('responsibilities')}
              </h4>
              <ul className="space-y-2 pl-1">
                {exp.raw('ibcorp.responsibilities').map((item: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-green-500" />
                {exp('ibcorp.keyTechnologies')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "Spring Boot", "JWT", "SwaggerUI", "Git", "MySQL"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="font-medium text-foreground/80 mt-4 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-yellow-500" />
                {exp('ibcorp.leadership')}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {exp('ibcorp.leadershipDescription')}
              </p>

              <h4 className="font-medium text-foreground/80 mt-4 mb-3 flex items-center">
                <GitBranch className="w-5 h-5 mr-2 text-red-500" />
                {exp('ibcorp.methodologies')}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {exp('ibcorp.methodologiesList')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
