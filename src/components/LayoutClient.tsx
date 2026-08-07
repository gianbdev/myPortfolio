"use client";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutClient({
  children,
  locale,
  messages,
  initialTheme,
}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
  initialTheme?: "light" | "dark";
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider initialTheme={initialTheme}>
        <Navbar locale={locale} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
