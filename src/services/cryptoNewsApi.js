import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "X-BingApis-SDK": "true",
//   "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
//   "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
// };
const baseUrl = "https://newsapi.org/v2";

const createRequest = (url) => ({ url });
// 862219b4dc35402a957fcca12a5203c9
export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) =>
          createRequest(
            `/everything?q=${newsCategory}&apiKey=862219b4dc35402a957fcca12a5203c9&pageSize=${count}`
          ),
      }),
    }),
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi