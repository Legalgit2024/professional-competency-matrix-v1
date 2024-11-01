import React from 'react';
import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-indigo-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Professional Competency Matrix</h1>
              <p className="text-sm text-gray-500">Autonomous Learning & Classification System</p>
            </div>
          </div>
          <nav className="flex space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Dashboard
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Analytics
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Settings
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}