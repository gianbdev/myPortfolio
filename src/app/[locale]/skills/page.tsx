"use client";
import { Code, Database, Server, Cloud, Shield, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function Skills() {
  const t = useTranslations("Skills");

  const skills = [
    {
      category: t("Backend.title"),
      icon: <Server className="w-5 h-5 text-primary" />,
      items: [
        "Java 8/11/21",
        "Spring Boot",
        "Spring Cloud",
        ".NET Core (C#)",
        "Node.js",
        "Laravel (PHP)",
        "Python",
      ],
    },
    {
      category: t("Frontend.title"),
      icon: <Code className="w-5 h-5 text-primary" />,
      items: [
        "Angular 15–21",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PrimeNG",
        "Bootstrap",
        "HTML5/SCSS",
      ],
    },
    {
      category: t("Database.title"),
      icon: <Database className="w-5 h-5 text-primary" />,
      items: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Oracle",
        "Hibernate/JPA",
        "Valkey/Redis",
        "RabbitMQ",
        "Apache Kafka",
      ],
    },
    {
      category: t("DevOps.title"),
      icon: <Cloud className="w-5 h-5 text-primary" />,
      items: [
        "Docker",
        "Kubernetes (OKE)",
        "Helm",
        "Terraform",
        "GitLab CI/CD",
        "GitHub Actions",
        "SonarQube",
        "OCI",
        "AWS",
        "Azure",
      ],
    },
    {
      category: t("Architecture.title"),
      icon: <Shield className="w-5 h-5 text-primary" />,
      items: [
        "Microservices",
        "Microfrontends",
        "Hexagonal",
        "DDD",
        "SOLID",
        "REST",
        "SOAP",
        "JWT",
        "OAuth2",
        "Spring Security",
      ],
    },
    {
      category: t("Testing.title"),
      icon: <Wrench className="w-5 h-5 text-primary" />,
      items: [
        "JUnit 5",
        "Mockito",
        "TestContainers",
        "ArchUnit",
        "JaCoCo",
        "Playwright",
        "Jest",
        "Git",
        "Postman",
        "Swagger",
        "Nx",
        "Scrum",
      ],
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-primary">{t("highlight")}</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              {...fadeInUp}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">{group.icon}</div>
                <h3 className="font-semibold text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full border bg-card text-card-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
