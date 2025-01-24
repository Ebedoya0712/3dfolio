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
      "Trabajar con Eliecer fue una experiencia increíble. Nos entregó un sistema eficiente y fácil de usar que revolucionó la forma en que gestionamos nuestras ventas y el inventario. Siempre estuvo atento a nuestras necesidades y aportó ideas innovadoras. ¡Lo recomiendo totalmente!",
    name: "María López",
    designation: "Gerente",
    company: "Farmacia Vida Saludable",
  },
  {
    testimonial:
      "Desde que comencé a trabajar con Eliecer, la eficiencia y la efectividad en mis proyectos de software han mejorado considerablemente. Su capacidad para adaptar soluciones a medida según las necesidades del cliente es increíble.",
    name: "Carlos Rodríguez",
    designation: "Emprendedor",
    company: "tecnología",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He colaborado con Eliecer en varios proyectos y siempre me ha impresionado su capacidad para crear experiencias de usuario excepcionales. Su atención al detalle en la implementación de interfaces intuitivas y responsivas es incomparable.",
    name: "María Sánchez",
    designation: "Diseñadora",
    company: "Web",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sistema de Citas Medicas",
    description:
      "Desarrollé un sistema web para la gestión de citas médicas en clínicas y hospitales. El sistema permite un login con roles de usuario, registro y consulta de citas, pacientes, médicos y áreas médicas. Está construido con PHP, MySQL y AJAX, ofreciendo una experiencia fluida y optimizando la administración médica.",
    tags: [
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
      {
        name: "Ajax",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ebedoya0712/citas_medicas/tree/main",
  },
  {
    name: "BotRamsey",
    description:
      "BotRamsey es un sistema creado en Python que combina web scraping e inteligencia artificial para proporcionar recetas de cocina personalizadas. El chatbot interactivo extrae recetas de diversas fuentes web y las adapta a las preferencias del usuario. Además, utiliza IA para recomendar opciones saludables en caso de condiciones médicas específicas, como diabetes o hipertensión.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ebedoya0712/BotRamsey",
  },
  {
    name: "Sistema de Farmacia",
    description:
      "Un sistema web en PHP, MySQL, AJAX y jQuery para gestionar ventas, control de stock, clientes y reportes en una farmacia. Incluye funciones dinámicas como autocompletado, validación en tiempo real y alertas de inventario, optimizando procesos y mejorando la experiencia del usuario.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Ajax",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ebedoya0712/Sistema-Farmacia",
  },
];

export { services, technologies, experiences, testimonials, projects };
