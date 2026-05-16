import React from 'react';
import { Recommendation } from './RecommendationCard';

interface SmartRecommendationCardProps extends Omit<{ recommendation: Recommendation }, 'estimatedCost'> {
  recommendation: Recommendation & {
    matchPercentage?: number;
    workflow?: string[];
    estimatedTimeline?: string;
    maintenanceRecommendation?: string;
    costBreakdown?: Record<string, number>;
  };
}

const SmartRecommendationCard: React.FC<SmartRecommendationCardProps> = ({ recommendation }) => {
  const { solution, stack, estimatedCost, timeline, addOns, matchPercentage, workflow, estimatedTimeline, maintenanceRecommendation, costBreakdown } = recommendation;

  return (
    <div className="bg-white/5 rounded-3xl border border-gray-800/20 p-6 shadow-[0_8px_30px_rgba(255,255,255,0.2)]">
      <h3 className="text-2xl font-bold text-gray-200 mb-4">Recommended Solution</h3>
      <p className="text-gray-300 mb-3">{solution}</p>
      {matchPercentage !== undefined && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-1">Solution Match</h4>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" stroke="#4c4c4c" strokeWidth="4" fill="none" />
              <circle cx="18" cy="18" r="16" stroke="#6c5ce7" strokeWidth="4"
                strokeDasharray={`${matchPercentage * 100} 1000`}
                transform="rotate(-90 18 18)"
              />
            </svg>
            <span className="text-white font-semibold">{matchPercentage}%</span>
          </div>
        </div>
      )}
      <h4 className="text-sm font-medium text-gray-400 mb-2">Suggested Stack</h4>
      <ul className="list-disc list-inside text-gray-300 ml-4 mb-4">
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h4 className="text-sm font-medium text-gray-400 mb-1">Estimated Cost</h4>
      <p className="text-white font-semibold mb-4-">₹{estimatedCost.min.toLocaleString()} – ₹{estimatedCost.max.toLocaleString()}</p>
      {costBreakdown && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Cost Breakdown</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {Object.entries(costBreakdown).map(([k, v]) => (
              <li key={k} className="flex justify-between">
                <span>{k}</span>
                <span>₹{v.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {(estimatedTimeline ?? timeline) && (
        <p className="text-gray-300 mb-4">Timeline: {estimatedTimeline ?? timeline}</p>
      )}
      {maintenanceRecommendation && (
        <p className="text-gray-300 mb-4">Maintenance: {maintenanceRecommendation}</p>
      )}
      {workflow && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Workflow</h4>
          <ol className="text-sm text-gray-300 space-y-1 list-decimal pl-5">
            {workflow.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      )}
      <h4 className="text-sm font-medium text-gray-400 mb-2">Recommended Add-ons</h4>
      <ul className="text-gray-300 list-disc list-inside ml-4">
        {addOns.map((addOn) => (
          <li key={addOn}>{addOn}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmartRecommendationCard;
