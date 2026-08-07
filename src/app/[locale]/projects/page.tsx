"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code } from "lucide-react";

const projectKeys = ["clinico", "corporativa", "pos"];

const projectImages: Record<string, string | undefined> = {
  clinico: "/projects/u1.PNG",
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function Projects() {
  const t = useTranslations("Projects");

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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectKeys.map((key, index) => {
            const image = projectImages[key];
            return (
              <motion.div
                key={key}
                {...fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-lg border bg-card overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                  {image ? (
                    <Image
                      src={image}
                      alt={t(`items.${key}.title`)}
                      width={600}
                      height={340}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Code className="w-12 h-12 text-muted-foreground/30" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(`items.${key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(
                      t.raw(`items.${key}.technologies`) as string[]
                    ).map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 rounded-full border bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
