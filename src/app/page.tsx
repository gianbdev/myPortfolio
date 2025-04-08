"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { 
  FaLaravel, 
  FaJava, 
  FaNodeJs, 
  FaPhp,
  FaAws,
  FaDocker,
  FaGitAlt
} from "react-icons/fa";
import { 
  SiSpringboot, 
  SiMysql, 
  SiPostgresql, 
  SiKubernetes,
  SiRabbitmq,
  SiRedis,
  SiGraphql,
  SiGithubactions
} from "react-icons/si";
import { 
  Cpu, 
  Database, 
  Code, 
  Cloud,
  TerminalSquare,
  GitFork,
  Server,
  Cog,
  Network
} from "lucide-react";

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

        {/* Sección de Habilidades con Iconos */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <FaLaravel className="w-10 h-10 text-red-500" />
              </div>
              <CardTitle className="text-xl mt-2">Laravel Framework</CardTitle>
              <CardDescription>Desarrollo Backend Avanzado</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-500" />
                  APIs RESTful optimizadas
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-500" />
                  Arquitectura MVC y DDD
                </li>
                <li className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-blue-500" />
                  Autenticación JWT/OAuth2
                </li>
                <li className="flex items-center gap-2">
                  <FaAws className="w-4 h-4 text-orange-500" />
                  Integración con AWS
                </li>
                <li className="flex items-center gap-2">
                  <FaPhp className="w-4 h-4 text-purple-500" />
                  Testing con PHPUnit
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <SiSpringboot className="w-10 h-10 text-green-500" />
              </div>
              <CardTitle className="text-xl mt-2">Spring Boot</CardTitle>
              <CardDescription>Ecosistema Java Enterprise</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-500" />
                  Microservicios con Spring Cloud
                </li>
                <li className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-blue-500" />
                  Seguridad con Spring Security
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  ORM con Hibernate/JPA
                </li>
                <li className="flex items-center gap-2">
                  <TerminalSquare className="w-4 h-4 text-blue-500" />
                  Configuración con Spring Config
                </li>
                <li className="flex items-center gap-2">
                  <SiRabbitmq className="w-4 h-4 text-orange-500" />
                  Integración con Kafka/RabbitMQ
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <Database className="w-10 h-10 text-blue-500" />
              </div>
              <CardTitle className="text-xl mt-2">Bases de Datos</CardTitle>
              <CardDescription>Modelado y Optimización</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <SiPostgresql className="w-4 h-4 text-blue-600" />
                  PostgreSQL avanzado
                </li>
                <li className="flex items-center gap-2">
                  <SiMysql className="w-4 h-4 text-blue-500" />
                  MySQL y diseño de esquemas
                </li>
                <li className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  Optimización de consultas SQL
                </li>
                <li className="flex items-center gap-2">
                  <FaGitAlt className="w-4 h-4 text-orange-600" />
                  Migraciones y versionado
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <FaDocker className="w-10 h-10 text-blue-400" />
              </div>
              <CardTitle className="text-xl mt-2">DevOps</CardTitle>
              <CardDescription>CI/CD y Automatización</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <FaDocker className="w-4 h-4 text-blue-400" />
                  Docker y Docker Compose
                </li>
                <li className="flex items-center gap-2">
                  <SiKubernetes className="w-4 h-4 text-blue-500" />
                  Kubernetes para orquestación
                </li>
                <li className="flex items-center gap-2">
                  <SiGithubactions className="w-4 h-4" />
                  Pipelines con GitHub Actions
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-500" />
                  Monitoreo con Prometheus/Grafana
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <Cog className="w-10 h-10 text-yellow-500" />
              </div>
              <CardTitle className="text-xl mt-2">Arquitectura</CardTitle>
              <CardDescription>Patrones y Buenas Prácticas</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <SiGraphql className="w-4 h-4 text-pink-500" />
                  APIs RESTful/gRPC
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-500" />
                  Event Sourcing y CQRS
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-500" />
                  Arquitectura Hexagonal
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-blue-500" />
                  Patrones de microservicios
                </li>
                <li className="flex items-center gap-2">
                  <SiRedis className="w-4 h-4 text-red-500" />
                  Caching con Redis
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <GitFork className="w-10 h-10 text-purple-500" />
              </div>
              <CardTitle className="text-xl mt-2">Metodologías</CardTitle>
              <CardDescription>Gestión de Proyectos</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">📊</span>
                  Scrum y Kanban
                </li>
                <li className="flex items-center gap-2">
                  <FaGitAlt className="w-4 h-4 text-orange-600" />
                  Git Flow profesional
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">🔍</span>
                  Code Reviews
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">👥</span>
                  Pair Programming
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">📝</span>
                  Documentación técnica
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}