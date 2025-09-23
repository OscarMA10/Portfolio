import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nProvider } from "@/contexts/I18nContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const queryClient = new QueryClient();

const App = () => {
  useRevealOnScroll();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <I18nProvider>
          <TooltipProvider>
            <Toaster/>
            <Sonner/>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;