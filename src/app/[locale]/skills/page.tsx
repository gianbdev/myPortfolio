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
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 90 },
        { name: ".NET Core (C#)", level: 75 },
        { name: "Node.js", level: 65 },
        { name: "Laravel (PHP)", level: 75 },
        { name: "Python", level: 60 }
      ]
    },
    {
      category: t("Frontend.title"),
      icon: <Code className="w-5 h-5" />,
      items: [
        { name: "Angular", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 60 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML5/SCSS", level: 80 },
        { name: "PrimeNG", level: 75 }
      ]
    },
    {
      category: t("Database.title"),
      icon: <Database className="w-5 h-5" />,
      items: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "SQL Server", level: 80 },
        { name: "Oracle", level: 65 },
        { name: "Valkey/Redis", level: 70 }
      ]
    },
    {
      category: t("DevOps.title"),
      icon: <Cloud className="w-5 h-5" />,
      items: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes (OKE)", level: 80 },
        { name: "GitLab CI/CD", level: 85 },
        { name: "Terraform", level: 75 },
        { name: "OCI", level: 80 },
        { name: "AWS", level: 65 }
      ]
    },
    {
      category: t("Testing.title"),
      icon: <GitFork className="w-5 h-5" />,
      items: [
        { name: "JUnit 5", level: 85 },
        { name: "TestContainers", level: 75 },
        { name: "Mockito", level: 80 },
        { name: "Jest", level: 70 },
        { name: "Playwright", level: 65 },
        { name: "SonarQube", level: 75 }
      ]
    },
    {
      category: t("Tools.title"),
      icon: <TerminalSquare className="w-5 h-5" />,
      items: [
        { name: "Git", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Swagger/OpenAPI", level: 85 },
        { name: "Scrum", level: 85 },
        { name: "Kanban", level: 80 },
        { name: "Nx Monorepo", level: 70 }
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