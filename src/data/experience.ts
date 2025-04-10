export interface Position {
    title: Record<'en' | 'es', string>;
    period: Record<'en' | 'es', string>;
  }
  
  export interface WorkExperience {
    company: string;
    positions: Position[];
    responsibilities: Record<'en' | 'es', string[]>;
    technologies: string[];
  }
  
  export const workExperience: WorkExperience[] = [
    {
      company: "IBCORP SAC",
      positions: [
        {
          title: {
            en: "Software Engineer and Programmer - IT",
            es: "Ingeniero de Software y Programador - IT"
          },
          period: {
            en: "June 2023 - March 2024",
            es: "Junio 2023 - Marzo 2024"
          }
        }
      ],
      responsibilities: {
        en: [
          "Custom software development for sales and logistics management with Laravel",
          "Creation of websites for insurance services (Backend and Frontend)",
          "Development of REST API with JWT, authentication and user roles",
          "Implementation of Jobs, Events and Queues for business logic",
          "Use of SwaggerUI for API documentation",
          "Server management with Cpanel and Hostinger",
          "Leadership in project development and database modeling",
          "Intern management and Kanban methodology with Github/Jira",
          "REST API development in Spring Boot with JWT and Spring Security",
          "Version control with Git/Github"
        ],
        es: [
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
        ]
      },
      technologies: ["Laravel", "Angular", "Spring Boot", "JWT", "MySQL", "Bootstrap", "HTML/CSS/JS", "SwaggerUI", "JPA", "Maven"]
    },
    {
      company: "ATIRPAY SOLUTIONS SAC",
      positions: [
        {
          title: {
            en: "Web Developer - Development Area",
            es: "Programador Web - Área de Desarrollo"
          },
          period: {
            en: "April 2024 - February 2025",
            es: "Abril 2024 - Febrero 2025"
          }
        }
      ],
      responsibilities: {
        en: [
          "Interface development for Clinical Management Software",
          "Consumption of REST APIs",
          "Creation of modular components with Angular 15",
          "Implementation of Guards, Interceptors, Services and Pipes",
          "Use of Tailwind CSS and SCSS for styling",
          "Version control with Git/Github"
        ],
        es: [
          "Desarrollo de interfaces para Software de Gestión Clínica",
          "Consumo de API REST",
          "Creación de componentes modulares con Angular 15",
          "Implementación de Guards, Interceptores, Servicios y Pipes",
          "Uso de Tailwind CSS y SCSS para estilos",
          "Control de versiones con Git/Github"
        ]
      },
      technologies: ["Angular 15", "TypeScript", "Tailwind CSS", "SCSS", "Bootstrap", "REST APIs"]
    }
  ];