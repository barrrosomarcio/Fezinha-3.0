export interface CompanionNumber {
  number: number;
  frequency: number;
}

export interface NumberFrequency {
  number: number;
  frequency: number;
  companionNumbers: CompanionNumber[];
}

export interface RawNumberFrequency {
  number: string;
  frequency: string;
}

export interface RawCompanionNumber {
  companion_number: string;
  frequency: string;
}
