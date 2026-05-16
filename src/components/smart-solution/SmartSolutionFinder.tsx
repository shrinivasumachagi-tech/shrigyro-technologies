import React from 'react';
import SolutionSteps from './SolutionSteps';

export interface SmartSolutionFinderProps {}

const SmartSolutionFinder: React.FC<SmartSolutionFinderProps> = () => {
  return (
    <section id="smart-solution-finder" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Smart Solution Finder
        </h2>
        <SolutionSteps />
  );
};

export default SmartSolutionFinder;