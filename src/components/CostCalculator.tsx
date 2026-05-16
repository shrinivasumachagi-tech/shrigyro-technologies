import React, { useMemo, useState } from "react";
import {
  Briefcase,
  Globe,
  Cpu,
 Bot,
  Server,
  GraduationCap,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  CalendarClock,
} from "lucide-react";

type ServiceType =
  | "web"
  | "automation"
  | "embedded"
  | "labview"
  | "cloud"
  | "academic";

interface EstimateResult {
  title: string;
  min: number;
  max: number;
  timeline: string;
  features: string[];
}

const serviceOptions = [
  {
    id: "web",
    title: "Web Development",
    icon: Globe,
  },
  {
    id: "automation",
    title: "WhatsApp Automation",
    icon: Bot,
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    icon: Cpu,
  },
  {
    id: "labview",
    title: "LabVIEW Solutions",
    icon: Server,
  },
  {
    id: "cloud",
    title: "Cloud Services",
    icon: Briefcase,
  },
  {
    id: "academic",
    title: "Academic Projects",
    icon: GraduationCap,
  },
];

const CostCalculator: React.FC = () => {
  const [step, setStep] = useState(1);

  const [service, setService] = useState<ServiceType>("web");
  const [projectType, setProjectType] = useState("");
  const [designType, setDesignType] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [businessGrowth, setBusinessGrowth] = useState(6);

  const toggleFeature = (feature: string) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const estimate = useMemo<EstimateResult>(() => {
    let min = 0;
    let max = 0;
    let title = "";
    let timeline = "";

    switch (service) {
      case "web":
        title = "Website Development";

        if (projectType === "Business Website") {
          min = 10000;
          max = 15000;
        }

        if (projectType === "Portfolio Website") {
          min = 5000;
          max = 8000;
        }

        if (projectType === "Landing Page") {
          min = 4000;
          max = 7000;
        }

        if (projectType === "E-Commerce") {
          min = 15000;
          max = 35000;
        }

        if (projectType === "Custom Web App") {
          min = 20000;
          max = 50000;
        }

        if (designType === "3D Website") {
          min += 3000;
          max += 7000;
        }

        timeline = "1 - 3 Weeks";
        break;

      case "automation":
        title = "WhatsApp Automation";

        min = 2000;
        max = 8000;

        if (features.includes("Chat Booking")) {
          min += 2000;
          max += 3000;
        }

        timeline = "3 - 7 Days";
        break;

      case "embedded":
        title = "Embedded Systems";

        min = 8000;
        max = 15000;

        timeline = "2 - 4 Weeks";
        break;

      case "labview":
        title = "LabVIEW Projects";

        min = 20000;
        max = 100000;

        timeline = "2 - 8 Weeks";
        break;

      case "cloud":
        title = "Cloud Services";

        min = 5000;
        max = 15000;

        timeline = "1 - 2 Weeks";
        break;

      case "academic":
        title = "Academic Projects";

        min = 4000;
        max = 15000;

        if (features.includes("Hardware")) {
          min += 3000;
          max += 5000;
        }

        if (features.includes("Report")) {
          min += 2000;
          max += 3000;
        }

        timeline = "1 - 3 Weeks";
        break;
    }

    if (features.includes("AI Integration")) {
      min += 2000;
      max += 5000;
    }

    if (features.includes("Deployment")) {
      min += 1000;
      max += 3000;
    }

    if (features.includes("SEO")) {
      min += 1000;
      max += 2000;
    }

    if (businessGrowth >= 12) {
      min += 3000;
      max += 8000;
    }

    return {
      title,
      min,
      max,
      timeline,
      features,
    };
  }, [service, projectType, designType, features, businessGrowth]);

  return (
    <section className="w-full py-20 bg-white dark:bg-[#050816] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 text-sm font-medium mb-5">
            Smart Solution Finder
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-black dark:text-white">
            Find Your Perfect{" "}
            <span className="text-blue-600">Solution</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Answer a few questions and get a smart recommendation with
            estimated pricing based on your requirements.
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex items-center justify-center gap-5 mb-12 flex-wrap">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-semibold transition-all duration-300 ${
                step >= item
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-500">
          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Select Your Service
                </h3>

                <span className="text-gray-500 dark:text-gray-400">
                  Step 1 of 4
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {serviceOptions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setService(item.id as ServiceType)}
                      className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                        service === item.id
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                      }`}
                    >
                      <Icon className="w-10 h-10 text-blue-600 mb-4" />

                      <h4 className="font-semibold text-lg text-black dark:text-white">
                        {item.title}
                      </h4>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end mt-10">
                <button
                  onClick={() => setStep(2)}
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
                >
                  Continue
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Select Project Type
                </h3>

                <span className="text-gray-500 dark:text-gray-400">
                  Step 2 of 4
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  "Business Website",
                  "Portfolio Website",
                  "Landing Page",
                  "E-Commerce",
                  "Custom Web App",
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                      projectType === type
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                    }`}
                  >
                    <h4 className="font-semibold text-lg text-black dark:text-white">
                      {type}
                    </h4>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <label className="block mb-3 text-lg font-semibold text-black dark:text-white">
                  Select Design Style
                </label>

                <div className="grid md:grid-cols-2 gap-5">
                  {["Static Website", "3D Website"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setDesignType(item)}
                      className={`p-5 rounded-2xl border transition-all duration-300 text-left ${
                        designType === item
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                      }`}
                    >
                      <span className="font-semibold text-black dark:text-white">
                        {item}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white inline-flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
                >
                  Continue
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Select Features
                </h3>

                <span className="text-gray-500 dark:text-gray-400">
                  Step 3 of 4
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  "AI Integration",
                  "Deployment",
                  "SEO",
                  "Admin Dashboard",
                  "WhatsApp Integration",
                  "Hardware",
                  "Report",
                  "Chat Booking",
                ].map((feature) => (
                  <button
                    key={feature}
                    onClick={() => toggleFeature(feature)}
                    className={`p-5 rounded-2xl border transition-all duration-300 text-left ${
                      features.includes(feature)
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">
                        {feature}
                      </span>

                      {features.includes(feature) && (
                        <CheckCircle2 className="text-blue-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* BUSINESS GROWTH SLIDER */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarClock className="text-blue-600" />

                  <h4 className="text-xl font-bold text-black dark:text-white">
                    Business Growth Planning
                  </h4>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  Select how many months you want your business solution
                  to scale and grow.
                </p>

                <div className="bg-gray-100 dark:bg-[#111827] rounded-2xl p-6">
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={businessGrowth}
                    onChange={(e) =>
                      setBusinessGrowth(Number(e.target.value))
                    }
                    className="w-full accent-blue-600"
                  />

                  <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>1 Month</span>
                    <span className="font-bold text-blue-600 text-lg">
                      {businessGrowth} Months
                    </span>
                    <span>24 Months</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white inline-flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
                >
                  See Estimate
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-blue-600 font-medium mb-5">
                  Recommended Solution
                </div>

                <h3 className="text-4xl font-bold mb-3 text-black dark:text-white">
                  {estimate.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Estimated pricing based on your selections
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <IndianRupee className="text-blue-600" />

                    <h4 className="text-xl font-bold text-black dark:text-white">
                      Estimated Cost
                    </h4>
                  </div>

                  <div className="text-5xl font-bold text-blue-600 mb-3">
                    ₹{estimate.min.toLocaleString()} -
                  </div>

                  <div className="text-3xl font-bold text-black dark:text-white mb-5">
                    ₹{estimate.max.toLocaleString()}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300">
                    Final cost may vary slightly based on advanced
                    integrations and custom requirements.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827] p-8">
                  <h4 className="text-xl font-bold mb-5 text-black dark:text-white">
                    Project Details
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                      <span className="text-gray-600 dark:text-gray-300">
                        Timeline
                      </span>

                      <span className="font-semibold text-black dark:text-white">
                        {estimate.timeline}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                      <span className="text-gray-600 dark:text-gray-300">
                        Growth Planning
                      </span>

                      <span className="font-semibold text-blue-600">
                        {businessGrowth} Months
                      </span>
                    </div>

                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Included Features
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {estimate.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHY CHOOSE US */}
              <div className="mt-14 bg-blue-50 dark:bg-blue-900/10 rounded-3xl p-8 text-center">
                <h4 className="text-2xl font-bold mb-4 text-black dark:text-white">
                  Why Choose ShriGyro Technologies?
                </h4>

                <div className="grid md:grid-cols-3 gap-5 mt-8">
                  <div className="bg-white dark:bg-[#111827] rounded-2xl p-6">
                    <h5 className="font-bold text-blue-600 text-xl mb-2">
                      100%
                    </h5>

                    <p className="text-gray-600 dark:text-gray-300">
                      Customer Satisfaction
                    </p>
                  </div>

                  <div className="bg-white dark:bg-[#111827] rounded-2xl p-6">
                    <h5 className="font-bold text-blue-600 text-xl mb-2">
                      24/7
                    </h5>

                    <p className="text-gray-600 dark:text-gray-300">
                      Client Support
                    </p>
                  </div>

                  <div className="bg-white dark:bg-[#111827] rounded-2xl p-6">
                    <h5 className="font-bold text-blue-600 text-xl mb-2">
                      On-Time
                    </h5>

                    <p className="text-gray-600 dark:text-gray-300">
                      Project Delivery
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white inline-flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>

                <a
                  href="https://wa.me/917411655519"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;