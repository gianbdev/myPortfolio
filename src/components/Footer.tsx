import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Columna 1: Información */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Sobre mí</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Desarrollador backend especializado en Laravel y Spring Boot, con experiencia en arquitecturas escalables y APIs de alto rendimiento.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-4 text-center">
            <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto md:mx-0"
              >
                Inicio
              </Link>
              <Link 
                href="/skills" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto md:mx-0"
              >
                Habilidades técnicas
              </Link>
              <Link 
                href="/projects" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto md:mx-0"
              >
                Proyectos destacados
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto md:mx-0"
              >
                Contacto profesional
              </Link>
            </nav>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-lg font-semibold">Conéctate conmigo</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link 
                href="https://github.com/gianbdev" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/giancarlo-silva-000a13285/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com/tuusuario" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="mailto:giancarlosilvagutierrez55@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Respuesta en 24-48 horas
            </p>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Giancarlo Silva - Portfolio Profesional. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Desarrollado con Next.js, Tailwind CSS y TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}