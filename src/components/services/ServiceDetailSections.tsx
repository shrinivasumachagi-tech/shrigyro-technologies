import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, HelpCircle, Layers, ListChecks, Sparkles, Wrench } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import CostCalculator from '@/components/CostCalculator';
import { serviceDetails } from '@/data/serviceDetails';

const ServiceDetailSections: React.FC = () => {
  return (
    <div className="bg-white dark:bg-deep-navy">
      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-28 overflow-hidden py-24 ${index % 2 === 0 ? 'bg-white dark:bg-deep-navy' : 'bg-gray-50 dark:bg-slate-950'}`}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-sm dark:border-white/10 dark:from-white/10 dark:via-white/5 dark:to-cyan/10 md:p-10"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-electric-blue">{service.category}</p>
                  <h2 className="mb-5 font-sora text-4xl font-black leading-tight text-gray-900 dark:text-white md:text-5xl">{service.title}</h2>
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/60 bg-white/70 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-deep-navy/70">
                  <div className="mb-4 flex items-center gap-3">
                    <Sparkles className="text-electric-blue" size={22} />
                    <h3 className="font-sora text-xl font-bold text-gray-900 dark:text-white">Pricing Estimation</h3>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Starting estimate for this service is <span className="font-bold text-electric-blue">{service.startingPrice}</span>. Final cost depends on feature count, timeline, integrations, hardware, documentation, and deployment needs.
                  </p>
                  <Button
                    variant="gradient"
                    className="mt-2"
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent('openQueryModal', {
                          detail: {
                            formName: `${service.title} Service Inquiry`,
                            title: `${service.title} Inquiry`,
                            service: service.title,
                            projectType: 'Custom Development',
                          },
                        })
                      )
                    }
                  >
                    Discuss This Service
                    <ArrowRight size={17} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 flex items-center gap-3">
                  <ListChecks className="text-electric-blue" size={22} />
                  <h3 className="font-sora text-xl font-bold text-gray-900 dark:text-white">Features</h3>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 flex items-center gap-3">
                  <Wrench className="text-electric-blue" size={22} />
                  <h3 className="font-sora text-xl font-bold text-gray-900 dark:text-white">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 dark:border-white/10 dark:bg-deep-navy dark:text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Layers className="text-electric-blue" size={22} />
                    <h3 className="font-sora text-xl font-bold text-gray-900 dark:text-white">Client Use Cases</h3>
                  </div>
                  <div className="space-y-3">
                    {service.useCases.map((useCase) => (
                      <p key={useCase} className="rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-600 dark:bg-deep-navy/80 dark:text-gray-300">
                        {useCase}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 flex items-center gap-3">
                  <ArrowRight className="text-electric-blue" size={22} />
                  <h3 className="font-sora text-xl font-bold text-gray-900 dark:text-white">Workflow</h3>
                </div>
                <div className="space-y-4">
                  {service.workflow.map((step, stepIndex) => (
                    <div key={step} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-blue text-xs font-bold text-white">{stepIndex + 1}</span>
                      <span className="pt-1 text-sm font-medium text-gray-600 dark:text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <h3 className="mb-5 font-sora text-xl font-bold text-gray-900 dark:text-white">Benefits</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-gray-700 dark:bg-electric-blue/10 dark:text-gray-200">
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 flex items-center gap-3">
                  <HelpCircle className="text-electric-blue" size={22} />
                  <h3 className="font-sora text-xl font-bold text-gray-900 dark:text-white">FAQ</h3>
                </div>
                <div className="space-y-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.question}>
                      <p className="mb-1 font-bold text-gray-900 dark:text-white">{faq.question}</p>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <CostCalculator compact defaultProjectType={service.id === 'academic-projects' ? 'academic' : service.id === 'whatsapp-automation' ? 'whatsapp' : service.id === 'erp-systems' ? 'erp' : service.id === 'iot-solutions' ? 'iot' : service.id === 'embedded-systems' ? 'embedded' : service.id === 'robotics' ? 'robotics' : 'website'} />
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
};

export default ServiceDetailSections;
