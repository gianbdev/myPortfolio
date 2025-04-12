"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaLaravel, FaPhp, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostgresql, SiKubernetes, SiRabbitmq, SiRedis, SiGraphql, SiGithubactions } from "react-icons/si";
import {
  Cpu, Database, Code, Cloud, TerminalSquare, GitFork, Server, Cog, Briefcase, Network, Calendar,
  Users, GitBranch
} from "lucide-react";
import { useTranslations } from "next-intl";

// Tipos para las experiencias laborales
interface Position {
  title: string;
  period: string;
}

interface WorkExperience {
  company: string;
  positions: Position[];
  responsibilities: string[];
  technologies: string[];
}

const workExperience = (t: ReturnType<typeof useTranslations<'Home'>>): WorkExperience[] => [
  {
    company: "IBCORP SAC",
    positions: [
      {
        title: t("experience.ibcorp.position"),
        period: t("experience.ibcorp.period")
      }
    ],
    responsibilities: [
      t("experience.ibcorp.responsibilities.0"),
      t("experience.ibcorp.responsibilities.1"),
      t("experience.ibcorp.responsibilities.2"),
      t("experience.ibcorp.responsibilities.3"),
      t("experience.ibcorp.responsibilities.4"),
      t("experience.ibcorp.responsibilities.5"),
      t("experience.ibcorp.responsibilities.6"),
      t("experience.ibcorp.responsibilities.7"),
      t("experience.ibcorp.responsibilities.8"),
      t("experience.ibcorp.responsibilities.9")
    ],
    technologies: ["Laravel", "Angular", "Spring Boot", "JWT", "MySQL", "Bootstrap", "HTML/CSS/JS", "SwaggerUI", "JPA", "Maven"]
  },
  {
    company: "ATIRPAY SOLUTIONS SAC",
    positions: [
      {
        title: t("experience.atirpay.position"),
        period: t("experience.atirpay.period")
      }
    ],
    responsibilities: [
      t("experience.atirpay.responsibilities.0"),
      t("experience.atirpay.responsibilities.1"),
      t("experience.atirpay.responsibilities.2"),
      t("experience.atirpay.responsibilities.3"),
      t("experience.atirpay.responsibilities.4"),
      t("experience.atirpay.responsibilities.5")
    ],
    technologies: ["Angular 15", "TypeScript", "Tailwind CSS", "SCSS", "Bootstrap", "REST APIs"]
  }
];

