import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader } from 'lucide-react';
import toast from 'react-hot-toast';
import AppLayout from '@/components/layout/AppLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import GlowEffect from '@/components/ui/GlowEffect';
import { submitInquiry } from '@/lib/firebase';
import {
  PROJECT_TYPE_OPTIONS,
  SERVICE_OPTIONS,
  SUCCESS_MESSAGE,
  getEmailErrorMessage,
  sendEmail,
  validateFormData,
} from '@/utils/email';
import SEO from '@/components/layout/SEO';
import { WHATSAPP_LINK_NUMBER, WHATSAPP_NUMBER } from '@/constants/branding';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = validateFormData(formState);
    if (!validation.valid) {
      validation.errors.forEach((error) => {
        toast.error(error);
      });
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending your inquiry...');

    try {
      await sendEmail(formState);
      toast.success(SUCCESS_MESSAGE, { id: toastId });
      void submitInquiry({ ...formState, formName: 'Main Contact Form' });
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(
        getEmailErrorMessage(error),
        { id: toastId }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppLayout>
      <SEO title="Contact Us | Start Your Project" description="Get in touch for AI, ERP, and automation consultations." />
      <section className="relative pt-20 pb-12 bg-gray-50 dark:bg-deep-navy overflow-hidden">
        <GlowEffect color="bg-electric-blue" className="top-0 right-0 opacity-10" />
        <Container>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a complex engineering challenge or an academic research goal? Let's discuss how our enterprise-grade architecture and intelligent automation expertise can accelerate your project's success."
          />
        </Container>
      </section>

      <section className="py-24 bg-white dark:bg-deep-navy/50 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl border-electric-blue/20">
                <h3 className="text-xl font-bold font-sora mb-8 text-gray-900 dark:text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue flex-shrink-0 group-hover:bg-electric-blue group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:shrinivas.r.u@gmail.com" className="text-gray-800 dark:text-gray-200 font-medium hover:text-electric-blue">shrinivas.r.u@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue flex-shrink-0 group-hover:bg-electric-blue group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                      <a href={`tel:+91${WHATSAPP_NUMBER}`} className="text-gray-800 dark:text-gray-200 font-medium hover:text-electric-blue">+91 74116 55519</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue flex-shrink-0 group-hover:bg-electric-blue group-hover:text-white transition-all">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
                      <a href={`https://wa.me/${WHATSAPP_LINK_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 font-medium hover:text-electric-blue">Quick Connect</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="h-64 rounded-3xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <iframe
                  title="ShriGyro Technologies Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.302755555555!2d75.33923!3d15.3089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9290a1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sHubli%2C%20Karnataka%20580001%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <GlassCard className="p-10 border-electric-blue/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe" 
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-electric-blue outline-none transition-all focus:ring-1 focus:ring-electric-blue/30"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com" 
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-electric-blue outline-none transition-all focus:ring-1 focus:ring-electric-blue/30"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 74116 55519" 
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-electric-blue outline-none transition-all focus:ring-1 focus:ring-electric-blue/30"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Company / College Name</label>
                      <input 
                        type="text" 
                        placeholder="Company or college" 
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-electric-blue outline-none transition-all focus:ring-1 focus:ring-electric-blue/30"
                        value={formState.company}
                        onChange={(e) => setFormState({...formState, company: e.target.value})}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Service Interested In *</label>
                      <select 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-electric-blue outline-none transition-all appearance-none cursor-pointer"
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                        disabled={isSubmitting}
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Project Type *</label>
                      <select 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-electric-blue outline-none transition-all appearance-none cursor-pointer"
                        value={formState.projectType}
                        onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                        disabled={isSubmitting}
                      >
                        <option value="">Select project type</option>
                        {PROJECT_TYPE_OPTIONS.map((projectType) => (
                          <option key={projectType} value={projectType}>{projectType}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message *</label>
                    <textarea 
                      rows={5} 
                      required
                      minLength={10}
                      placeholder="Tell us about your requirements..." 
                      className="w-full px-5 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-electric-blue outline-none transition-all focus:ring-1 focus:ring-electric-blue/30 resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="w-full py-5 shadow-2xl shadow-electric-blue/20 hover:shadow-cyan/40 group" 
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>
    </AppLayout>
  );
};

export default ContactPage;
