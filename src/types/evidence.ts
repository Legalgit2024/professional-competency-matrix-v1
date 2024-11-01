export interface Evidence {
  id: string;
  type: 'clinical' | 'predictive' | 'character' | 'value';
  title: string;
  value: string | number;
  source: string;
  confidence: number;
  validations: Validation[];
  timestamp: string;
}

export interface Validation {
  id: string;
  type: 'peer' | 'document' | 'metric' | 'external';
  source: string;
  score: number;
  timestamp: string;
  verifier?: string;
}

export interface EvidenceChain {
  id: string;
  evidenceIds: string[];
  confidence: number;
  validationScore: number;
  lastUpdated: string;
}