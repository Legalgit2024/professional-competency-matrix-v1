import React from 'react';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  date: string;
  authority: string;
  status: string;
}

interface CertificationsProps {
  data: Certification[];
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">Professional Certifications</h2>
      <div className="space-y-4">
        {data.map((cert, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-blue-800/20 rounded-lg">
            <Award className="h-5 w-5 text-blue-300 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-white">{cert.title}</h3>
              <p className="text-sm text-blue-300">Issued: {cert.date}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-blue-200">Ref: {cert.authority}</span>
                <span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-300">
                  {cert.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}