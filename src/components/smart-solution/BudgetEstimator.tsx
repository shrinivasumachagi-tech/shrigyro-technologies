import React from 'react';
import { useState } from 'react';
import { serviceDetails } from '../../data/serviceDetails';

export interface BudgetEstimatorProps {
  onEstimate?: (estimate: number) => void;
}

const BudgetEstimator: React.FC<BudgetEstimatorProps> = ({ onEstimate }) => {
  const [projectType, setProjectType] = useState<string>('website');
  const [technology, setTechnology] = useState<string>('react');
  const [websiteType, setWebsiteType] = useState<string>('business');
  const [hardwareRequired, setHardwareRequired] = useState<boolean>(false);
  const [aiFeatures, setAiFeatures] = useState<boolean>(true);
  const [documentation, setDocumentation] = useState<boolean>(true);
  const [supportDuration, setSupportDuration] = useState<number>(1);
  const [deployment, setDeployment] = useState<boolean>(true);

  // Simplified estimate logic
  const estimate = 12000;

  return (
    <div className="padding-4">
      <p>Estimate: ₹{estimate}</p>
    </div>
  );
};

export default BudgetEstimator;
