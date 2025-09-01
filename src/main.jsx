import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './styles/globalStyles.js';
import { RouterProvider } from 'react-router-dom';
import router from './routes.jsx';
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <GlobalStyles />
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </>
  </StrictMode>
);
