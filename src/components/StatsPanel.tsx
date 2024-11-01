import React from 'react';
import { Brain, Database, Shield } from 'lucide-react';

export default function StatsPanel() {
  const stats = [
    {
      icon: Brain,
      label: 'Learning Patterns',
      value: '2,847',
      change: '+12.5%',
      positive: true
    },
    {
      icon: Database,
      label: 'Evidence Chains',
      value: '1,293',
      change: '+8.2%',
      positive: true
    },
    {
      icon: Shield,
      label: 'Validation Score',
      value: '94.3%',
      change: '+2.1%',
      positive: true
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">System Analytics</h2>
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <stat.icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <div className="flex items-baseline space-x-2">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <span className={`text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}