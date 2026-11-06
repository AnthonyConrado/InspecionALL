import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './App';
import { A11yProvider } from './lib/a11yPrefs';
import './styles/index.css';

const container = document.getElementById('root')!;

const app = (
  <StrictMode>
    <A11yProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </A11yProvider>
  </StrictMode>
);

// Páginas pré-renderizadas (npm run build) são hidratadas; em
// desenvolvimento, a aplicação é montada do zero.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
