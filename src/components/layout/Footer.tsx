import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import Container from '@/components/ui/Container';
import { BRAND_ASSETS } from '@/constants/branding';

const footerLinks = {
  'Quick Links': [
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  Services: [
    { name: 'AI Automation', href: '/services#ai-automation' },
    { name: 'ERP Solutions', href: '/services#erp-systems' },
    { name: 'Embedded & IoT', href: '/services#embedded-systems' },
    { name: 'Academic Projects', href: '#academic-projects' },
    { name: 'Cloud Services', href: '/services#cloud-services' },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50 pb-10 pt-20 dark:border-white/10 dark:bg-black/40">
      <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-electric-blue/5 blur-[110px]" />
      
      <Container>
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-12 flex flex-col items-center">
            <a href="/" className="group mb-6 flex flex-col items-center gap-4 sm:flex-row">
              <img
                src={BRAND_ASSETS.globe}
                alt="ShriGyro Technologies logo"
                className="h-14 w-14 object-contain drop-shadow-[0_0_22px_rgba(56,189,248,0.65)] transition-transform duration-300 group-hover:scale-105"
                width="56"
                height="56"
                loading="lazy"
                decoding="async"
              />
              <span className="font-sora text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Shri<span className="text-electric-blue">Gyro</span> Technologies
              </span>
            </a>
            <p className="mx-auto mb-8 max-w-2xl font-inter text-gray-600 dark:text-silver-gray">
              ShriGyro Technologies builds AI automation, embedded systems, IoT solutions, web platforms, cloud services, and intelligent industrial systems for modern startups and businesses.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="#" aria-label="LinkedIn" className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-electric-blue hover:text-white hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ShrinivasRU" aria-label="GitHub" className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-electric-blue hover:text-white hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]">
                <Github size={20} />
              </a>
              <a href="mailto:shrinivas.r.u@gmail.com" aria-label="Email" className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-electric-blue hover:text-white hover:shadow-[0_0_24px_rgba(37,99,235,0.3)]">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mb-12 grid w-full grid-cols-1 gap-10 border-y border-gray-200 py-10 dark:border-white/10 sm:grid-cols-2">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-5 font-sora text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                  {title}
                </h3>
                <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="font-inter text-sm text-gray-600 transition-colors hover:text-electric-blue dark:text-silver-gray dark:hover:text-cyan"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ShriGyro Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
