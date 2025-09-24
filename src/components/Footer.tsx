import { Heart, Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function Footer() {
  const { t } = useI18n();
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:oscarmedinaamat@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/óscar-medina-amat",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/OscarMA10",
      label: "GitHub",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* Nombre/Puesto */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Óscar Medina Amat
            </button>
            <p className="text-muted-foreground mt-2">
              {t('footer.role')}
            </p>
          </div>

          {/* Links Sociales */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-125 hover:shadow-lg transform transition-all duration-300 ease-out"
                  aria-label={social.label}
                >
                  <IconComponent className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          {/* Divisor */}
          <div className="w-20 h-px bg-gradient-primary mx-auto"></div>

          {/* Copyright */}
          <div>
            <p className="text-muted-foreground text-sm">
              © 2025 Óscar Medina Amat. {t('footer.rights')}
            </p>
          </div>

          {/* Volver Arriba */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary hover:scale-110 transform transition-all duration-300 ease-out group"
          >
            {t('footer.backTop')}
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}