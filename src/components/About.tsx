import { Card } from "@/components/ui/card";
import { useI18n } from "@/contexts/I18nContext";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiGit,
  SiAngular,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiWordpress,
} from "react-icons/si";

// Icons Components with Official Colors using full SVG paths
const JavaIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={size}
    height={size}
  >
    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
    <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
    <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>
);

const PythonIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={size}
    height={size}
  >
    <defs>
      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#5A9FD4"/>
        <stop offset="1" stopColor="#306998"/>
      </linearGradient>
      <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#FFD43B"/>
        <stop offset="1" stopColor="#FFE873"/>
      </linearGradient>
    </defs>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
  </svg>
);

const TailwindIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={size}
    height={size}
  >
    <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/>
  </svg>
);

export function About() {
  const { t } = useI18n();
  const skills = [
    // Avanzado
    { name: "HTML", icon: SiHtml5, levelKey: 'skills.level.advanced', color: "#E34F26" },
    { name: "CSS", icon: SiCss3, levelKey: 'skills.level.advanced', color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, levelKey: 'skills.level.advanced', color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, levelKey: 'skills.level.advanced', color: "#3178C6" },
    { name: "Angular", icon: SiAngular, levelKey: 'skills.level.advanced', color: "#DD0031" },
    { name: "React", icon: SiReact, levelKey: 'skills.level.advanced', color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, levelKey: 'skills.level.advanced', color: "#339933" },
    { name: "Express", icon: SiExpress, levelKey: 'skills.level.advanced', color: "#000000" },
    { name: "MySQL", icon: SiMysql, levelKey: 'skills.level.advanced', color: "#4479A1" },
    { name: "Git", icon: SiGit, levelKey: 'skills.level.advanced', color: "#F05032" },
    // Intermedio
    { name: "PHP", icon: SiPhp, levelKey: 'skills.level.intermediate', color: "#777BB4" },
    { name: "Java", icon: JavaIcon, levelKey: 'skills.level.intermediate', color: "#007396" },
    { name: "Tailwind CSS", icon: TailwindIcon, levelKey: 'skills.level.intermediate', color: "#06B6D4" },
    { name: "MongoDB", icon: SiMongodb, levelKey: 'skills.level.intermediate', color: "#47A248" },
    // Básico
    { name: "Python", icon: PythonIcon, levelKey: 'skills.level.basic', color: "#3776AB" },
    { name: "WordPress", icon: SiWordpress, levelKey: 'skills.level.basic', color: "#21759B" },
  ];

  return (
    <section id="about" className="section bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Texto Descriptivo */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none text-justify">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t('about.p1')}
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-6">
                  {t('about.p2')}
                </p>
              </div>

            </div>

            {/* Grid Habilidades Técnicas */}
            <div className="space-y-6">
              <h3 className="h3 text-center">{t('about.skills')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  // Handle custom icons that might ignore the style prop or need specific handling
                  return (
                    <Card
                      key={skill.name}
                      className="card card-hover p-4 text-center group reveal"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 bg-muted/80 rounded-full group-hover:bg-muted shadow-sm border border-border/50">
                          {/* We still pass color for consistency but the custom component will ignore it */}
                          <IconComponent size={20} style={{ color: skill.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{skill.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{t(skill.levelKey as any)}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}