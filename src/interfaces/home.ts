export interface ITrailList {
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  difficulty: string;
  lengthRate: string;
  rating: string;
}

export interface IParamsList {
  defaultLocation: Array<number>;
  difficulty: string | null;
  lengthRate: string | null;
  rating: string | null;
  [key: string]: any;
}