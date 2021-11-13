import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "YOUR API KEY",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createUrlWithHeaders = (url) => ({ url, headers: cryptoHeaders }); 

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createUrlWithHeaders(`/coins?limit=${count}`),
    }),
    getCryptosDetail : builder.query({
      query: (coinId) => createUrlWithHeaders(`/coin/${coinId}`),
    }),
    getExchanges: builder.query({
      query: () => createUrlWithHeaders('/exchanges'),
    }),
    getCryptoHistory : builder.query({
      query: ({coinId,Time}) => createUrlWithHeaders(`/coin/${coinId}/history/${Time}`),
    }),
  }),
});

export const { useGetCryptosQuery,useGetCryptosDetailQuery,useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
