import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { type AbstractIntlMessages } from 'next-intl';

const locales = ['es', 'en'] as const;
type ValidLocale = typeof locales[number];

export default getRequestConfig(async ({ locale: requestLocale }) => {
  // Verificación de tipo segura
  if (!requestLocale || !locales.includes(requestLocale as ValidLocale)) {
    notFound();
  }

  const locale = requestLocale; // Ahora TypeScript sabe que es 'es' | 'en'
  
  try {
    const messages: AbstractIntlMessages = (await import(`../messages/${locale}.json`)).default;
    
    return {
      locale, // ¡Esta es la propiedad clave que faltaba!
      messages,
      timeZone: 'America/Lima', // Añade tu zona horaria
      now: new Date() // Opcional pero recomendado
    };
  } catch (error) {
    console.error(`Error loading messages for ${locale}`, error);
    notFound();
  }
});

/*
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fr"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
*/

/*
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["es", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
  if (!locales.includes(requestLocale as any)) notFound();

  return {
    messages: (await import(`../../messages${requestLocale}.json`)).default,
  };
});
*/