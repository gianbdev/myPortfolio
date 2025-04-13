"use client"
import { Code, Database, Server, TerminalSquare, GitFork, Cloud } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills");

  const skills = [
    {
      category: t("Backend.title"),
      icon: <Server className="w-5 h-5" />,
      items: [
        { name: "Node.js", level: 80 },
        { name: "PHP", level: 85 },
        { name: "Java", level: 90 }
      ]
    },
    {
      category: t("Database.title"),
      icon: <Database className="w-5 h-5" />,
      items: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 65 },
        { name: "SQL Server", level: 80 },
      ]
    },
    {
      category: t("DevOps.title"),
      icon: <Cloud className="w-5 h-5" />,
      items: [
        { name: "Docker", level: 80 },
        { name: "GitHub Actions", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Linux", level: 90 }
      ]
    },
    {
      category: t("Frontend.title"),
      icon: <Code className="w-5 h-5" />,
      items: [
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 50 },
        { name: "Typescript", level: 70 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: t("Tools.title"),
      icon: <TerminalSquare className="w-5 h-5" />,
      items: [
        { name: "Git", level: 90 },
        { name: "Jira", level: 85 },
        { name: "Postman", level: 95 },
        { name: "Swagger", level: 90 }
      ]
    },
    {
      category: t("Methodologies.title"),
      icon: <GitFork className="w-5 h-5" />,
      items: [
        { name: "Scrum", level: 85 },
        { name: "DDD", level: 80 },
        { name: "Kamban", level: 75 },
        { name: "CI/CD", level: 85 }
      ]
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("title")} <span className="text-blue-600 dark:text-blue-400">{t("highlight")}</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow p-6 dark:border-gray-800"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>

              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-800">
                      <div
                        className="h-full bg-blue-600 rounded-full dark:bg-blue-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}