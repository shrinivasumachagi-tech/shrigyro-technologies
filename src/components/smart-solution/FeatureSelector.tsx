import React, { useEffect } from 'react';
import { serviceDetails } from '../../data/serviceDetails';

interface FeatureSelectorProps {
  serviceId: string;
  selectedFeatures: string[];
  setSelectedFeatures: (features: string[]) => void;
}

const FeatureSelector: React.FC<FeatureSelectorProps> = ({ serviceId, selectedFeatures, setSelectedFeatures }) => {
  const service = serviceDetails.find((s) => s.id === serviceId);
  const features = service?.features || [];

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(selectedFeatures.includes(feature) ?
      selectedFeatures.filter(f => f !== feature) :
      [...selectedFeatures, feature]);
  };

  useEffect(() => {
    // Reset features when service changes
    setSelectedFeatures([]);
  }, [serviceId, setSelectedFeatures]);

  return (
    <div>
      <h3 className="font-semibold mb-2">Features</h3>
      <div className="space-y-2">
        {features.map((feat) => (
          <label key={feat} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedFeatures.includes(feat)}
              onChange={() => toggleFeature(feat)}
              className="form-checkbox"
            />
            <span className="text-gray-800 dark:text-gray-200">{feat}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FeatureSelector;
