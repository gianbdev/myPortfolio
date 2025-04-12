import { getMessages } from "next-intl/server";
import LayoutClient from "@/components/LayoutClient";
import "../globals.css";

export default async function LocaleLayout({
  children,
  params
  //params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  //added 
  const { locale } = params;

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