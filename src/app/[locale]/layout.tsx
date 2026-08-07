import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import LayoutClient from "@/components/LayoutClient";
import { Analytics } from '@vercel/analytics/next';
import "../globals.css";

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages({ locale });
  const cookieStore = await cookies();
  const theme = (cookieStore.get('theme')?.value as 'light' | 'dark') || 'light';

  return (
    <html lang={locale} className={theme}>
      <body>
        <LayoutClient locale={locale} messages={messages} initialTheme={theme}>
          {children}
          <Analytics />
        </LayoutClient>
      </body>
    </html>
  );
}
