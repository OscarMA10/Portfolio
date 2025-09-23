import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "@/contexts/I18nContext";

const NotFound = () => {
  const { t } = useI18n();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: El usuario intentó acceder a una ruta que no existe:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('notfound.title')}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t('notfound.message')}</p>
        <a href="/" className="text-primary underline underline-offset-4 hover:opacity-90">
          {t('notfound.back')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;