import { Card } from "@/components/ui/card";
import { useI18n } from "@/contexts/I18nContext";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiXampp,
  SiApache,
  SiGit,
  SiAngular,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiPostman,
  SiWordpress,
} from "react-icons/si";

export function About() {
  const { t } = useI18n();
  const skills = [
    // Avanzado
    { name: "HTML", icon: SiHtml5, levelKey: 'skills.level.advanced', color: "#E34F26" },
    { name: "CSS", icon: SiCss3, levelKey: 'skills.level.advanced', color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, levelKey: 'skills.level.advanced', color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, levelKey: 'skills.level.advanced', color: "#3178C6" },
    { name: "MySQL", icon: SiMysql, levelKey: 'skills.level.advanced', color: "#4479A1" },
    { name: "XAMPP", icon: SiXampp, levelKey: 'skills.level.advanced', color: "#FB7A24" },
    { name: "Apache", icon: SiApache, levelKey: 'skills.level.advanced', color: "#D22128" },
    { name: "Git", icon: SiGit, levelKey: 'skills.level.advanced', color: "#F05032" },
    { name: "Angular", icon: SiAngular, levelKey: 'skills.level.advanced', color: "#DD0031" },
    { name: "React", icon: SiReact, levelKey: 'skills.level.advanced', color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, levelKey: 'skills.level.advanced', color: "#339933" },
    { name: "Express", icon: SiExpress, levelKey: 'skills.level.advanced', color: "#000000" },
    // Intermedio
    { name: "PHP", icon: SiPhp, levelKey: 'skills.level.intermediate', color: "#777BB4" },
    { name: "MongoDB", icon: SiMongodb, levelKey: 'skills.level.intermediate', color: "#47A248" },
    { name: "Postman", icon: SiPostman, levelKey: 'skills.level.intermediate', color: "#FF6C37" },
    // Básico
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
                  return (
                    <Card
                      key={skill.name}
                      className="card card-hover p-4 text-center group reveal"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 bg-muted/80 rounded-full group-hover:bg-muted shadow-sm border border-border/50">
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