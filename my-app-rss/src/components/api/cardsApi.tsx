import { ImagesProps, ItemProps } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ImagesPropsSearch<T> {
  results: T[];
}

export const baseUrl = 'https://api.unsplash.com';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getStockCards: builder.query<ImagesProps[], void>({
      query: () => `/photos/?&client_id=${import.meta.env.VITE_ACCESS_KEY}`,
    }),
    getSearchCards: builder.query<ImagesProps[], string>({
      query: (param: string) => ({
        url: `/search/photos?page=1&query=${param}&client_id=${import.meta.env.VITE_ACCESS_KEY}`,
        validateStatus: (response: Response) => {
          if (response.status >= 400) {
            console.error('Error, maybe Rate Limit Exceeded');
          }
          return true;
        },
      }),
      transformResponse: (responseData: ImagesPropsSearch<ImagesProps>) => {
        return responseData.results;
      },
    }),
    getCard: builder.query<ItemProps, string>({
      query: (id?: string) => ({
        url: `/photos/${id}/?&client_id=${import.meta.env.VITE_ACCESS_KEY}`,
        validateStatus: (response: Response) => {
          if (response.status >= 400) {
            console.error('Error, maybe Rate Limit Exceeded');
          }
          return true;
        },
      }),
    }),
  }),
});

export const { useGetSearchCardsQuery, useGetStockCardsQuery, useGetCardQuery } = unsplashApi;
