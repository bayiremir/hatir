export interface GetMatchDetailByEvent {
  status: string;
  response: Response;
}

export interface Response {
  detail: Detail;
}

export interface Detail {
  matchId: string;
  matchName: string;
  matchRound: string;
  teamColors: TeamColors;
  leagueId: number;
  leagueName: string;
  leagueRoundName: string;
  parentLeagueId: number;
  countryCode: string;
  parentLeagueName: string;
  parentLeagueSeason: string;
  parentLeagueTournamentId: number;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  coverageLevel: string;
  matchTimeUTC: string;
  matchTimeUTCDate: string;
  started: boolean;
  finished: boolean;
}

export interface TeamColors {
  darkMode: DarkMode;
  lightMode: LightMode;
  fontDarkMode: FontDarkMode;
  fontLightMode: FontLightMode;
}

export interface DarkMode {
  home: string;
  away: string;
}

export interface LightMode {
  home: string;
  away: string;
}

export interface FontDarkMode {
  home: string;
  away: string;
}

export interface FontLightMode {
  home: string;
  away: string;
}

export interface HomeTeam {
  name: string;
  id: number;
}

export interface AwayTeam {
  name: string;
  id: number;
}
