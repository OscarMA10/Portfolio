import tfgImage from "@/assets/foto_tfg.png";
import fieldmasterImage from "@/assets/foto_fieldmaster.png";

export type LocalizedString = { es: string; en: string };

export interface Project {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      es: "Desarrollo de una aplicación web para la visualización de datos ambientales en espacios naturales",
      en: "Web app for visualizing environmental data in natural areas",
    },
    description: {
      es: "Trabajo de Fin de Grado que desarrolla una aplicación web interactiva para la visualización de datos ambientales en el Parque Natural de la Laguna de Torrevieja. La herramienta facilita la comprensión y análisis de información proveniente de sensores IoT distribuidos por las estaciones de monitorización del parque, registrando variables como temperatura, humedad y velocidad del viento. El proyecto incluye tres secciones principales: Mapa con vista satelital y datos en tiempo real, Datos con estadísticas y gráficos, y Previsiones con estimaciones futuras basadas en modelos de datos recopilados.",
      en: "Final Degree Project that develops an interactive web application to visualize environmental data in the Laguna de Torrevieja Natural Park. It helps understand and analyze information from IoT sensors across monitoring stations, recording variables like temperature, humidity, and wind speed. It includes three main sections: Map with satellite view and near-real-time data, Data with statistics and charts, and Forecasts with future estimates based on collected data models.",
    },
    image: tfgImage,
    technologies: ["React", "Tailwind CSS", "Leaflet", "Recharts", "Apache", "Linux", "VPS"],
    githubUrl: "https://github.com/OscarMA10/TFG",
    demoUrl: "https://oscar-medina-amat-tfg.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: {
      es: "FieldMaster - Plataforma de Estrategias Deportivas 3D",
      en: "FieldMaster - 3D Sports Strategy Platform",
    },
    description: {
      es: "Proyecto desarrollado durante el cuarto curso del grado por el grupo LiteSpark. FieldMaster es una innovadora plataforma web que permite diseñar, simular y exportar estrategias deportivas en 3D. Ofrece un entorno inmersivo para crear y visualizar jugadas para deportes como fútbol y baloncesto, con funcionalidades como diseñador de jugadas intuitivo, simulaciones personalizables, biblioteca de estrategias, modo de aprendizaje interactivo y un asistente conversacional inteligente (ChatBot). Utiliza un motor gráfico basado en Three.js para visualizaciones realistas y está diseñado tanto para uso profesional como recreativo.",
      en: "Project developed during the fourth year of the degree by the LiteSpark group. FieldMaster is a web platform to design, simulate, and export 3D sports strategies. It offers an immersive environment to create and visualize plays for sports like football and basketball, featuring an intuitive play designer, customizable simulations, strategy library, interactive learning mode, and a conversational assistant. It uses a Three.js-based graphics engine and targets both professional and recreational use.",
    },
    image: fieldmasterImage,
    technologies: ["Angular", "Three.js", "Node.js", "Express", "MySQL", "Asistente Conversacional", "Gráficos 3D"],
    githubUrl: "https://github.com/ABPMultimediaUA/litespark_abp24",
    demoUrl: "https://fieldmaster.ovh",
    featured: true,
  },
];