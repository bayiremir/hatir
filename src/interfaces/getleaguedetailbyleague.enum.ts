export interface GetLeagueDetail {
  status: string;
  response: Response;
}

export interface Response {
  leagues: Leagues;
}

export interface Leagues {
  id: number;
  type: string;
  name: string;
  selectedSeason: string;
  latestSeason: string;
  shortName: string;
  country: string;
  faqJSONLD: any;
  breadcrumbJSONLD: BreadcrumbJsonld;
  leagueColor: string;
}

export interface BreadcrumbJsonld {
  '@context': string;
  '@type': string;
  itemListElement: ItemListElement[];
}

export interface ItemListElement {
  '@type': string;
  position: number;
  name: string;
  item: string;
}
