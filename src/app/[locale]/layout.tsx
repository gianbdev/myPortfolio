import { getMessages } from "next-intl/server";
import LayoutClient from "@/components/LayoutClient";
import "../globals.css";

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 👈 importante: Promise
}) {
  const { locale } = await params; // 👈 también importante: await

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <LayoutClient locale={locale} messages={messages}>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
