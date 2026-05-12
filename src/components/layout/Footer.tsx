import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Container from '@/components/ui/Container';

const footerLinks = {
  Services: [
    { name: 'AI & Automation', href: '#' },
    { name: 'ERP Systems', href: '#' },
    { name: 'Embedded & IoT', href: '#' },
    { name: 'Academic Projects', href: '#academic-projects' },
    { name: 'LabVIEW Automation', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black/40 border-t border-gray-200 dark:border-white/10 pt-20 pb-10 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative z-10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-sora">S</span>
              </div>
              <span className="text-xl font-bold font-sora tracking-tight text-gray-900 dark:text-white">
                Shri<span className="text-electric-blue">Gyro</span>
              </span>
            </a>
            <p className="text-gray-600 dark:text-silver-gray mb-8 max-w-sm font-inter">
              Engineering Intelligent Automation. Bridging Hardware, Software & Intelligent Automation for the modern enterprise.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-electric-blue hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ShrinivasRU" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-electric-blue hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="mailto:shrinivas.r.u@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-electric-blue hover:text-white transition-all" title="Email Us">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-sora font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-silver-gray hover:text-electric-blue dark:hover:text-cyan transition-colors font-inter"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-200 dark:border-white/5 mb-8">
          <div className="flex items-center gap-4 text-gray-600 dark:text-silver-gray">
            <Mail className="text-electric-blue" size={20} />
            <span className="font-inter">shrinivas.r.u@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600 dark:text-silver-gray">
            <Phone className="text-electric-blue" size={20} />
            <span className="font-inter">+91 74116 78188</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600 dark:text-silver-gray">
            <MapPin className="text-electric-blue" size={20} />
            <span className="font-inter">Karnataka, India</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-white/5">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-inter">
            © {new Date().getFullYear()} ShriGyro Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-400 font-inter">Designed with Excellence</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
