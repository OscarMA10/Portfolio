import { Mail, Linkedin, Github, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/contexts/I18nContext";

export function Contact() {
  const { t } = useI18n();
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "oscarmedinaamat@gmail.com",
      href: "mailto:oscarmedinaamat@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "óscar-medina-amat",
      href: "https://www.linkedin.com/in/óscar-medina-amat",
      color: "text-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "OscarMA10",
      href: "https://github.com/OscarMA10",
      color: "text-gray-700",
    },
  ];

  return (
    <section id="contact" className="section bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {t('contact.lead')}
            </p>
            {/* Se eliminaron los tres indicadores bajo el texto */}
          </div>

          {/* Cards de Contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              const isLast = index === contactInfo.length - 1;
              return (
                <Card
                  key={contact.label}
                  className={`card card-hover reveal group text-center hover:border-primary/20 w-full ${
                    isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-6 group-hover:scale-105 transition-all duration-300 w-full h-full p-8"
                  >
                    <div className="relative">
                      <div className="p-6 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        <IconComponent className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-xl">
                        {contact.label}
                      </h4>
                      <p className="text-foreground transition-colors font-medium">
                        {contact.value}
                      </p>
                      <div className="mt-4 inline-block px-4 py-2 bg-primary/5 group-hover:bg-primary/10 rounded-full transition-colors">
                        <span className="text-sm text-primary font-medium">
                          {t('contact.cta')}
                        </span>
                      </div>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}