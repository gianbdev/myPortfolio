"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations("Contacts");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error response:", errorData);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un problema al enviar el mensaje. Intenta de nuevo.",
        });

        return;
      }

      const data = await res.json();
      console.log("Success:", data);

      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarme. Te responderé pronto.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Algo salió mal. Intenta nuevamente más tarde.",
      });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-blue-600 dark:text-blue-400">{t("title")}</span>
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t("subtitle")}
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="mt-1 h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-medium">{t("contactInfo.email.label")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contactInfo.email.value")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="mt-1 h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-medium">{t("contactInfo.phone.label")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contactInfo.phone.value")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="mt-1 h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-medium">{t("contactInfo.location.label")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contactInfo.location.value")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("form.name.label")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    placeholder={t("form.name.placeholder")}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("form.email.label")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    placeholder={t("form.email.placeholder")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("form.message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
                  placeholder={t("form.message.placeholder")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                {t("form.submit")}
              </button>
            </form>

            <p className="text-xs text-muted-foreground">
              {t("responseTime")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}