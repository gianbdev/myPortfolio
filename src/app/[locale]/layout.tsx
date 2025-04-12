import { getMessages } from "next-intl/server";
import { getCookie } from 'cookies-next';
import LayoutClient from "@/components/LayoutClient";
import "../globals.css";

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 👈 importante: Promise
}) {
  const { locale } = await params; // 👈 también importante: await

  const messages = await getMessages({ locale });
  const theme = getCookie('theme')?.toString() || 'light';

  return (
    <html lang={locale} className={theme}>
      <body>
        <LayoutClient locale={locale} messages={messages}>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
