import { Route, Routes } from 'react-router';
import { Layout } from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import AreasPage from '@/pages/AreasPage';
import ExperiencePage from '@/pages/ExperiencePage';
import AccessibilityPage from '@/pages/AccessibilityPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

/** Rotas do site. Os caminhos precisam coincidir com src/content/pt-BR/seo.ts. */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="servicos" element={<ServicesPage />} />
        <Route path="areas-de-atuacao" element={<AreasPage />} />
        <Route path="experiencias" element={<ExperiencePage />} />
        <Route path="acessibilidade" element={<AccessibilityPage />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
