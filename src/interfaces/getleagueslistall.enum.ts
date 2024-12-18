export interface LeaguesListAll {
  status: string;
  response: Response;
}

export interface Response {
  leagues: League[];
}

export interface League {
  id: number;
  name: string;
  localizedName: string;
  logo: string;
}
