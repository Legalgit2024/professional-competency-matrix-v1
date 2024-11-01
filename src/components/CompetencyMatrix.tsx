import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Competency {
  title: string;
  score: number;
  validation: string;
  details: string;
}

interface CompetencyMatrixProps {
  data: Competency[];
}

export default function CompetencyMatrix({ data }: CompetencyMatrixProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">Professional Competency Matrix</h2>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="border-b border-blue-800/30 pb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <span className="text-sm font-medium text-blue-300">{item.score}%</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm text-blue-200">{item.validation}</span>
            </div>
            <p className="text-sm text-blue-300">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}