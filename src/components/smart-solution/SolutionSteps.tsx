import React, { useState } from 'react';
import { serviceDetails } from '../../data/serviceDetails';
import FeatureSelector from './FeatureSelector';
import SmartRecommendationCard from './SmartRecommendationCard';
import AiThinkingLoader from './AiThinkingLoader';
import PricingEngine from './PricingEngine';

const SmartSolutionSteps: React.FC = () => {
const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('startup');
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<[number, number]>([5000, 20000]);
  const [timeline, setTimeline] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<null | ReturnType<typeof PricingEngine.calculate>>(null);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleEstimate = () => {
    if (!serviceId) return;
    setLoading(true);
    setTimeout(() => {
      const rec = PricingEngine.calculate({ serviceId, selectedFeatures });
      setRecommendation(rec);
      setLoading(false);
    }, 1800);
  };

  const servicesOptions = serviceDetails.map((s) => ({ id: s.id, title: s.title }));

  return (
    <section id="smart-solution-finder" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Smart Solution Finder
        </h2>
        {/* Step 1: Business Type */}
        {step === 1 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Business Type</h3>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              <option value="startup">Startup</option>
              <option value="small-business">Small Business</option>
              <option value="industry">Industry</option>
              <option value="freelancer">Freelancer</option>
              <option value="research-organization">Research Organization</option>
              <option value="automation-company">Automation Company</option>
            </select>
          </div>
        )}
        {/* Step 2: Service Selection */}
        {step === 2 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Service Selection</h3>
            <select
              value={serviceId || ''}
              onChange={(e) => setServiceId(e.target.value || null)}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              <option value="">Select a service</option>
              {servicesOptions.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* Step 3: Feature Selector */}
        {step === 3 && serviceId && (
          <FeatureSelector
            serviceId={serviceId}
            selectedFeatures={selectedFeatures}
            setSelectedFeatures={setSelectedFeatures}
          />
        )}
        {/* Step 4: Budget Range */}
        {step === 4 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Budget Range</h3>
            <input
              type="range"
              min="5000"
              max="20000"
              value={budgetRange[0]}
              onChange={(e) => setBudgetRange([Number(e.target.value), budgetRange[1]])}
              className="w-full"
            />
          </div>
        )}
        {/* Step 5: Timeline */}
        {step === 5 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Timeline & Requirements</h3>
            <input
              type="text"
              placeholder="e.g., 4–6 weeks, immediate delivery"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
          </div>
        )}
        {/* Step 6: AI Recommendation */}
        {step === 6 && (
          <div className="mb-8">
            {loading ? (
              <AiThinkingLoader text="Generating Smart Recommendation..." />
            ) : (
              recommendation && <SmartRecommendationCard recommendation={recommendation} />
            )}
          </div>
        )}
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button onClick={prevStep} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              Back
            </button>
          )}
          {step < 6 && serviceId && (
            <button onClick={nextStep} className="px-4 py-2 rounded bg-indigo-600 text-white">
              Next
            </button>
          )}
          {step === 6 && (
            <button onClick={handleEstimate} className="px-4 py-2 rounded bg-indigo-600 text-white">
              Get Recommendation
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default SmartSolutionSteps;
