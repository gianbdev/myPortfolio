"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaLaravel, FaPhp, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostgresql, SiKubernetes, SiRabbitmq, SiRedis, SiGraphql, SiGithubactions } from "react-icons/si";
import { Cpu, Database, Code, Cloud, TerminalSquare, GitFork, Server, Cog, Briefcase, Network, Calendar,
  Users, GitBranch } from "lucide-react";

const workExperience = [
  {
    company: "IBCORP SAC",
    positions: [
      {
        title: "Ingeniero de Software y Programador - IT",
        period: "Junio 2023 - Marzo 2024"
      }
    ],
    responsibilities: [
      "Desarrollo de software a medida para gestión de ventas y logística con Laravel",
      "Creación de páginas web para servicios de seguros (Backend y Frontend)",
      "Desarrollo de API REST con JWT, autenticación y roles de usuarios",
      "Implementación de Jobs, Events y Queues para lógica de negocio",
      "Uso de SwaggerUI para documentación de APIs",
      "Gestión de servidores con Cpanel y Hostinger",
      "Liderazgo en desarrollo de proyectos y modelado de bases de datos",
      "Gestión de practicantes y metodología Kanban con Github/Jira",
      "Desarrollo de REST API en Spring Boot con JWT y Spring Security",
      "Control de versiones con Git/Github"
    ],
    technologies: ["Laravel", "Angular", "Spring Boot", "JWT", "MySQL", "Bootstrap", "HTML/CSS/JS", "SwaggerUI", "JPA", "Maven"]
  },
  {
    company: "ATIRPAY SOLUTIONS SAC",
    positions: [
      {
        title: "Programador Web - Área de Desarrollo",
        period: "Abril 2024 - Febrero 2025"
      }
    ],
    responsibilities: [
      "Desarrollo de interfaces para Software de Gestión Clínica",
      "Consumo de API REST",
      "Creación de componentes modulares con Angular 15",
      "Implementación de Guards, Interceptores, Servicios y Pipes",
      "Uso de Tailwind CSS y SCSS para estilos",
      "Control de versiones con Git/Github"
    ],
    technologies: ["Angular 15", "TypeScript", "Tailwind CSS", "SCSS", "Bootstrap", "REST APIs"]
  }
];

export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Sección Principal con tu Nombre */}
        <div className="flex flex-col items-center justify-center space-y-8 text-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-blue-500 dark:text-blue-400 font-medium"
            >
              Hola, soy
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Giancarlo Silva
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative inline-block"
            >
              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                Desarrollador Backend
              </motion.p>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Experiencia Profesional
            </h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-background/50 border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                    <div className="mt-2 space-y-2">
                      {exp.positions.map((pos, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex items-center mt-1 mr-3">
                            <Code className="w-4 h-4 mr-1 text-blue-400" />
                            <span className="text-blue-500">{pos.title}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3 h-3 mr-1" />
                            {pos.period}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                      <Server className="w-5 h-5 mr-2 text-purple-500" />
                      Responsabilidades
                    </h4>
                    <ul className="space-y-2 pl-1">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground/80 mb-3 flex items-center">
                      <Cpu className="w-5 h-5 mr-2 text-green-500" />
                      Tecnologías Clave
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {index === 0 && (
                      <>
                        <h4 className="font-medium text-foreground/80 mt-4 mb-3 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-yellow-500" />
                          Liderazgo
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Gestión de equipos de practicantes y liderazgo técnico en proyectos.
                        </p>

                        <h4 className="font-medium text-foreground/80 mt-4 mb-3 flex items-center">
                          <GitBranch className="w-5 h-5 mr-2 text-red-500" />
                          Metodologías
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Kanban, Git Flow, Code Reviews
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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