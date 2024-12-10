export interface LeagueMatchesByDate {
  status: string;
  response: Response[];
}

export interface Response {
  ccode: string;
  id: number;
  primaryId: number;
  name: string;
  matches: Match[];
  internalRank: number;
  liveRank: number;
  simpleLeague: boolean;
  localRank?: number;
}

export interface Match {
  id: number;
  leagueId: number;
  time: string;
  home: Home;
  away: Away;
  eliminatedTeamId: any;
  statusId: number;
  tournamentStage: string;
  status: Status;
  timeTS: number;
}

export interface Home {
  id: number;
  score: number;
  name: string;
  longName: string;
  redCards?: number;
}

export interface Away {
  id: number;
  score: number;
  name: string;
  longName: string;
  redCards?: number;
}

export interface Status {
  utcTime: string;
  halfs: Halfs;
  finished: boolean;
  started: boolean;
  cancelled: boolean;
  awarded?: boolean;
  scoreStr?: string;
  reason?: Reason;
  numberOfHomeRedCards?: number;
  numberOfAwayRedCards?: number;
  ongoing?: boolean;
  liveTime?: LiveTime;
}

export interface Halfs {
  firstHalfStarted?: string;
  secondHalfStarted?: string;
}

export interface Reason {
  short: string;
  shortKey: string;
  long: string;
  longKey: string;
}

export interface LiveTime {
  short: string;
  shortKey: string;
  long: string;
  longKey: string;
  maxTime: number;
  addedTime: number;
}
