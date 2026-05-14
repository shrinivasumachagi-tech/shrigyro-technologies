export type ServiceDetail = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  workflow: string[];
  benefits: string[];
  useCases: string[];
  startingPrice: string;
  faqs: { question: string; answer: string }[];
};

export const serviceLinks = [
  { name: 'AI Automation', href: '/services#ai-automation' },
  { name: 'Web Development', href: '/services#web-development' },
  { name: 'Embedded Systems', href: '/services#embedded-systems' },
  { name: 'IoT Solutions', href: '/services#iot-solutions' },
  { name: 'ERP Systems', href: '/services#erp-systems' },
  { name: 'Robotics', href: '/services#robotics' },
  { name: 'WhatsApp Automation', href: '/services#whatsapp-automation' },
  { name: 'Academic Projects', href: '/services#academic-projects' },
  { name: 'Portfolio Websites', href: '/services#portfolio-websites' },
  { name: 'Business Websites', href: '/services#business-websites' },
  { name: 'Cloud Solutions', href: '/services#cloud-solutions' },
  { name: 'PCB Design', href: '/services#pcb-design' },
  { name: 'LabVIEW Systems', href: '/services#labview-systems' },
];

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    shortTitle: 'AI Automation',
    category: 'Intelligent Systems',
    description:
      'We build AI automation systems that reduce manual work, improve response speed, and help teams make better decisions. Our solutions include AI chat systems, data processing flows, workflow automation, lead scoring, document automation, and smart dashboards for businesses and academic use.',
    features: ['AI chat assistants', 'Workflow automation', 'Document processing', 'Lead qualification', 'Data dashboards', 'Predictive logic'],
    technologies: ['Python', 'OpenAI APIs', 'Node.js', 'React', 'Firebase', 'Cloud Functions'],
    workflow: ['Understand the manual process', 'Design the automation flow', 'Build AI prompts and logic', 'Connect APIs and data', 'Test output quality', 'Deploy and support'],
    benefits: ['Saves daily work hours', 'Improves customer response', 'Reduces repeated tasks', 'Creates scalable digital workflows'],
    useCases: ['Customer support automation', 'Internal task automation', 'Report generation', 'AI-assisted business tools'],
    startingPrice: 'Rs. 20,000+',
    faqs: [
      { question: 'Can AI automation connect with our existing tools?', answer: 'Yes. We can connect websites, forms, CRMs, sheets, databases, and third-party APIs depending on access.' },
      { question: 'Will the AI response be customized?', answer: 'Yes. We design the response style, rules, fallback handling, and business-specific knowledge flow.' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Development',
    category: 'Modern Websites',
    description:
      'We develop modern customised websites for startups, businesses, students, professionals, and growing brands with responsive design and premium user experience. We create business websites, startup websites, custom portfolio websites, AI integrated websites, landing pages, dashboard systems, admin panels, and e-commerce websites with SEO friendly structure, modern UI/UX, and dark/light theme support.',
    features: ['Business websites', 'Startup websites', 'Custom portfolio websites', 'AI integrated websites', 'Landing pages', 'Dashboard systems', 'Admin panels', 'E-commerce websites', 'Responsive mobile-friendly design', 'SEO friendly structure', 'Modern UI/UX', 'Dark/light theme support'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase', 'Netlify'],
    workflow: ['Brand and content discussion', 'Sitemap and UI planning', 'Responsive frontend build', 'Backend or form integration', 'SEO and performance checks', 'Deployment and handover'],
    benefits: ['Professional online presence', 'Mobile-ready user experience', 'Fast loading pages', 'Easy lead generation and contact flow'],
    useCases: ['Startup launch sites', 'Business service websites', 'Student and professional portfolios', 'Admin dashboards and client portals'],
    startingPrice: 'Rs. 12,000+',
    faqs: [
      { question: 'Can you build both website and dashboard?', answer: 'Yes. We can build a public website, admin panel, dashboard, authentication, database, and contact automation.' },
      { question: 'Do you support dark and light themes?', answer: 'Yes. Theme support can be included for modern websites, portfolios, and dashboards.' },
    ],
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    shortTitle: 'Embedded Systems',
    category: 'Hardware Engineering',
    description:
      'We design and develop embedded systems using microcontrollers, sensors, communication modules, and reliable firmware. Our embedded work is useful for academic projects, industrial prototypes, automation devices, monitoring units, and proof-of-concept hardware products.',
    features: ['Microcontroller programming', 'Sensor integration', 'Firmware development', 'Device control logic', 'Display and keypad systems', 'Hardware debugging'],
    technologies: ['Arduino', 'ESP32', 'STM32', 'C/C++', 'Raspberry Pi', 'UART/I2C/SPI'],
    workflow: ['Requirement discussion', 'Component selection', 'Circuit and firmware planning', 'Prototype development', 'Testing and debugging', 'Documentation and support'],
    benefits: ['Reliable working prototype', 'Clean firmware logic', 'Better hardware understanding', 'Support for demos and deployment'],
    useCases: ['Automation controllers', 'Sensor based devices', 'Monitoring systems', 'Academic hardware projects'],
    startingPrice: 'Rs. 8,000+',
    faqs: [
      { question: 'Do you provide hardware support?', answer: 'Yes. We support component selection, wiring, assembly guidance, testing, and troubleshooting.' },
      { question: 'Can you document the embedded project?', answer: 'Yes. We provide source code explanation, circuit details, flowcharts, and reports when required.' },
    ],
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    shortTitle: 'IoT Solutions',
    category: 'Connected Devices',
    description:
      'We build IoT systems that collect real-time sensor data, send it to cloud platforms, and display it on dashboards or mobile-friendly web panels. These solutions help users monitor, control, and automate devices remotely.',
    features: ['Real-time sensor monitoring', 'Cloud dashboards', 'Remote device control', 'Alerts and notifications', 'Data logging', 'Mobile-friendly panels'],
    technologies: ['ESP32', 'MQTT', 'Firebase', 'React', 'Node.js', 'Cloud hosting'],
    workflow: ['Sensor and device planning', 'Connectivity architecture', 'Firmware development', 'Dashboard design', 'Cloud integration', 'Field testing'],
    benefits: ['Remote monitoring', 'Better visibility of data', 'Faster alerts', 'Scalable connected product base'],
    useCases: ['Smart agriculture', 'Energy monitoring', 'Industrial data logging', 'Home or lab automation'],
    startingPrice: 'Rs. 15,000+',
    faqs: [
      { question: 'Can IoT data be shown on a website?', answer: 'Yes. We can create real-time dashboards with charts, controls, logs, and alerts.' },
      { question: 'Do you support Wi-Fi and GSM based IoT?', answer: 'Yes. We can work with Wi-Fi, GSM, Bluetooth, and other modules based on the use case.' },
    ],
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    shortTitle: 'WhatsApp Automation',
    category: 'Business Communication',
    description:
      'We create WhatsApp automation systems for businesses that need fast customer response, lead collection, booking flow, and notification delivery. The system can answer common questions, collect customer details, route inquiries, and connect with forms, CRMs, or internal dashboards.',
    features: ['Auto reply systems', 'Business chat automation', 'Lead collection', 'Customer response automation', 'Appointment booking', 'Notification systems', 'WhatsApp API integration', 'AI chat responses', 'Customer support automation'],
    technologies: ['WhatsApp Business API', 'Node.js', 'AI APIs', 'Firebase', 'Webhooks', 'CRM integrations'],
    workflow: ['Define chat goals', 'Design message flow', 'Build automation logic', 'Connect API and database', 'Test real conversations', 'Launch and monitor'],
    benefits: ['Fast customer response', 'More leads captured', 'Lower manual follow-up work', 'Consistent business communication'],
    useCases: ['Service bookings', 'Product inquiries', 'College or training inquiries', 'Customer support and notifications'],
    startingPrice: 'Rs. 18,000+',
    faqs: [
      { question: 'Can the bot collect leads?', answer: 'Yes. It can collect name, phone, service interest, location, and other details based on your flow.' },
      { question: 'Can AI answer customer questions?', answer: 'Yes. We can add AI responses with clear rules and fallback to a human contact flow.' },
    ],
  },
  {
    id: 'erp-systems',
    title: 'ERP Systems',
    shortTitle: 'ERP Systems',
    category: 'Business Operations',
    description:
      'We build custom ERP and internal management systems for startups and growing businesses. These systems help manage users, inventory, orders, billing, tasks, reports, and team workflows from one secure dashboard.',
    features: ['Admin dashboard', 'User roles', 'Inventory modules', 'Billing flow', 'Reports and analytics', 'Custom business workflows'],
    technologies: ['React', 'Node.js', 'Firebase', 'REST APIs', 'Cloud hosting', 'Authentication'],
    workflow: ['Business process study', 'Module planning', 'Database design', 'Dashboard development', 'Role and security setup', 'Testing and deployment'],
    benefits: ['Centralized operations', 'Reduced paperwork', 'Better reporting', 'Custom fit for the business'],
    useCases: ['Small business ERP', 'College management tools', 'Inventory systems', 'Service booking platforms'],
    startingPrice: 'Rs. 45,000+',
    faqs: [
      { question: 'Can ERP modules be added later?', answer: 'Yes. We design the system so new modules can be added as your business grows.' },
      { question: 'Can different users have different access?', answer: 'Yes. We can create role-based access for admin, staff, manager, and client users.' },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics',
    shortTitle: 'Robotics',
    category: 'Automation Hardware',
    description:
      'We develop robotics prototypes with sensors, motors, controllers, control logic, and automation workflows. Our robotics services support students, research teams, and businesses building proof-of-concept systems.',
    features: ['Motor control', 'Sensor based movement', 'Line follower and obstacle systems', 'Robotic arm logic', 'Wireless control', 'Prototype testing'],
    technologies: ['Arduino', 'ESP32', 'Raspberry Pi', 'Motor drivers', 'Python', 'Computer vision'],
    workflow: ['Define robot function', 'Select chassis and electronics', 'Build control logic', 'Assemble prototype', 'Test movement and safety', 'Prepare documentation'],
    benefits: ['Working demo model', 'Clear control logic', 'Hands-on robotics learning', 'Better research presentation'],
    useCases: ['Academic robotics projects', 'Lab prototypes', 'Automation demos', 'Vision based robot systems'],
    startingPrice: 'Rs. 18,000+',
    faqs: [
      { question: 'Can you build robotics with AI vision?', answer: 'Yes. We can integrate camera-based detection, object tracking, and AI-assisted logic.' },
      { question: 'Do you provide viva support?', answer: 'Yes. For academic robotics projects, we can provide explanation, report, PPT, and viva guidance.' },
    ],
  },
  {
    id: 'academic-projects',
    title: 'Academic Projects',
    shortTitle: 'Academic Projects',
    category: 'Student Solutions',
    description:
      'We provide complete academic project solutions for engineering and computer science students. We support embedded projects, IoT projects, AI/ML projects, robotics projects, web applications, final year projects, mini projects, IEEE projects, and internship projects with full documentation, report writing, PPT preparation, source code, hardware support, deployment support, and viva guidance.',
    features: ['Embedded projects', 'IoT projects', 'AI/ML projects', 'Robotics projects', 'Web applications', 'Final year projects', 'Mini projects', 'IEEE projects', 'Internship projects', 'Full documentation', 'Report writing', 'PPT preparation', 'Source code', 'Hardware support', 'Deployment support', 'Viva guidance'],
    technologies: ['Python', 'React', 'Arduino', 'ESP32', 'Firebase', 'MATLAB', 'LabVIEW'],
    workflow: ['Topic selection', 'Requirement discussion', 'Architecture design', 'Project development', 'Testing and debugging', 'Report and PPT preparation', 'Demo preparation', 'Viva support'],
    benefits: ['Complete project package', 'Better technical understanding', 'Professional documentation', 'Confident final demo'],
    useCases: ['Final year submissions', 'Mini projects', 'IEEE model projects', 'Internship proof of work'],
    startingPrice: 'Rs. 5,000+',
    faqs: [
      { question: 'Do you provide source code?', answer: 'Yes. Source code is included based on the selected package and project scope.' },
      { question: 'Can you help with documentation?', answer: 'Yes. We provide report writing, PPT preparation, diagrams, abstract, and viva guidance.' },
    ],
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    shortTitle: 'Portfolio Websites',
    category: 'Personal Branding',
    description:
      'We build custom portfolio websites for students, developers, designers, freelancers, and professionals who want a clean online identity. Each portfolio is structured to present skills, projects, resume, contact details, and achievements clearly.',
    features: ['Custom personal branding', 'Project showcase', 'Resume section', 'Contact form', 'Responsive layout', 'Theme support'],
    technologies: ['React', 'Tailwind CSS', 'EmailJS', 'Netlify', 'Framer Motion', 'SEO tags'],
    workflow: ['Profile and content collection', 'Design direction', 'Portfolio build', 'Contact integration', 'Testing', 'Deployment'],
    benefits: ['Professional online presence', 'Better job or client visibility', 'Easy project sharing', 'Modern personal brand'],
    useCases: ['Student portfolios', 'Developer portfolios', 'Freelancer profiles', 'Resume websites'],
    startingPrice: 'Rs. 8,000+',
    faqs: [
      { question: 'Can you add project thumbnails and GitHub links?', answer: 'Yes. We can add project cards, live links, GitHub links, and downloadable resume sections.' },
      { question: 'Can it be hosted free?', answer: 'Yes. Many portfolio websites can be deployed on Netlify or similar platforms based on requirements.' },
    ],
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    shortTitle: 'Business Websites',
    category: 'Company Presence',
    description:
      'We create business websites that explain services clearly, collect inquiries, build trust, and support growth. The website can include service pages, testimonials, pricing, contact forms, WhatsApp links, SEO structure, and analytics.',
    features: ['Service pages', 'Lead forms', 'WhatsApp CTA', 'Pricing sections', 'SEO structure', 'Analytics ready'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'EmailJS', 'Netlify', 'Google Analytics'],
    workflow: ['Business study', 'Content planning', 'UI design', 'Website development', 'Form and analytics setup', 'Launch support'],
    benefits: ['Better client trust', 'More inquiries', 'Clear service communication', 'Improved local and online presence'],
    useCases: ['Startup websites', 'Agency websites', 'Local business sites', 'Service company websites'],
    startingPrice: 'Rs. 15,000+',
    faqs: [
      { question: 'Can the website include lead capture?', answer: 'Yes. We can add forms, WhatsApp buttons, email alerts, and CRM-ready data flow.' },
      { question: 'Can you write simple website content?', answer: 'Yes. We can help structure simple, professional content based on your services.' },
    ],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortTitle: 'Cloud Solutions',
    category: 'Deployment',
    description:
      'We help deploy web apps, dashboards, APIs, IoT backends, and business systems on cloud platforms. Our cloud solutions focus on reliable hosting, secure access, database setup, backups, and smooth handover.',
    features: ['Web app deployment', 'API hosting', 'Database setup', 'Authentication', 'Cloud functions', 'Monitoring and backups'],
    technologies: ['Firebase', 'Netlify', 'Node.js', 'Cloud Functions', 'GitHub', 'REST APIs'],
    workflow: ['Review app architecture', 'Choose hosting platform', 'Configure database and environment', 'Deploy app', 'Test production flow', 'Document handover'],
    benefits: ['Reliable launch', 'Secure access', 'Scalable backend', 'Easy maintenance'],
    useCases: ['Startup MVP deployment', 'Academic project hosting', 'IoT dashboards', 'Business admin panels'],
    startingPrice: 'Rs. 10,000+',
    faqs: [
      { question: 'Can you deploy an existing project?', answer: 'Yes. We can review the code, configure environment variables, and deploy the project.' },
      { question: 'Do you provide deployment documentation?', answer: 'Yes. We can provide deployment steps, access details, and maintenance notes.' },
    ],
  },
  {
    id: 'pcb-design',
    title: 'PCB Design',
    shortTitle: 'PCB Design',
    category: 'Electronics Design',
    description:
      'We design PCB layouts for embedded and IoT prototypes, helping convert breadboard concepts into clean, compact, and more reliable hardware. We support schematic design, component placement, routing, Gerber preparation, and testing guidance.',
    features: ['Schematic design', 'PCB layout', 'Component selection', 'Gerber files', 'Prototype guidance', 'Testing support'],
    technologies: ['KiCad', 'EasyEDA', 'Arduino modules', 'ESP32 modules', 'Sensors', 'Power circuits'],
    workflow: ['Circuit requirement', 'Schematic creation', 'Layout design', 'Design review', 'Gerber export', 'Prototype test guidance'],
    benefits: ['Cleaner hardware', 'Better demo quality', 'Compact project build', 'Ready for fabrication'],
    useCases: ['IoT boards', 'Sensor boards', 'Academic hardware projects', 'Automation controllers'],
    startingPrice: 'Rs. 8,000+',
    faqs: [
      { question: 'Do you provide fabrication?', answer: 'We can provide fabrication-ready files and guidance. Fabrication support depends on project scope and location.' },
      { question: 'Can PCB be included with an embedded project?', answer: 'Yes. PCB design can be added as part of embedded, IoT, or automation projects.' },
    ],
  },
  {
    id: 'labview-systems',
    title: 'LabVIEW Systems',
    shortTitle: 'LabVIEW Systems',
    category: 'DAQ and Control',
    description:
      'We develop LabVIEW based systems for data acquisition, control panels, monitoring dashboards, instrumentation, and academic or industrial prototypes. These systems are useful when a project needs visual control, measurement, and reliable experiment flow.',
    features: ['DAQ systems', 'Virtual instruments', 'Control panels', 'Monitoring dashboards', 'Signal visualization', 'Experiment automation'],
    technologies: ['LabVIEW', 'NI DAQ', 'Arduino', 'Serial communication', 'Sensors', 'Data logging'],
    workflow: ['Measurement requirement', 'DAQ and sensor planning', 'Front panel design', 'Block diagram logic', 'Testing and calibration', 'Documentation'],
    benefits: ['Clear visual control', 'Reliable data capture', 'Professional lab demo', 'Strong academic and prototype value'],
    useCases: ['Instrumentation projects', 'Lab automation', 'Industrial monitoring prototypes', 'Academic research systems'],
    startingPrice: 'Rs. 15,000+',
    faqs: [
      { question: 'Can LabVIEW connect with Arduino?', answer: 'Yes. We can connect LabVIEW with Arduino or other hardware using serial communication and interfaces.' },
      { question: 'Do you provide LabVIEW explanation?', answer: 'Yes. We can explain the front panel, block diagram, signal flow, and testing method.' },
    ],
  },
];
