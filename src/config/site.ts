import { Mail, Linkedin, Github, FileText, FolderOpen } from "lucide-react";

export const siteConfig = {
  name: "Óscar Medina Amat",
  title: "Óscar Medina Amat | Desarrollador Web Full Stack",
  description: "Desarrollador Web Full Stack especializado en Angular, React, Node.js y tecnologías modernas. Graduado en Ingeniería Multimedia por la Universidad de Alicante. Descubre mis proyectos y experiencia profesional.",
  url: "https://oscar-medina-amat.vercel.app",
  ogImage: "/og-image.svg",
  role: "Desarrollador Web Full Stack",
  email: "oscarmedinaamat@gmail.com",
  social: {
    linkedin: {
      url: "https://www.linkedin.com/in/óscar-medina-amat",
      username: "óscar-medina-amat",
      icon: Linkedin,
    },
    github: {
      url: "https://github.com/OscarMA10",
      username: "OscarMA10",
      icon: Github,
    },
    email: {
      url: "mailto:oscarmedinaamat@gmail.com",
      address: "oscarmedinaamat@gmail.com",
      icon: Mail,
    },
    cv: {
      url: "/Oscar_Medina_Amat_CV.pdf",
      filename: "Oscar_Medina_Amat_CV.pdf",
      icon: FileText
    }
  },
  nav: [
    { key: 'nav.home', href: "#hero" },
    { key: 'nav.about', href: "#about" },
    { key: 'nav.projects', href: "#projects" },
    { key: 'nav.experience', href: "#experience" },
    { key: 'nav.contact', href: "#contact" },
  ]
};
