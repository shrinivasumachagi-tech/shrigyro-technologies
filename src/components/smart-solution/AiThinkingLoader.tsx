import React from 'react';
export interface AiThinkingLoaderProps {
  text?: string;
}
const AiThinkingLoader: React.FC<AiThinkingLoaderProps> = ({ text = 'Analyzing Requirements...' }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
};
export default AiThinkingLoader;
