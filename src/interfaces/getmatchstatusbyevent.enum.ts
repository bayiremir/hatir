export interface GetMatchStatusByEvent {
  status: string;
  response: Response;
}

export interface Response {
  status: Status;
}

export interface Status {
  utcTime: string;
  numberOfHomeRedCards: number;
  numberOfAwayRedCards: number;
  halfs: Halfs;
  finished: boolean;
  started: boolean;
  cancelled: boolean;
  ongoing: boolean;
  scoreStr: string;
  liveTime: LiveTime;
}

export interface Halfs {
  firstHalfStarted: string;
  firstHalfEnded: string;
  secondHalfStarted: string;
  secondHalfEnded: string;
  firstExtraHalfStarted: string;
  secondExtraHalfStarted: string;
  gameEnded: string;
}

export interface LiveTime {
  short: string;
  shortKey: string;
  long: string;
  longKey: string;
  maxTime: number;
  penalties: any;
  addedTime: number;
}
