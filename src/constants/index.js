import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Experiencia laboral",
  },
  {
    id: "contact",
    title: "Contactame",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador Frontend",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend (Api)",
    icon: backend,
  },
  {
    title: "Programador de Ciencia de Datos e IA",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Programador Web Freelancer",
    company_name: "Fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Desarrollé y mantuve aplicaciones web personalizadas utilizando Vue y Laravel y otras tecnologías relacionadas, adaptándome a las necesidades específicas de cada cliente.",
      "Colaboré de manera remota con equipos multifuncionales, incluidos diseñadores, gerentes de producto de y otros desarrolladores, para entregar productos en software de alta calidad.",
      "Implementé diseños responsivos y aseguré la compatibilidad entre navegadores, cumpliendo con los estándares modernos de desarrollo web.",
      "Participé en revisiones de código y ofrecí retroalimentación constructiva para mejorar la calidad del proyecto, garantizando la satisfacción del cliente.",
    ],
  },
  {
    title: "Programador Freelancer",
    company_name: "Upwork",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Trabajé como programador freelance para diversas empresas, brindando soluciones a problemas complejos en el desarrollo y mantenimiento de aplicaciones web y móviles utilizando Vue js y Laravel.",
      "Proporcioné soporte continuo para sistemas de software existentes, implementando mejoras, optimizando el rendimiento y solucionando errores para asegurar la estabilidad a largo plazo de las aplicaciones.",
      "Colaboré estrechamente con clientes para entender sus necesidades y ofrecer soluciones personalizadas que resolvieran desafíos técnicos y mejoraran la funcionalidad de sus productos.",
      "Desarrollé nuevas características, integré servicios de terceros y realicé actualizaciones de software para mantener las aplicaciones a la vanguardia de la tecnología.",
    ],
  },
  {
    title: "Programador FullStack",
    company_name: "CML Exports",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Desarrollé y mantuve la página web de e-commerce y paquetería utilizando Laravel y Livewire, asegurando una experiencia de usuario fluida y eficiente.",
      "Trabajé en la creación y mantenimiento de la API para integrar diversos servicios y facilitar la gestión de pedidos y productos en el sistema de e-commerce.",
      "Colaboré con equipos multifuncionales para diseñar soluciones tecnológicas que mejoraran la eficiencia operativa y la experiencia de compra de los usuarios.",
      "Realicé tareas de mantenimiento preventivo y correctivo en la plataforma, solucionando problemas técnicos y optimizando el rendimiento del sitio web.",
    ],
  },
  {
    title: "Programador Web FullStack",
    company_name: "Inversiones Corpovence",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web fullstack, trabajando tanto en el frontend como en el backend, para garantizar soluciones integrales y de alta calidad.",
      "Diseño e implementación de APIs para integrar diversos servicios y facilitar la comunicación entre aplicaciones dentro de los proyectos.",
      "Realización de mantenimiento constante en las plataformas, corrigiendo errores, optimizando el rendimiento y asegurando una experiencia de usuario fluida.",
      "Creación de nuevas funcionalidades y características dentro de las plataformas para mejorar la gestión administrativa, optimizando procesos y flujos de trabajo.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
