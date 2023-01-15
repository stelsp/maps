interface Datasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
}

interface Timezone {
  name: string;
  offset_STD: string;
  offset_STD_seconds: number;
  offset_DST: string;
  offset_DST_seconds: number;
  abbreviation_STD: string;
  abbreviation_DST: string;
}

interface Rank {
  importance: number;
  confidence: number;
  confidence_city_level: number;
  match_type: string;
}

interface Properties {
  datasource: Datasource;
  name: string;
  country: string;
  country_code: string;
  region: string;
  state: string;
  city: string;
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
}

interface Geometry {
  type: string;
  coordinates: number[];
}

export interface IResult {
  type: string;
  properties: Properties;
  geometry: Geometry;
  bbox: number[];
}
