import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  label: string;
  icon: LucideIcon;
  trend: string;
}

export default function StatsCard({ title, value, label, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-6 w-6 text-blue-300" />
        <span className="text-sm text-blue-300">{trend}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-sm text-blue-200 font-medium mb-1">{title}</p>
      <p className="text-xs text-blue-300">{label}</p>
    </div>
  );
}