"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Loader2, Github, Linkedin } from "lucide-react";
import Swal from "sweetalert2";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function Contact() {
  const t = useTranslations("Contacts");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: t("alerts.successTitle"),
          text: t("alerts.successText"),
          confirmButtonColor: "hsl(221, 83%, 53%)",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: t("alerts.errorTitle"),
        text: t("alerts.errorText"),
        confirmButtonColor: "hsl(221, 83%, 53%)",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t("contactInfo.email.label"),
      value: t("contactInfo.email.value"),
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("contactInfo.phone.label"),
      value: t("contactInfo.phone.value"),
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t("contactInfo.location.label"),
      value: t("contactInfo.location.value"),
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
            {t("title")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4 flex gap-3">
              <a
                href={t("socialMedia.github.url")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={t("socialMedia.linkedin.url")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              {t("responseTime")}
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    {t("form.name.label")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t("form.name.placeholder")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                  >
                    {t("form.email.label")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t("form.email.placeholder")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5"
                >
                  {t("form.message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t("form.message.placeholder")}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 transition-colors"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t("form.sending")}
                  </span>
                ) : (
                  t("form.submit")
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
