export interface CountryType {
  flags: { svg: string };
  name: { common: string };
  altSpellings: string[];
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: { [key: string]: { name: string } };
  languages: { [key: string]: string };
  borders?: string[];
}


export interface InputStates {
  search: string;
  TakeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface Region_divStates {
  region: boolean;
  AfricaClick: () => void;
  darkmode: boolean;
  AmericaClick: () => void;
  AsiaClick: () => void;
  EuropeClick: () => void;
  OceaniaClick: () => void;
}
