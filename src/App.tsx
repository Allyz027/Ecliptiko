import React, { Suspense, lazy } from 'react';
import { createHashRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

const HomePage     = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const GalaraPage   = lazy(() => import('./pages/GalaraPage'));
const SolaraPage   = lazy(() => import('./pages/SolaraPage'));
const BCPortalPage = lazy(() => import('./pages/BCPortalPage'));
const WorktimePage = lazy(() => import('./pages/WorktimePage'));
const AboutPage    = lazy(() => import('./pages/AboutPage'));
const ContactPage  = lazy(() => import('./pages/ContactPage'));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' as const } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

const Layout: React.FC = () => (
  <div className="min-h-screen bg-[#050912] flex flex-col">
    <ScrollRestoration />
    <Navbar />
    <main className="flex-1">
      <Suspense fallback={<div className="min-h-screen bg-[#050912]" />}>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </Suspense>
    </main>
    <Footer />
  </div>
);

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,               element: <AnimatedPage><HomePage /></AnimatedPage> },
      { path: 'products',          element: <AnimatedPage><ProductsPage /></AnimatedPage> },
      { path: 'products/galara',   element: <AnimatedPage><GalaraPage /></AnimatedPage> },
      { path: 'products/solara',   element: <AnimatedPage><SolaraPage /></AnimatedPage> },
      { path: 'products/bcportal', element: <AnimatedPage><BCPortalPage /></AnimatedPage> },
      { path: 'products/worktime-tracker', element: <AnimatedPage><WorktimePage /></AnimatedPage> },
      { path: 'about',             element: <AnimatedPage><AboutPage /></AnimatedPage> },
      { path: 'contact',           element: <AnimatedPage><ContactPage /></AnimatedPage> },
      { path: '*',                 element: <AnimatedPage><HomePage /></AnimatedPage> },
    ],
  },
]);

const App: React.FC = () => (
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);

export default App;
