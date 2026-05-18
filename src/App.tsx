import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Lenis from 'lenis';
import ScrollToTop from './components/layout/ScrollToTop';
import { BRAND_ASSETS } from './constants/branding';

const HomePage = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const SolutionsPage = lazy(() => import('./pages/Solutions'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));

const PageFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-white dark:bg-deep-navy" aria-label="Loading page">
    <img
      src={BRAND_ASSETS.globe}
      alt="ShriGyro Technologies"
      className="h-14 w-14 animate-pulse object-contain drop-shadow-[0_0_24px_rgba(37,99,235,0.55)]"
      width="56"
      height="56"
      loading="eager"
      decoding="async"
    />
  </div>
);

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Initialize EmailJS on app mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (publicKey && serviceId && templateId) {
      emailjs.init(publicKey);
      console.log('✓ EmailJS initialized successfully');
    } else {
      console.warn('⚠ EmailJS not fully configured. Missing environment variables.');
    }
  }, []);
  return (
    <>
      {/* IntroLoader removed: No intro video or overlay on startup */}
      <ScrollToTop />
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            fontSize: '14px',
            fontWeight: '500',
            padding: '12px 16px',
          },
          success: {
            style: {
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
            },
            iconTheme: {
              primary: '#10b981',
              secondary: '#000',
            },
          },
          error: {
            style: {
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#000',
            },
          },
        }}
      />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