export default function Home() {
  const t = useTranslations("Home");
  const c = useTranslations("Cards");
  const experience = workExperience(t);

  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-blue-500 dark:text-blue-400 font-medium"
            >
              {t("greeting")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Giancarlo Silva
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative inline-block"
            >
              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                {t("title")}
              </motion.p>
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-background/50 border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                    <div className="mt-2 space-y-2">
                      {exp.positions.map((position, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex items-center mt-1 mr-3">
                            <Code className="w-4 h-4 mr-1 text-blue-400" />
                            <span className="text-blue-500">{position.title}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3 h-3 mr-1" />
                            {position.period}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                      <Server className="w-5 h-5 mr-2 text-purple-500" /> {t('responsibilities')}
                    </h4>
                    <ul className="space-y-2 pl-1">
                      {exp.responsibilities.map((item, i) => (
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
                      {t('keyTechnologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((technologies, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {technologies}
                        </span>
                      ))}
                    </div>

                    {index === 0 && (
                      <>
                        <h4 className="font-medium text-foreground/80 mt-4 mb-3 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-yellow-500" />
                          {t('leadership')}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t('leadershipDescription')}
                        </p>

                        <h4 className="font-medium text-foreground/80 mt-4 mb-3 flex items-center">
                          <GitBranch className="w-5 h-5 mr-2 text-red-500" />
                          {t('methodologies')}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t('methodologiesList')}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Laravel Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <FaLaravel className="w-10 h-10 text-red-500" />
              </div>
              <CardTitle className="text-xl mt-2">{c("Laravel.title")}</CardTitle>
              <CardDescription>{c("Laravel.description")}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-500" />
                  {c("Laravel.api")}
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-500" />
                  {c("Laravel.mvc_ddd")}
                </li>
                <li className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-blue-500" />
                  {c("Laravel.auth")} 
                </li>
                <li className="flex items-center gap-2">
                  <FaAws className="w-4 h-4 text-orange-500" />
                  {c("Laravel.aws")}
                </li>
                <li className="flex items-center gap-2">
                  <FaPhp className="w-4 h-4 text-purple-500" />
                  {c("Laravel.php_unit")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Spring Boot Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <SiSpringboot className="w-10 h-10 text-green-500" />
              </div>
              <CardTitle className="text-xl mt-2">{c("Spring.title")}</CardTitle>
              <CardDescription>{c("Spring.description")}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-500" />
                  {c("Spring.Microservices")}
                </li>
                <li className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-blue-500" />
                  {c("Spring.Security")}
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  {c("Spring.ORM")}
                </li>
                <li className="flex items-center gap-2">
                  <TerminalSquare className="w-4 h-4 text-blue-500" />
                  {c("Spring.Config")}
                </li>
                <li className="flex items-center gap-2">
                  <SiRabbitmq className="w-4 h-4 text-orange-500" />
                  {c("Spring.Integration")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Database Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <Database className="w-10 h-10 text-blue-500" />
              </div>
              <CardTitle className="text-xl mt-2">{c("Database.title")}</CardTitle>
              <CardDescription>{c("Database.description")}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <SiPostgresql className="w-4 h-4 text-blue-600" />
                  {c("Database.postgre")}
                </li>
                <li className="flex items-center gap-2">
                  <SiMysql className="w-4 h-4 text-blue-500" />
                  {c("Database.mysql")}
                </li>
                <li className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  {c("Database.Optimization")}
                </li>
                <li className="flex items-center gap-2">
                  <FaGitAlt className="w-4 h-4 text-orange-600" />
                  {c("Database.migrations")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* DevOps Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <FaDocker className="w-10 h-10 text-blue-400" />
              </div>
              <CardTitle className="text-xl mt-2">{c("DevOps.title")}</CardTitle>
              <CardDescription>{c("DevOps.description")}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaDocker className="w-4 h-4 text-blue-400" />
                  {c("DevOps.docker")}
                </li>
                <li className="flex items-center gap-2">
                  <SiKubernetes className="w-4 h-4 text-blue-500" />
                  {c("DevOps.kubernetes")}
                </li>
                <li className="flex items-center gap-2">
                  <SiGithubactions className="w-4 h-4" />
                  {c("DevOps.pipeslines")}
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-500" />
                  {c("DevOps.monitoring")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Architecture Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <Cog className="w-10 h-10 text-yellow-500" />
              </div>
              <CardTitle className="text-xl mt-2">{c("Architecture.title")}</CardTitle>
              <CardDescription>{c("Architecture.description")}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <SiGraphql className="w-4 h-4 text-pink-500" />
                  {c("Architecture.RESTful")}
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-500" />
                  {c("Architecture.Events")}
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-500" />
                  {c("Architecture.hexagonal")}
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-500" />
                  {c("Architecture.Patterns")}
                </li>
                <li className="flex items-center gap-2">
                  <SiRedis className="w-4 h-4 text-red-500" />
                  {c("Architecture.catching")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Methodologies Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <GitFork className="w-10 h-10 text-purple-500" />
              </div>
              <CardTitle className="text-xl mt-2">{c("MethodologiesFlow.title")}</CardTitle>
              <CardDescription>{c("MethodologiesFlow.description")}</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">📊</span>
                  {c("MethodologiesFlow.types")}
                </li>
                <li className="flex items-center gap-2">
                  <FaGitAlt className="w-4 h-4 text-orange-600" />
                  {c("MethodologiesFlow.flow")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">🔍</span>
                  {c("MethodologiesFlow.Reviews")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">👥</span>
                  {c("MethodologiesFlow.pair")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">📝</span>
                  {c("MethodologiesFlow.ducs")}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}