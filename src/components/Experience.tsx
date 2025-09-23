import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { experiences } from "@/data/experiences";
import { useI18n } from "@/contexts/I18nContext";

export function Experience() {
  const { t, language } = useI18n();
  const skillTranslations: Record<string, { es: string; en: string }> = {
    'Integración de Sistemas': { es: 'Integración de Sistemas', en: 'System Integration' },
  };
  const getSkillLabel = (skill: string) => skillTranslations[skill]?.[language] ?? skill;
  return (
    <section id="experience" className="section bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">{t('experience.title')}</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea Timeline */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } reveal`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Punto Timeline */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg">
                    <div className="absolute inset-1 bg-background rounded-full">
                      {experience.type === 'work' ? (
                        <Building className="w-2 h-2 text-primary" />
                      ) : (
                        <GraduationCap className="w-2 h-2 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Contenido Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <Card className="card card-hover p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.startDate[language]} - {experience.endDate[language]}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {experience.title[language]}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{experience.organization[language]}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location[language]}</span>
                          </div>
                        </div>

                        {/* Descripción */}
                        <p className="text-foreground leading-relaxed">
                          {experience.description[language]}
                        </p>

                        {/* Habilidades */}
                        {experience.skills && (
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                              >
                                {getSkillLabel(skill)}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}