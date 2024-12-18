import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {storage} from '../../utils/MMKV';
import {LeagueMatchesByDate} from '../../interfaces/getleaguematchesbydate.enum';
import {MatchesByDate} from '../../interfaces/getmatchesbydate.enum';
import {TrandingNews} from '../../interfaces/gettrandingnews.enum';
import {GetMatchDetailByEvent} from '../../interfaces/getmatchdetailbyevent.enum';
import {GetMatchStatusByEvent} from '../../interfaces/getmatchstatusbyevent.enum';
import {LeaguesListAll} from '../../interfaces/getleagueslistall.enum';
import {GetMatchLocation} from '../../interfaces/getmatchlocationbyevent.enum';
import {GetMatchReferee} from '../../interfaces/getmatchrefereebyevent.enum';
import {GetLineUp} from '../../interfaces/getlineupbyevent.enum';
import {GetLeagueDetail} from '../../interfaces/getleaguedetailbyleague.enum';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://free-api-live-football-data.p.rapidapi.com/',
  prepareHeaders: async headers => {
    headers.set(
      'x-rapidapi-key',
      '980ea8bb6dmsh585fbc03927a4f3p174855jsna243768a9c26',
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
    getMatchesByDate: builder.query<MatchesByDate, void>({
      query: date => ({
        url: 'football-get-matches-by-date',
        method: 'GET',
        params: {date},
      }),
    }),
    getLeagueMatchesByDate: builder.query<LeagueMatchesByDate, void>({
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
    getNewsByLeagueId: builder.query<TrandingNews, void>({
      query: leagueId => ({
        url: 'football-get-news-by-league-id',
        method: 'GET',
        params: {leagueId, page: 1},
      }),
    }),
    getMatchDetailByEventId: builder.query<GetMatchDetailByEvent, void>({
      query: eventId => ({
        url: `football-get-match-detail?eventid=${eventId}`,
        method: 'GET',
      }),
    }),
    getMatchStatusByEventId: builder.query<GetMatchStatusByEvent, void>({
      query: eventId => ({
        url: `football-get-match-status?eventid=${eventId}`,
        method: 'GET',
      }),
    }),
    getLeaguesListAll: builder.query<LeaguesListAll, void>({
      query: () => ({
        url: 'football-get-all-leagues',
        method: 'GET',
      }),
    }),
    getMatchLocationByEventId: builder.query<GetMatchLocation, void>({
      query: eventId => ({
        url: `football-get-match-location?eventid=${eventId}`,
        method: 'GET',
      }),
    }),
    getMatchRefereeByEventId: builder.query<GetMatchReferee, void>({
      query: eventId => ({
        url: `football-get-match-referee?eventid=${eventId}`,
        method: 'GET',
      }),
    }),
    getLineupHomeTeamByEventId: builder.query<GetLineUp, void>({
      query: eventId => ({
        url: `football-get-hometeam-lineup?eventid=${eventId}`,
        method: 'GET',
      }),
    }),
    getLineupAwayTeamByEventId: builder.query<GetLineUp, void>({
      query: eventId => ({
        url: `football-get-awayteam-lineup?eventid=${eventId}`,
        method: 'GET',
      }),
    }),
    getLeagueDetailByLeagueId: builder.query<GetLeagueDetail, void>({
      query: leagueId => ({
        url: `football-get-league-detail?leagueid=${leagueId}`,
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
  useGetLeaguesListAllQuery,
  useGetMatchLocationByEventIdQuery,
  useGetMatchRefereeByEventIdQuery,
  useGetLineupHomeTeamByEventIdQuery,
  useGetLineupAwayTeamByEventIdQuery,
  useGetLeagueDetailByLeagueIdQuery,
} = mobileApi;
