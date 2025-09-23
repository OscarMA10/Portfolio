import { FolderOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import oscarProfile from "@/assets/foto_perfil.png";
import { useI18n } from "@/contexts/I18nContext";
export function Hero() {
  const { t } = useI18n();
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Foto Perfil */}
          <div className="mb-8 reveal">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src={oscarProfile}
                  alt="Óscar Medina Amat - Desarrollador Web Full Stack"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 rounded-full animate-glow opacity-30"></div>
            </div>
          </div>

          {/* Título/Nombre */}
          <h1 className="h1 mb-6 reveal-delay-1">
            {t('hero.titlePrefix')} {" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Óscar Medina Amat
            </span>
          </h1>

          {/* Subtítulo/Descripción */}
          <p className="lead mb-8 reveal-delay-2 max-w-3xl mx-auto">
            {t('hero.role')}<br/>
            {t('hero.degree')}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-delay-2">
            <Button
              onClick={scrollToProjects}
              className="w-44 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
            >
              {t('hero.viewProjects')}
              <FolderOpen className="h-4 w-4" />
            </Button>
            
            <Button asChild className="w-44 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all">
              <a href="/Oscar_Medina_Amat_CV.pdf" download="Oscar_Medina_Amat_CV.pdf">
                {t('hero.downloadCV')}
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}