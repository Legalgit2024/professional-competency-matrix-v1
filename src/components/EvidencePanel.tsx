import React from 'react';
import { FileText, Link, Shield } from 'lucide-react';
import type { Evidence } from '../types/evidence';

interface EvidencePanelProps {
  evidence: Evidence;
  onValidate: (id: string) => void;
}

export default function EvidencePanel({ evidence, onValidate }: EvidencePanelProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{evidence.title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Confidence:</span>
          <span className={`text-sm font-medium ${
            evidence.confidence >= 90 ? 'text-green-600' : 
            evidence.confidence >= 70 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {evidence.confidence}%
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
          <div>
            <p className="text-sm text-gray-600">{evidence.value}</p>
            <p className="text-xs text-gray-500">Source: {evidence.source}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Validations</h4>
          <div className="space-y-2">
            {evidence.validations.map((validation) => (
              <div key={validation.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-indigo-500" />
                  <span className="text-sm text-gray-600">{validation.source}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{validation.score}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={() => onValidate(evidence.id)}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Validate Evidence
          </button>
          <Link className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}