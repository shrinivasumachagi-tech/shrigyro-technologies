import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key from environment variables
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const SUCCESS_MESSAGE =
  'Your inquiry has been submitted successfully. We will get back to you shortly!';

export const SERVICE_OPTIONS = [
  'Academic Project',
  'AI Automation',
  'Web Development',
  'Embedded Systems',
  'IoT Solutions',
  'WhatsApp Automation',
  'ERP Systems',
  'Robotics',
  'Portfolio Websites',
  'Business Websites',
  'Cloud Solutions',
  'PCB Design',
  'LabVIEW Automation',
] as const;

export const PROJECT_TYPE_OPTIONS = [
  'Academic Project',
  'Commercial Project',
  'Schedule Consultation',
  'AI/ML Project',
  'IoT Solution',
  'Embedded Hardware Integration',
  'WhatsApp Automation',
  'ERP System',
  'Robotics Project',
  'LabVIEW Automation',
  'Web Application',
  'Website + AI + Dashboard',
  'Custom Development',
] as const;

export interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectType: string;
  message: string;
  company?: string;
}

type ValidationInput = Partial<EmailFormData>;

const cleanText = (value = ''): string => value.trim();

const validateEmailAddress = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhoneNumber = (phone: string): boolean => {
  const normalizedPhone = phone.replace(/[\s().-]/g, '');
  return /^\+?\d{10,15}$/.test(normalizedPhone);
};

export const validateFormData = (data: ValidationInput): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  const name = cleanText(data.name);
  const email = cleanText(data.email);
  const phone = cleanText(data.phone);
  const service = cleanText(data.service);
  const projectType = cleanText(data.projectType);
  const message = cleanText(data.message);

  if (name.length < 2) {
    errors.push('Please enter your full name.');
  }

  if (!validateEmailAddress(email)) {
    errors.push('Please enter a valid email address.');
  }

  if (!validatePhoneNumber(phone)) {
    errors.push('Please enter a valid phone number with 10 to 15 digits.');
  }

  if (!service) {
    errors.push('Please select the service you are interested in.');
  }

  if (!projectType) {
    errors.push('Please select a project type.');
  }

  if (message.length < 10) {
    errors.push('Please describe your requirement in at least 10 characters.');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

export const getEmailErrorMessage = (error: unknown): string => {
  if (typeof error === 'object' && error !== null) {
    const emailJsError = error as { text?: unknown; status?: unknown; message?: unknown };

    if (typeof emailJsError.text === 'string' && emailJsError.text.trim()) {
      return `Unable to send inquiry currently. Please try again shortly.`;
    }

    if (typeof emailJsError.message === 'string' && emailJsError.message.trim()) {
      return 'Unable to send inquiry currently. Please try again shortly.';
    }

    if (typeof emailJsError.status === 'number') {
      return `Unable to send inquiry currently. Please try again shortly.`;
    }
  }

  if (error instanceof Error) {
    return 'Unable to send inquiry currently. Please try again shortly.';
  }

  return 'Unable to send inquiry currently. Please try again shortly.';
};

export const sendEmail = async (formData: EmailFormData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        project_type: formData.projectType,
        message: formData.message,
        time: new Date().toLocaleString(),
      }
    );

    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
