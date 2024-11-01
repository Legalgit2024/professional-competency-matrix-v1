import React from 'react';
import { Upload, FileSearch, CheckCircle, Loader } from 'lucide-react';

interface ProcessingPanelProps {
  onFileUpload: (file: File) => void;
  status: 'idle' | 'processing' | 'complete';
  activeDocument: File | null;
}

export default function ProcessingPanel({ onFileUpload, status, activeDocument }: ProcessingPanelProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) onFileUpload(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileUpload(file);
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Document Processing</h2>
      
      {status === 'idle' && (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-sm text-gray-600">
            Drag and drop your document here, or{' '}
            <label className="text-indigo-600 hover:text-indigo-500 cursor-pointer">
              browse
              <input
                type="file"
                className="hidden"
                onChange={handleFileInput}
                accept=".pdf,.doc,.docx,.txt"
              />
            </label>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Supports PDF, DOC, DOCX, and TXT files
          </p>
        </div>
      )}

      {status === 'processing' && (
        <div className="text-center py-8">
          <Loader className="mx-auto h-12 w-12 text-indigo-600 animate-spin" />
          <p className="mt-4 text-sm text-gray-600">Processing document...</p>
          <p className="mt-2 text-xs text-gray-500">
            {activeDocument?.name}
          </p>
        </div>
      )}

      {status === 'complete' && (
        <div className="text-center py-8">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <p className="mt-4 text-sm text-gray-600">Processing complete!</p>
          <p className="mt-2 text-xs text-gray-500">
            {activeDocument?.name}
          </p>
          <button 
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Process Another Document
          </button>
        </div>
      )}
    </div>
  );
}