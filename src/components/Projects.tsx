import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { useI18n } from "@/contexts/I18nContext";

export function Projects() {
  const { t, language } = useI18n();
  const techTranslations: Record<string, { es: string; en: string }> = {
    'Asistente Conversacional': { es: 'Asistente Conversacional', en: 'ChatBot' },
    'Gráficos 3D': { es: 'Gráficos 3D', en: '3D Graphics' },
  };
  const getTechLabel = (tech: string) => techTranslations[tech]?.[language] ?? tech;
  return (
    <section id="projects" className="section bg-card border-y border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="card card-hover overflow-hidden group reveal flex flex-col h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Imagen Proyecto */}
              <div className="relative overflow-hidden shrink-0">
                <div className="aspect-video flex items-center justify-center bg-muted relative">
                  {project.image ? (
                    project.isMobile ? (
                      <>
                        {/* Fondo borroso para móviles */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 scale-110"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        {/* Imagen contenedora */}
                        <img
                          src={project.image}
                          alt={`Imagen del proyecto ${project.title}`}
                          className="absolute inset-0 m-auto h-full w-auto object-contain z-10 p-2"
                          loading="lazy"
                          decoding="async"
                        />
                      </>
                    ) : (
                      <img
                        src={project.image}
                        alt={`Imagen del proyecto ${project.title}`}
                        className="w-full h-full"
                        loading="lazy"
                        decoding="async"
                      />
                    )
                  ) : (
                    <div className="text-6xl opacity-20">🚀</div>
                  )}
                </div>
              </div>

              {/* Contenido Proyecto */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title[language]}
                  </h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    {project.description[language]}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {getTechLabel(tech)}
                    </Badge>
                  ))}
                </div>

                {/* Botones Acción */}
                <div className="flex gap-3 pt-2 mt-auto">
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t('projects.ariaCode')} ${project.title[language]} en GitHub`}
                      >
                        {t('projects.code')}
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all" 
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t('projects.ariaDemo')} ${project.title[language]}`}
                      >
                        {t('projects.demo')}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}