export interface GetMatchLocation {
  status: string;
  response: Response;
}

export interface Response {
  location: Location;
}

export interface Location {
  name: string;
  city: string;
  country: string;
  lat: number;
  long: number;
}
