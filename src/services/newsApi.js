import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const headers = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "YOUR API KEY",
};

const createUrlWithHeaders = (url) => ({ url, headers: headers }); 

export const newsApi = createApi({
  reducerPath:'newsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) => createUrlWithHeaders(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const {useGetNewsQuery} = newsApi