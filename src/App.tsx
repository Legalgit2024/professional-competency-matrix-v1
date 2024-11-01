import React from 'react';
import { Scale, FileCheck, Award, Network } from 'lucide-react';
import StatsCard from './components/StatsCard';
import CompetencyMatrix from './components/CompetencyMatrix';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';

function App() {
  const stats = [
    {
      title: "Overall Competency",
      value: "92.5%",
      label: "Expert Level Rating",
      icon: Scale,
      trend: "+2.3%"
    },
    {
      title: "Documentation Excellence",
      value: "95%",
      label: "Above Industry Standard",
      icon: FileCheck,
      trend: "+1.8%"
    },
    {
      title: "Professional Ethics",
      value: "96%",
      label: "Distinguished Level",
      icon: Award,
      trend: "+3.1%"
    },
    {
      title: "Legal Framework",
      value: "94%",
      label: "Expert Integration",
      icon: Network,
      trend: "+2.5%"
    }
  ];

  const competencies = [
    {
      title: "Legal Framework Mastery",
      score: 95,
      validation: "Ministry of Justice Standards",
      details: "Court Protocol & Procedures"
    }
  ];

  const certifications = [
    {
      title: "Level 3 Safeguarding Adults and Children",
      date: "2024",
      authority: "SAF2024",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800">
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Ben Mak</h1>
              <p className="text-blue-100">Professional Legal Intelligence Portfolio</p>
            </div>
            <div className="bg-blue-800/40 px-4 py-2 rounded-lg">
              <p className="text-sm text-blue-100">Portfolio Status:</p>
              <p className="text-xl font-bold text-white">Expert Level (94.5%)</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CompetencyMatrix data={competencies} />
          <div className="space-y-8">
            <Timeline />
            <Certifications data={certifications} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;