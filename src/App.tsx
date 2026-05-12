import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import SolutionsPage from './pages/Solutions';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
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
      console.log('Required:');
      console.log('  - VITE_EMAILJS_PUBLIC_KEY:', publicKey ? '✓' : '✗');
      console.log('  - VITE_EMAILJS_SERVICE_ID:', serviceId ? '✓' : '✗');
      console.log('  - VITE_EMAILJS_TEMPLATE_ID:', templateId ? '✓' : '✗');
    }
  }, []);
  return (
    <>
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
