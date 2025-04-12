"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
// Por esto
interface Link {
  path: string;
  label: string;
  url: string;
}

export default function Footer() {
  const t = useTranslations("Footer");
  const c = useTranslations("Contacts");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Column 1: About */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">{t("about.title")}</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              {t("about.content")}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold">{t("quickLinks.title")}</h3>
            <nav className="flex flex-col space-y-2">
              {t.raw("quickLinks.links").map((link: Link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto md:mx-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-lg font-semibold">{t("connect.title")}</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {t.raw("connect.socialLinks").map((social: Link) => (
                <Link
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
                  aria-label={social.label}
                >
                  {social.label === "GitHub" && <Github className="h-5 w-5" />}
                  {social.label === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                  {social.label === "Twitter" && <Twitter className="h-5 w-5" />}
                  {social.label === "Email" && <Mail className="h-5 w-5" />}
                </Link>
              ))}
              <Link
                href={`mailto:${c("contactInfo.email.value")}`}
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {t("connect.responseTime")}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-muted-foreground">
            {t("copyright", { year: currentYear })}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t("builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}