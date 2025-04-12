"use client";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutClient({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <Navbar locale={locale} />
        {children}
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}