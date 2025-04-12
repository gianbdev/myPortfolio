"use client"
import { Server, Database, Cloud, Cpu, Settings, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      title: t("webDevelopment.title"),
      icon: <Server className="w-8 h-8 text-blue-500" />,
      description: t("webDevelopment.description"),
      features: [
        t("webDevelopment.details.0"),
        t("webDevelopment.details.1"),
        t("webDevelopment.details.2"),
        t("webDevelopment.details.3")
      ]
    },
    {
      title: t("databaseDesign.title"),
      icon: <Database className="w-8 h-8 text-green-500" />,
      description: t("databaseDesign.description"),
      features: [
        t("databaseDesign.details.0"),
        t("databaseDesign.details.1"),
        t("databaseDesign.details.2"),
        t("databaseDesign.details.3")
      ]
    },
    {
      title: t("devOps.title"),
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      description: t("devOps.description"),
      features: [
        t("devOps.details.0"),
        t("devOps.details.1"),
        t("devOps.details.2"),
        t("devOps.details.3")
      ]
    },
    {
      title: t("architecture.title"),
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      description: t("architecture.description"),
      features: [
        t("architecture.details.0"),
        t("architecture.details.1"),
        t("architecture.details.2"),
        t("architecture.details.3")
      ]
    },
    {
      title: t("consulting.title"),
      icon: <Terminal className="w-8 h-8 text-red-500" />,
      description: t("consulting.description"),
      features: [
        t("consulting.details.0"),
        t("consulting.details.1"),
        t("consulting.details.2"),
        t("consulting.details.3")
      ]
    },
    {
      title: t("support.title"),
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      description: t("support.description"),
      features: [
        t("support.details.0"),
        t("support.details.1"),
        t("support.details.2"),
        t("support.details.3")
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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.title}
              className="rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all p-6 dark:border-gray-800 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                
                <ul className="w-full space-y-2 text-left mt-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            {t("contactPrompt")}
          </p>
          <Link 
            href="/contact" 
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("contactButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}