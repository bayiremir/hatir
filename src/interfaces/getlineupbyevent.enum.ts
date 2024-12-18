export interface GetLineUp {
  status: string;
  response: Response;
}

export interface Response {
  lineup: Lineup;
}

export interface Lineup {
  id: number;
  name: string;
  formation: string;
  starters: Starter[];
  coach: Coach;
  unavailable: Unavailable[];
  averageStarterAge: number;
}

export interface Starter {
  id: number;
  age: number;
  name: string;
  positionId: number;
  usualPlayingPositionId: number;
  shirtNumber: string;
  countryName: string;
  countryCode: string;
  horizontalLayout: HorizontalLayout;
  verticalLayout: VerticalLayout;
  performance?: Performance;
  firstName: string;
  lastName: string;
}

export interface HorizontalLayout {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface VerticalLayout {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface Performance {
  seasonGoals?: number;
  seasonAssists?: number;
  seasonRating: number;
}

export interface Coach {
  id: number;
  age: number;
  name: string;
  countryName: string;
  countryCode: string;
  firstName: string;
  lastName: string;
  primaryTeamId: number;
  primaryTeamName: string;
  usualPlayingPositionId: any;
  isCoach: boolean;
}

export interface Unavailable {
  id: number;
  age: number;
  name: string;
  positionId: number;
  countryName: string;
  countryCode: string;
  unavailability: Unavailability;
  performance: Performance2;
  firstName: string;
  lastName: string;
}

export interface Unavailability {
  injuryId?: number;
  type: string;
  expectedReturn: string;
}

export interface Performance2 {
  seasonRating: number;
}
