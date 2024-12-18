export interface GetMatchReferee {
  status: string;
  response: Response;
}

export interface Response {
  referee: Referee;
}

export interface Referee {
  imgUrl: string;
  text: string;
  country: string;
}
