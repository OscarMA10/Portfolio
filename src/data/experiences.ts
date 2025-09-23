export type ExperienceType = 'education' | 'work';

export type LocalizedString = { es: string; en: string };

export interface ExperienceItem {
  id: number;
  type: ExperienceType;
  title: LocalizedString;
  organization: LocalizedString;
  location: LocalizedString;
  startDate: LocalizedString;
  endDate: LocalizedString;
  description: LocalizedString;
  skills?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: 'education',
    title: { es: 'Grado en Ingeniería Multimedia', en: 'Degree in Multimedia Engineering' },
    organization: { es: 'Universidad de Alicante', en: 'University of Alicante' },
    location: { es: 'Alicante, España', en: 'Alicante, Spain' },
    startDate: { es: '2021', en: '2021' },
    endDate: { es: '2025', en: '2025' },
    description: {
      es: 'Formación integral en desarrollo web, multimedia y tecnologías modernas. Especialización en desarrollo front‑end y back‑end.',
      en: 'Comprehensive training in web development, multimedia and modern technologies. Specialization in front‑end and back‑end development.',
    },
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Angular', 'React', 'MySQL', 'MongoDB', 'WordPress'],
  },
  {
    id: 2,
    type: 'work',
    title: { es: 'Prácticas en Empresa', en: 'Company Internships' },
    organization: { es: 'Advanced Business Digitalization, S.L.', en: 'Advanced Business Digitalization, S.L.' },
    location: { es: 'San Vicente del Raspeig, Alicante', en: 'San Vicente del Raspeig, Alicante' },
    startDate: { es: 'Mayo 2025', en: 'May 2025' },
    endDate: { es: 'Julio 2025', en: 'July 2025' },
    description: {
      es: 'Integración, adaptación y customización de un sistema CRM basado en PHP con la plataforma de afiliados de la empresa programada en el mismo código.',
      en: "Integration, adaptation and customization of a PHP-based CRM with the company's affiliate platform coded in the same stack.",
    },
    skills: ['PHP', 'MySQL', 'CRM', 'Integración de Sistemas'],
  },
];