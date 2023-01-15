export interface Datasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
}

export interface Timezone {
  name: string;
  offset_STD: string;
  offset_STD_seconds: number;
  offset_DST: string;
  offset_DST_seconds: number;
  abbreviation_STD: string;
  abbreviation_DST: string;
}

export interface Rank {
  importance: number;
  confidence: number;
  confidence_city_level: number;
  match_type: string;
}

export interface Properties {
  datasource: Datasource;
  country: string;
  country_code: string;
  state: string;
  county: string;
  city: string;
  postcode: string;
  town: string;
  lon: number;
  lat: number;
  formatted: string;
  address_line1: string;
  address_line2: string;
  category: string;
  timezone: Timezone;
  result_type: string;
  rank: Rank;
  place_id: string;
  region: string;
  village: string;
  name: string;
  municipality: string;
  hamlet: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  bbox: number[];
}

export interface Parsed {
  city: string;
  expected_type: string;
}

export interface Query {
  text: string;
  parsed: Parsed;
}

export interface IResult {
  features: Feature[];
  type: string;
  query: Query;
}
