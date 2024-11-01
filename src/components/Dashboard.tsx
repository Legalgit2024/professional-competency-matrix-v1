import React from 'react';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}