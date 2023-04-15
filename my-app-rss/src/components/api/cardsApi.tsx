import { ImagesProps, ItemProps } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ImagesPropsSearch<T> {
  results: T[];
}

export const baseUrl = 'https://api.unsplash.com';

// export async function fetchStockCards() {
//   const res = await fetch(`${baseUrl}/photos/?&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
//   return (await res.json()) as Promise<ImagesProps[]>;
// }

// export async function fetchSearchCards(param?: string) {
//   const res = await fetch(
//     `${baseUrl}/search/photos?page=1&query=${param}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
//   );
//   const searchCards: Promise<ImagesPropsSearch<ImagesProps>> = res.json();
//   return (await searchCards).results;
// }

// export async function fetchCard(id?: string) {
//   const res = await fetch(
//     `${baseUrl}/photos/${id}/?&client_id=${process.env.REACT_APP_ACCESS_KEY}`
//   );
//   return (await res.json()) as Promise<ItemProps>;
// }

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getStockCards: builder.query<ImagesProps[], void>({
      query: () => `/photos/?&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
    }),
    getSearchCards: builder.query<ImagesProps[], string>({
      query: (param: string) =>
        `/search/photos?page=1&query=${param}&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
      transformResponse: (responseData: ImagesPropsSearch<ImagesProps>) => {
        return responseData.results;
      },
    }),
    getCard: builder.query<ItemProps, string>({
      query: (id?: string) => `/photos/${id}/?&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
    }),
  }),
});

export const { useGetSearchCardsQuery, useGetStockCardsQuery, useGetCardQuery } = unsplashApi;
