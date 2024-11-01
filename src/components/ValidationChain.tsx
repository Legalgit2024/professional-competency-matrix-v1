import React from 'react';
import { GitBranch, Shield } from 'lucide-react';
import type { EvidenceChain } from '../types/evidence';

interface ValidationChainProps {
  chain: EvidenceChain;
  onInspect: (chainId: string) => void;
}

export default function ValidationChain({ chain, onInspect }: ValidationChainProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <GitBranch className="h-5 w-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-gray-900">Evidence Chain</h3>
        </div>
        <Shield className={`h-5 w-5 ${
          chain.validationScore >= 90 ? 'text-green-500' : 
          chain.validationScore >= 70 ? 'text-yellow-500' : 'text-red-500'
        }`} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Validation Score</span>
          <span className="text-sm font-medium text-gray-900">{chain.validationScore}%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Chain Confidence</span>
          <span className="text-sm font-medium text-gray-900">{chain.confidence}%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Evidence Count</span>
          <span className="text-sm font-medium text-gray-900">{chain.evidenceIds.length}</span>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={() => onInspect(chain.id)}
            className="w-full px-4 py-2 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-md hover:bg-indigo-100 transition-colors"
          >
            Inspect Chain
          </button>
        </div>
      </div>
    </div>
  );
}