import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Building2, ChevronRight, Loader, Mail, Phone, Send, User, X, Zap } from 'lucide-react';
import toast from 'react-hot-toast';
import Button from './Button';
import GlassCard from './GlassCard';
import { submitInquiry } from '@/lib/firebase';
import {
  PROJECT_TYPE_OPTIONS,
  SERVICE_OPTIONS,
  SUCCESS_MESSAGE,
  getEmailErrorMessage,
  sendEmail,
  validateFormData,
  type EmailFormData,
} from '@/utils/email';

type QueryModalDetail = Partial<Pick<EmailFormData, 'service' | 'projectType'>> & {
  formName?: string;
  title?: string;
};

const createInitialFormState = (overrides: Partial<EmailFormData> = {}): EmailFormData => ({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: overrides.service || '',
  projectType: overrides.projectType || '',
  message: '',
});

const defaultModalConfig = {
  formName: 'Popup Query Modal',
  title: 'Submit Your Query',
};

const QueryModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalConfig, setModalConfig] = useState(defaultModalConfig);
  const [formState, setFormState] = useState<EmailFormData>(createInitialFormState());

  useEffect(() => {
    const openModal = (detail: QueryModalDetail = {}) => {
      setModalConfig({
        formName: detail.formName || defaultModalConfig.formName,
        title: detail.title || defaultModalConfig.title,
      });
      setFormState((current) => ({
        ...current,
        service: detail.service ?? current.service,
        projectType: detail.projectType ?? current.projectType,
      }));
      setIsOpen(true);
    };

    const handleOpen = (event: Event) => {
      openModal((event as CustomEvent<QueryModalDetail>).detail);
    };

    window.addEventListener('openQueryModal', handleOpen);

    return () => {
      window.removeEventListener('openQueryModal', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenQueryModal', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateFormData(formState);
    if (!validation.valid) {
      validation.errors.forEach((error) => toast.error(error));
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending your inquiry...');

    try {
      await sendEmail(formState);
      toast.success(SUCCESS_MESSAGE, { id: toastId });
      void submitInquiry({ ...formState, formName: modalConfig.formName });
      setFormState(createInitialFormState());
      handleClose();
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(getEmailErrorMessage(error), { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-md dark:bg-deep-navy/80"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            className="relative z-10 w-full max-w-2xl"
          >
            <GlassCard className="overflow-hidden border-electric-blue/30 p-0 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <div className="flex flex-col md:flex-row">
                <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-electric-blue to-cyan p-8 text-white md:w-1/3">
                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                      <Zap size={24} />
                    </div>
                    <h2 className="mb-4 font-sora text-2xl font-bold leading-tight">Let's Build the Future.</h2>
                    <p className="font-inter text-sm text-white/80">
                      Get a custom solution for your business or academic project.
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <ChevronRight size={14} />
                      <span>Enterprise Ready</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <ChevronRight size={14} />
                      <span>AI Integrated</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                </div>

                <div className="bg-white p-8 dark:bg-deep-navy md:w-2/3">
                  <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 p-2 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-white"
                    disabled={isSubmitting}
                    aria-label="Close inquiry form"
                  >
                    <X size={20} />
                  </button>

                  <h3 className="mb-6 font-sora text-xl font-bold text-gray-900 dark:text-white">{modalConfig.title}</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 disabled:opacity-50 dark:border-white/10 dark:bg-white/5"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 disabled:opacity-50 dark:border-white/10 dark:bg-white/5"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 disabled:opacity-50 dark:border-white/10 dark:bg-white/5"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Company / College Name"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 disabled:opacity-50 dark:border-white/10 dark:bg-white/5"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <select
                      required
                      className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 disabled:opacity-50 dark:border-white/10 dark:bg-white/5"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      disabled={isSubmitting}
                    >
                      <option value="">Service Interested In</option>
                      {SERVICE_OPTIONS.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    <select
                      required
                      className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 disabled:opacity-50 dark:border-white/10 dark:bg-white/5"
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      disabled={isSubmitting}
                    >
                      <option value="">Project Type</option>
                      {PROJECT_TYPE_OPTIONS.map((projectType) => (
                        <option key={projectType} value={projectType}>
                          {projectType}
                        </option>
                      ))}
                    </select>

                    <textarea
                      rows={3}
                      required
                      minLength={10}
                      placeholder="Briefly describe your requirements..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 disabled:opacity-50 dark:border-white/10 dark:bg-white/5"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      disabled={isSubmitting}
                    />

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <Button
                        variant="gradient"
                        className="group flex-grow py-3 shadow-xl shadow-electric-blue/20 hover:shadow-cyan/40"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader size={18} className="mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                            Submit Query
                          </>
                        )}
                      </Button>
                      <Button type="button" variant="ghost" className="py-3" onClick={handleClose} disabled={isSubmitting}>
                        Explore Website
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QueryModal;
