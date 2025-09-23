import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";

export function LanguageToggle() {
  const { language, toggleLanguage } = useI18n();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
      className="h-9 w-9 rounded-full"
    >
      <span className="text-xs font-semibold">{language === 'es' ? 'ES' : 'EN'}</span>
    </Button>
  );
}


