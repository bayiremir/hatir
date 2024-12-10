export interface TrandingNews {
  status: string;
  response: Response;
}

export interface Response {
  news: News[];
}

export interface News {
  imageUrl: string;
  title: string;
  gmtTime: string;
  sourceStr: string;
  sourceIconUrl: any;
  page: Page;
}

export interface Page {
  url: string;
}
