import React from 'react';
import { Calendar } from 'lucide-react';

export default function Timeline() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">Professional Development Timeline</h2>
      <div className="relative pl-8 border-l border-blue-800/30">
        <div className="mb-8">
          <div className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-800 rounded-full">
            <Calendar className="h-3 w-3 text-blue-300" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Expert Level Certification</h3>
            <p className="text-sm text-blue-300">Legal Framework Integration</p>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-1 text-xs rounded bg-blue-800/40 text-blue-200">
                Legal Framework
              </span>
              <span className="px-2 py-1 text-xs rounded bg-blue-800/40 text-blue-200">
                Documentation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}