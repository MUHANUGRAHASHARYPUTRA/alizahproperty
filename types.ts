
export enum PropertySeries {
  SUBSIDI = 'Subsidi Series',
  KOMERSIL = 'Komersil Series'
}

export interface Property {
  id: string;
  title: string;
  series: PropertySeries;
  price: string;
  sqft: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  imageUrl: string;
  features: string[];
  isSoldOut?: boolean;
}

export interface FeatureComparison {
  feature: string;
  subsidi: string;
  komersil: string;
}
