"use client";

import { Code, Server, Database, Cloud, Cpu, Settings, Terminal } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Desarrollo Backend",
      icon: <Server className="w-8 h-8 text-blue-500" />,
      description: "Construcción de APIs robustas y escalables con Laravel, Spring Boot y Node.js. Diseño de arquitecturas limpias y mantenibles.",
      features: [
        "APIs RESTful y GraphQL",
        "Autenticación JWT/OAuth2",
        "Microservicios y arquitectura modular",
        "Integración con servicios externos"
      ]
    },
    {
      title: "Diseño de Bases de Datos",
      icon: <Database className="w-8 h-8 text-green-500" />,
      description: "Modelado y optimización de bases de datos relacionales y NoSQL para alto rendimiento.",
      features: [
        "Diseño de esquemas eficientes",
        "Optimización de consultas SQL",
        "Migraciones y versionado",
        "Replicación y sharding"
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      description: "Implementación de pipelines CI/CD y despliegues en la nube para entornos productivos escalables.",
      features: [
        "Docker y Kubernetes",
        "GitHub Actions/GitLab CI",
        "Infraestructura como código",
        "Monitoreo y alertas"
      ]
    },
    {
      title: "Arquitectura de Software",
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      description: "Diseño de arquitecturas limpias y mantenibles siguiendo mejores prácticas y patrones modernos.",
      features: [
        "Arquitectura Hexagonal/DDD",
        "Event Sourcing/CQRS",
        "Patrones de microservicios",
        "Principios SOLID y CLEAN"
      ]
    },
    {
      title: "Consultoría Técnica",
      icon: <Terminal className="w-8 h-8 text-red-500" />,
      description: "Asesoramiento especializado para mejorar procesos de desarrollo y toma de decisiones técnicas.",
      features: [
        "Análisis y optimización de código",
        "Revisiones de arquitectura",
        "Mentoría para equipos",
        "Selección de tecnologías"
      ]
    },
    {
      title: "Mantenimiento y Soporte",
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      description: "Soporte continuo para aplicaciones existentes con respuesta rápida y soluciones efectivas.",
      features: [
        "Corrección de bugs",
        "Actualizaciones de seguridad",
        "Mejoras de rendimiento",
        "Soporte 24/7 disponible"
      ]
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mis <span className="text-blue-600 dark:text-blue-400">Servicios</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
            Soluciones técnicas personalizadas para llevar tus proyectos al siguiente nivel.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.title}
              className="rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all p-6 dark:border-gray-800 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                
                <ul className="w-full space-y-2 text-left mt-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            ¿Necesitas un servicio personalizado o tienes dudas sobre cómo puedo ayudarte?
          </p>
          <a 
            href="/contact" 
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
}