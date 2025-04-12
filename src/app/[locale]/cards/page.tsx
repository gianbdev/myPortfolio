"use client";
import { useTranslations } from "next-intl";
import { FaLaravel, FaAws, FaPhp, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiRabbitmq, SiPostgresql, SiMysql, SiKubernetes, SiGithubactions, SiGraphql, SiRedis } from "react-icons/si";
import { Code, Server, Cpu, Network, Cog, TerminalSquare, Database, Cloud, GitFork } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function CardsPage() {
  const c = useTranslations('Cards');

  const cardData = [
    {
      key: "Laravel",
      icon: <FaLaravel className="w-10 h-10 text-red-500" />,
      items: [
        { icon: <Code className="w-4 h-4 text-blue-500" />, text: c("Laravel.api") },
        { icon: <Network className="w-4 h-4 text-blue-500" />, text: c("Laravel.mvc_ddd") },
        { icon: <Cog className="w-4 h-4 text-blue-500" />, text: c("Laravel.auth") },
        { icon: <FaAws className="w-4 h-4 text-orange-500" />, text: c("Laravel.aws") },
        { icon: <FaPhp className="w-4 h-4 text-purple-500" />, text: c("Laravel.php_unit") }
      ]
    },
    {
      key: "Spring",
      icon: <SiSpringboot className="w-10 h-10 text-green-500" />,
      items: [
        { icon: <Cloud className="w-4 h-4 text-blue-500" />, text: c("Spring.Microservices") },
        { icon: <Cog className="w-4 h-4 text-blue-500" />, text: c("Spring.Security") },
        { icon: <Database className="w-4 h-4 text-blue-500" />, text: c("Spring.ORM") },
        { icon: <TerminalSquare className="w-4 h-4 text-blue-500" />, text: c("Spring.Config") },
        { icon: <SiRabbitmq className="w-4 h-4 text-orange-500" />, text: c("Spring.Integration") }
      ]
    },
    {
      key: "Database",
      icon: <Database className="w-10 h-10 text-blue-500" />,
      items: [
        { icon: <SiPostgresql className="w-4 h-4 text-blue-600" />, text: c("Database.postgre") },
        { icon: <SiMysql className="w-4 h-4 text-blue-500" />, text: c("Database.mysql") },
        { icon: <Cpu className="w-4 h-4 text-blue-500" />, text: c("Database.Optimization") },
        { icon: <FaGitAlt className="w-4 h-4 text-orange-600" />, text: c("Database.migrations") }
      ]
    },
    {
      key: "DevOps",
      icon: <FaDocker className="w-10 h-10 text-blue-400" />,
      items: [
        { icon: <FaDocker className="w-4 h-4 text-blue-400" />, text: c("DevOps.docker") },
        { icon: <SiKubernetes className="w-4 h-4 text-blue-500" />, text: c("DevOps.kubernetes") },
        { icon: <SiGithubactions className="w-4 h-4" />, text: c("DevOps.pipeslines") },
        { icon: <Cloud className="w-4 h-4 text-blue-500" />, text: c("DevOps.monitoring") }
      ]
    },
    {
      key: "Architecture",
      icon: <Cog className="w-10 h-10 text-yellow-500" />,
      items: [
        { icon: <SiGraphql className="w-4 h-4 text-pink-500" />, text: c("Architecture.RESTful") },
        { icon: <Server className="w-4 h-4 text-blue-500" />, text: c("Architecture.Events") },
        { icon: <Network className="w-4 h-4 text-blue-500" />, text: c("Architecture.hexagonal") },
        { icon: <Cloud className="w-4 h-4 text-blue-500" />, text: c("Architecture.Patterns") },
        { icon: <SiRedis className="w-4 h-4 text-red-500" />, text: c("Architecture.catching") }
      ]
    },
    {
      key: "MethodologiesFlow",
      icon: <GitFork className="w-10 h-10 text-purple-500" />,
      items: [
        { icon: <span className="text-blue-500">📊</span>, text: c("MethodologiesFlow.types") },
        { icon: <FaGitAlt className="w-4 h-4 text-orange-600" />, text: c("MethodologiesFlow.flow") },
        { icon: <span className="text-green-500">🔍</span>, text: c("MethodologiesFlow.Reviews") },
        { icon: <span className="text-yellow-500">👥</span>, text: c("MethodologiesFlow.pair") },
        { icon: <span className="text-blue-500">📝</span>, text: c("MethodologiesFlow.ducs") }
      ]
    }
  ];

  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {cardData.map((card) => (
        <Card key={card.key} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="flex justify-center">{card.icon}</div>
            <CardTitle className="text-xl mt-2">{c(`${card.key}.title`)}</CardTitle>
            <CardDescription>{c(`${card.key}.description`)}</CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-6">
            <ul className="space-y-3">
              {card.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};