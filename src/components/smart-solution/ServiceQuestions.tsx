import React from 'react';
import { useState } from 'react';

interface ServiceQuestionsProps {
  serviceId: string;
  onSelect: (feature: string) => void;
}

const ServiceQuestions: React.FC<ServiceQuestionsProps> = ({ serviceId, onSelect }) => {
  // Normally this would lookup detailed questions.
  return null;
}

export default ServiceQuestions;
