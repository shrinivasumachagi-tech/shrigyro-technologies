import React from 'react';

export interface Recommendation {
  solution: string;
  stack: string[];
  estimatedCost: { min: number; max: number };
  timeline: string;
  addOns: string[];
  // new optional fields
  matchPercentage?: number;
  workflow?: string[];
  estimatedTimeline?: string;
  maintenanceRecommendation?: string;
  costBreakdown?: Record<string, number>;
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  return (
    <div className="bg-white/5 rounded-3xl border border-gray-800/20 p-6 shadow-[0_8px_30px_rgba(255,255,255,0.2)]">
      <h3 className="text-2xl font-bold text-gray-200 mb-4">Recommended Solution</h3>
      <p className="text-gray-300 mb-3">{recommendation.solution}</p>
      <h4 className="text-sm font-medium text-gray-400 mb-2">Suggested Stack</h4>
      <ul className="list-disc list-inside text-gray-300 ml-4 mb-4">
        {recommendation.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <h4 className="text-sm font-medium text-gray-400 mb-1">Estimated Cost</h4>
      <p className="text-white font-semibold mb-4-">₹{recommendation.estimatedCost.min.toLocaleString()} – ₹{recommendation.estimatedCost.max.toLocaleString()}</p>
      <p className="text-gray-300 mb-4">Timeline: {recommendation.timeline}</p>
      <h4 className="text-sm font-medium text-gray-400 mb-2">Recommended Add-ons</h4>
      <ul className="text-gray-300 list-disc list-inside ml-4">
        {recommendation.addOns.map((addOn) => (
          <li key={addOn}>{addOn}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationCard;
