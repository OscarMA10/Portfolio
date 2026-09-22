import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nProvider } from "@/contexts/I18nContext";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ScrollToTop } from "@/components/ScrollToTop";

const App = () => {
  useRevealOnScroll();
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <I18nProvider>
        <HelmetProvider>
          <ScrollToTop />
          <Analytics />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;