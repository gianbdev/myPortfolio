"use client";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const links = t.raw("quickLinks.links") as Array<{
    label: string;
    path: string;
  }>;
  const socialLinks = t.raw("connect.socialLinks") as Array<{
    label: string;
    url: string;
  }>;

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <Github className="w-5 h-5" />,
    LinkedIn: <Linkedin className="w-5 h-5" />,
  };

  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">{t("about.title")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("about.content")}
            </p>
          </div>

          <div className="md:text-center">
            <h3 className="font-semibold mb-3">{t("quickLinks.title")}</h3>
            <nav className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:text-right">
            <h3 className="font-semibold mb-3">{t("connect.title")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("connect.responseTime")}
            </p>
            <div className="flex gap-3 md:justify-end">
              {socialLinks
                .filter((s) => s.url)
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                  >
                    {socialIcons[social.label]}
                  </a>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <p className="mt-1">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
