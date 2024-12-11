import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {storage} from '../../utils/MMKV';
import {LeagueMatchesByDate} from '../../interfaces/getleaguematchesbydate.enum';
import {MatchesByDate} from '../../interfaces/getmatchesbydate.enum';
import {TrandingNews} from '../../interfaces/gettrandingnews.enum';
import {GetMatchDetailByEvent} from '../../interfaces/getmatchdetailbyevent.enum';
import {GetMatchStatusByEvent} from '../../interfaces/getmatchstatusbyevent.enum';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://free-api-live-football-data.p.rapidapi.com/',
  prepareHeaders: async headers => {
    headers.set(
      'x-rapidapi-key',
      '28ec50c77bmsh4ec47e395d09f7ep16a762jsna4a84292f8ea',
    );
    headers.set(
      'x-rapidapi-host',
      'free-api-live-football-data.p.rapidapi.com',
    );
    const credentials = storage.getString('token');
    if (credentials) {
      headers.set('Authorization', `Bearer ${credentials}`);
    }
    return headers;
  },
});

const baseQueryWithCheck = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  // Unauthorized kontrolü ve hata işlemleri yapılabilir
  if (result.error?.status === 401) {
    console.error('Unauthorized, logging out...');
    // Çıkış işlemi veya toast mesaj
  }
  return result;
};

export const mobileApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithCheck,
  endpoints: builder => ({
    getMatchesByDate: builder.query<MatchesByDate, string>({
      query: date => ({
        url: 'football-get-matches-by-date',
        method: 'GET',
        params: {date},
      }),
    }),
    getLeagueMatchesByDate: builder.query<LeagueMatchesByDate, string>({
      query: date => ({
        url: 'football-get-matches-by-date-and-league',
        method: 'GET',
        params: {date},
      }),
    }),
    getTrandingNews: builder.query<TrandingNews, void>({
      query: () => ({
        url: 'football-get-trendingnews',
        method: 'GET',
      }),
    }),
    getNewsByLeagueId: builder.query<TrandingNews, string>({
      query: leagueId => ({
        url: 'football-get-news-by-league-id',
        method: 'GET',
        params: {leagueId, page: 1},
      }),
    }),
    getMatchDetailByEventId: builder.query<GetMatchDetailByEvent, string>({
      query: eventId => ({
        url: `football-get-match-detail?eventid=${eventId}`,
        method: 'GET',
      }),
    }),
    getMatchStatusByEventId: builder.query<GetMatchStatusByEvent, string>({
      query: eventId => ({
        url: `football-get-match-status?eventid=${eventId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetMatchesByDateQuery,
  useGetLeagueMatchesByDateQuery,
  useGetTrandingNewsQuery,
  useGetNewsByLeagueIdQuery,
  useGetMatchDetailByEventIdQuery,
  useGetMatchStatusByEventIdQuery,
} = mobileApi;
