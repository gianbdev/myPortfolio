"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu mensaje! Te responderé lo antes posible.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-blue-600 dark:text-blue-400">Contáctame</span>
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              ¿Tienes un proyecto en mente o necesitas asesoramiento técnico? Envíame un mensaje y trabajemos juntos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="mt-1 h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-medium">Correo Electrónico</h3>
                  <p className="text-sm text-muted-foreground">giancarlosilvagutierrez55@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="mt-1 h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-sm text-muted-foreground">+51 987 654 321</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="mt-1 h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-medium">Ubicación</h3>
                  <p className="text-sm text-muted-foreground">Lima, Perú (Remoto Global)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nombre Completo</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Correo Electrónico</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensaje
              </button>
            </form>
            
            <p className="text-xs text-muted-foreground">
              * Responderé en un plazo máximo de 24-48 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}