"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                Desarrollador Backend
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto"
            >
              Especializado en arquitecturas escalables y APIs de alto rendimiento con Laravel y Spring Boot.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4"
          >
            <Button asChild variant="default" size="lg">
              <Link href="/contact">
                Contáctame <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                Ver proyectos
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Sección de Habilidades Mejorada */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Laravel Framework</CardTitle>
              <CardDescription>Desarrollo Backend Avanzado</CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 pb-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• APIs RESTful optimizadas</li>
                <li>• Arquitectura MVC y DDD</li>
                <li>• Autenticación JWT/OAuth2</li>
                <li>• Integración con servicios AWS</li>
                <li>• Testing con PHPUnit</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Spring Boot</CardTitle>
              <CardDescription>Ecosistema Java Enterprise</CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 pb-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Microservicios con Spring Cloud</li>
                <li>• Seguridad con Spring Security</li>
                <li>• ORM con Hibernate/JPA</li>
                <li>• Configuración con Spring Config</li>
                <li>• Integración con Kafka/RabbitMQ</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Bases de Datos</CardTitle>
              <CardDescription>Modelado y Optimización</CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 pb-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• PostgreSQL y MySQL avanzado</li>
                <li>• Diseño de esquemas relacionales</li>
                <li>• Optimización de consultas SQL</li>
                <li>• Migraciones y versionado</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">DevOps</CardTitle>
              <CardDescription>CI/CD y Automatización</CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 pb-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Docker y Docker Compose</li>
                <li>• Kubernetes para orquestación</li>
                <li>• Pipelines con GitHub Actions</li>
                <li>• Monitoreo con Prometheus/Grafana</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Arquitectura</CardTitle>
              <CardDescription>Patrones y Buenas Prácticas</CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 pb-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Diseño de APIs RESTful/gRPC</li>
                <li>• Event Sourcing y CQRS</li>
                <li>• Arquitectura Hexagonal</li>
                <li>• Patrones de microservicios</li>
                <li>• Caching con Redis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Metodologías</CardTitle>
              <CardDescription>Gestión de Proyectos</CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 pb-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Scrum y Kanban</li>
                <li>• Git Flow profesional</li>
                <li>• Code Reviews</li>
                <li>• Pair Programming</li>
                <li>• Documentación técnica</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}