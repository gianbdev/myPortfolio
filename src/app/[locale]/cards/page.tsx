"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaDocker, FaAngular } from "react-icons/fa";
import {
  SiSpringboot,
  SiDotnet,
  SiRabbitmq,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiGithubactions,
  SiGraphql,
  SiRedis,
} from "react-icons/si";
import {
  Code,
  Server,
  Cpu,
  Network,
  Cog,
  TerminalSquare,
  Database,
  Cloud,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function CardsPage() {
  const c = useTranslations("Cards");

  const cardData = [
    {
      key: "DotNet",
      icon: <SiDotnet className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      items: [
        { icon: <Code className="w-4 h-4 text-primary" />, text: c("DotNet.api") },
        { icon: <Network className="w-4 h-4 text-primary" />, text: c("DotNet.architecture") },
        { icon: <Cog className="w-4 h-4 text-primary" />, text: c("DotNet.auth") },
        { icon: <TerminalSquare className="w-4 h-4 text-primary" />, text: c("DotNet.csharp") },
        { icon: <Database className="w-4 h-4 text-primary" />, text: c("DotNet.ef") },
      ],
    },
    {
      key: "Spring",
      icon: <SiSpringboot className="w-8 h-8 text-green-600 dark:text-green-400" />,
      items: [
        { icon: <Cloud className="w-4 h-4 text-primary" />, text: c("Spring.Microservices") },
        { icon: <Cog className="w-4 h-4 text-primary" />, text: c("Spring.Security") },
        { icon: <Database className="w-4 h-4 text-primary" />, text: c("Spring.ORM") },
        { icon: <TerminalSquare className="w-4 h-4 text-primary" />, text: c("Spring.Config") },
        { icon: <SiRabbitmq className="w-4 h-4 text-orange-500" />, text: c("Spring.Integration") },
      ],
    },
    {
      key: "Angular",
      icon: <FaAngular className="w-8 h-8 text-red-600 dark:text-red-400" />,
      items: [
        { icon: <Code className="w-4 h-4 text-primary" />, text: c("Angular.components") },
        { icon: <Cog className="w-4 h-4 text-primary" />, text: c("Angular.services") },
        { icon: <TerminalSquare className="w-4 h-4 text-primary" />, text: c("Angular.pipes") },
        { icon: <Network className="w-4 h-4 text-primary" />, text: c("Angular.interceptors") },
        { icon: <Server className="w-4 h-4 text-primary" />, text: c("Angular.routing") },
      ],
    },
    {
      key: "Database",
      icon: <Database className="w-8 h-8 text-primary" />,
      items: [
        { icon: <SiPostgresql className="w-4 h-4 text-primary" />, text: c("Database.postgre") },
        { icon: <SiMysql className="w-4 h-4 text-primary" />, text: c("Database.mysql") },
        { icon: <Server className="w-4 h-4 text-primary" />, text: c("Database.sqlserver") },
        { icon: <Cpu className="w-4 h-4 text-primary" />, text: c("Database.Optimization") },
        { icon: <SiRedis className="w-4 h-4 text-red-500" />, text: c("Database.migrations") },
      ],
    },
    {
      key: "DevOps",
      icon: <FaDocker className="w-8 h-8 text-sky-500" />,
      items: [
        { icon: <FaDocker className="w-4 h-4 text-sky-500" />, text: c("DevOps.docker") },
        { icon: <SiKubernetes className="w-4 h-4 text-primary" />, text: c("DevOps.kubernetes") },
        { icon: <SiGithubactions className="w-4 h-4 text-primary" />, text: c("DevOps.pipelines") },
        { icon: <Cloud className="w-4 h-4 text-primary" />, text: c("DevOps.terraform") },
        { icon: <Cpu className="w-4 h-4 text-primary" />, text: c("DevOps.quality") },
      ],
    },
    {
      key: "Architecture",
      icon: <Cog className="w-8 h-8 text-amber-500" />,
      items: [
        { icon: <SiGraphql className="w-4 h-4 text-primary" />, text: c("Architecture.RESTful") },
        { icon: <Code className="w-4 h-4 text-primary" />, text: c("Architecture.microfrontends") },
        { icon: <Network className="w-4 h-4 text-primary" />, text: c("Architecture.hexagonal") },
        { icon: <Cloud className="w-4 h-4 text-primary" />, text: c("Architecture.Patterns") },
        { icon: <SiRedis className="w-4 h-4 text-red-500" />, text: c("Architecture.catching") },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={card.key}
            {...fadeInUp}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-lg border bg-card text-card-foreground p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-center mb-4">
              <div className="flex justify-center mb-2">{card.icon}</div>
              <h3 className="font-semibold text-lg">
                {c(`${card.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {c(`${card.key}.description`)}
              </p>
            </div>
            <ul className="space-y-2.5">
              {card.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
