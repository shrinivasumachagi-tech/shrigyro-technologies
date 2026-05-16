import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { serviceLinks } from '@/data/serviceDetails';
import { BRAND_ASSETS } from '@/constants/branding';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent',
        isScrolled
          ? 'bg-white/70 dark:bg-deep-navy/70 backdrop-blur-xl py-3 border-gray-200 dark:border-white/10 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center"
          aria-label="ShriGyro Technologies home"
        >
          <img
            src={BRAND_ASSETS.navbarLogo}
            alt="ShriGyro Technologies"
            className="h-9 w-auto max-w-[138px] object-contain drop-shadow-[0_0_0_rgba(37,99,235,0)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(37,99,235,0.55)] sm:h-11 sm:max-w-[180px] lg:h-12 lg:max-w-[190px]"
            width="190"
            height="48"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            if (link.name === 'Services') {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-electric-blue dark:hover:text-cyan transition-colors"
                    onFocus={() => setIsServicesOpen(true)}
                  >
                    Services
                    <ChevronDown size={16} className={cn('transition-transform', isServicesOpen && 'rotate-180')} />
                  </Link>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full mt-4 w-[560px] -translate-x-1/2 rounded-2xl border border-gray-200/80 bg-white/95 p-4 shadow-2xl shadow-blue-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-deep-navy/95"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              to={service.href}
                              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-blue-50 hover:text-electric-blue dark:text-gray-200 dark:hover:bg-white/5 dark:hover:text-cyan"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.name}
                              <ChevronRight size={15} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-electric-blue dark:hover:text-cyan transition-colors"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-electric-blue dark:hover:text-cyan transition-all duration-300 border border-transparent hover:border-electric-blue/30"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} className="fill-current" /> : <Sun size={20} className="fill-current" />}
          </button>
          <Button 
            variant="gradient" 
            size="sm"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent('openQueryModal', {
                  detail: {
                    formName: 'Schedule Consultation Form',
                    title: 'Schedule Consultation',
                    service: 'AI Automation',
                    projectType: 'Schedule Consultation',
                  },
                })
              )
            }
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-deep-navy border-b border-gray-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 text-gray-900 dark:text-white font-medium"
                  >
                    {link.name}
                    <ChevronRight size={18} className="text-gray-400" />
                  </Link>
                  {link.name === 'Services' && (
                    <div className="ml-3 mt-2 grid grid-cols-1 gap-1 border-l border-gray-200 pl-3 dark:border-white/10">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-electric-blue dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-cyan"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button 
                  variant="gradient" 
                  className="w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(
                      new CustomEvent('openQueryModal', {
                        detail: {
                          formName: 'Schedule Consultation Form',
                          title: 'Schedule Consultation',
                          service: 'AI Automation',
                          projectType: 'Schedule Consultation',
                        },
                      })
                    );
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
