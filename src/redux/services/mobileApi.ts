import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {storage} from '../../utils/MMKV';
import {Root} from '../../interfaces/resturant.inteface';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  prepareHeaders: async headers => {
    const credentials = storage.getString('token');
    if (credentials) {
      headers.set('Authorization', `Bearer ${credentials}`);
    }
    return headers;
  },
});

const baseQueryWithCheck = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  // Gelen result'a göre hata ayıklaması yap. Unauthorized bir response tespit ettiğinde çıkış yaptır,
  // ve toast message göster.
  return result;
};

export const mobileApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithCheck,
  endpoints: builder => ({
    GetResturant: builder.query<Root, void>({
      query: () => ({
        url: 'public/resturant.json',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetResturantQuery} = mobileApi;
