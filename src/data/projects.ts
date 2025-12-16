import tfgImage from "@/assets/foto_tfg.webp";
import fieldmasterImage from "@/assets/foto_fieldmaster.webp";
import ordenaPlusImage from "@/assets/foto_ordenaplus.webp";

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
  isMobile?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      es: "TFG - Aplicación web para la visualización de datos ambientales en espacios naturales",
      en: "TFG - Web app for visualizing environmental data in natural areas",
    },
    description: {
      es: "Trabajo de Fin de Grado desarrollado para visualizar datos ambientales del Parque Natural de la Laguna de Torrevieja. Incluye mapa satelital, estadísticas, gráficas y previsiones climáticas basadas en modelos de datos.",
      en: "Final Degree Project developed to visualize environmental data from Laguna de Torrevieja Natural Park. Includes satellite map, statistics, charts, and weather forecasts based on data models.",
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
      es: "Plataforma web innovadora para diseñar y simular estrategias deportivas en 3D. Ofrece diseñador de jugadas intuitivo, simulaciones personalizables, biblioteca de estrategias, modo aprendizaje y asistente conversacional.",
      en: "Innovative web platform to design and simulate 3D sports strategies. Features intuitive play designer, customizable simulations, strategy library, interactive learning mode, and conversational assistant.",
    },
    image: fieldmasterImage,
    technologies: ["Angular", "Three.js", "Node.js", "Express", "MySQL", "Asistente Conversacional", "Gráficos 3D"],
    githubUrl: "",
    demoUrl: "https://fieldmaster.ovh",
    featured: true,
  },
  {
    id: 3,
    title: {
      es: "Ordena+ - Organizador Inteligente de Galería",
      en: "Ordena+ - Smart Gallery Organizer",
    },
    description: {
      es: 'Aplicación Android nativa desarrollada con Flutter. Permite clasificar fotos y videos rápidamente mediante un sistema de "Seleccionar y Mover". Incluye gestión de estado con Riverpod, base de datos local SQFLite para metadatos y caché, y acceso optimizado a medios con Photo Manager.',
      en: 'Native Android application built with Flutter. Enables fast photo and video classification via a "Select and Move" system. Features state management with Riverpod, local SQFLite database for metadata and caching, and optimized media access using Photo Manager.',
    },
    image: ordenaPlusImage,
    technologies: ["Flutter", "Dart", "Riverpod", "SQFLite", "GoRouter", "Android"],
    githubUrl: "https://github.com/OscarMA10/OrdenaPlus",
    demoUrl: "",
    featured: true,
    isMobile: true,
  },
];